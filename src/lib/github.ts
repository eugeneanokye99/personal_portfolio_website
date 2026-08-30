import type { Stat } from "./data";

const GITHUB_USERNAME = "eugeneanokye99";

const LEVEL_MAP: Record<string, number> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

export type ContributionDay = { date: string; count: number; level: number };

export type GithubActivity = {
  repoCount: number;
  totalContributions: number;
  currentStreak: number;
  longestStreak: number;
  weeks: ContributionDay[][];
};

type GraphQLDay = { date: string; contributionCount: number; contributionLevel: string };
type GraphQLResponse = {
  data?: {
    user: {
      repositories: { totalCount: number };
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
          weeks: { contributionDays: GraphQLDay[] }[];
        };
      };
    } | null;
  };
};

export async function getGithubActivity(): Promise<GithubActivity | null> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return null;

  const query = `
    query($login: String!) {
      user(login: $login) {
        repositories(privacy: PUBLIC, ownerAffiliations: OWNER) {
          totalCount
        }
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                contributionLevel
              }
            }
          }
        }
      }
    }
  `;

  let res: Response;
  try {
    res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables: { login: GITHUB_USERNAME } }),
      next: { revalidate: 3600 },
    });
  } catch {
    return null;
  }

  if (!res.ok) return null;

  const json = (await res.json()) as GraphQLResponse;
  const user = json.data?.user;
  if (!user) return null;

  const calendar = user.contributionsCollection.contributionCalendar;
  const weeks: ContributionDay[][] = calendar.weeks.map((week) =>
    week.contributionDays.map((day) => ({
      date: day.date,
      count: day.contributionCount,
      level: LEVEL_MAP[day.contributionLevel] ?? 0,
    }))
  );

  const allDays = weeks.flat();

  let longestStreak = 0;
  let running = 0;
  for (const day of allDays) {
    if (day.count > 0) {
      running++;
      longestStreak = Math.max(longestStreak, running);
    } else {
      running = 0;
    }
  }

  let currentStreak = 0;
  for (let i = allDays.length - 1; i >= 0; i--) {
    if (allDays[i].count > 0) currentStreak++;
    else break;
  }

  return {
    repoCount: user.repositories.totalCount,
    totalContributions: calendar.totalContributions,
    currentStreak,
    longestStreak,
    weeks,
  };
}

export function activityToStats(activity: GithubActivity): Stat[] {
  return [
    { value: activity.repoCount, label: "Public repositories", prefix: "", mono: "repos" },
    { value: activity.totalContributions, label: "Contributions · last 12 months", prefix: "", mono: "commits" },
    { value: activity.longestStreak, label: "Longest streak (days)", prefix: "", mono: "streak" },
    { value: activity.currentStreak, label: "Current streak (days)", prefix: "", mono: "streak" },
  ];
}
