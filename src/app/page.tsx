import { Portfolio } from "@/components/Portfolio";
import { getAllPosts } from "@/lib/blog";
import { getGithubActivity } from "@/lib/github";

export default async function Home() {
  const [posts, activity] = await Promise.all([getAllPosts(), getGithubActivity()]);
  return <Portfolio posts={posts} activity={activity} />;
}
