import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return <Link href="/posts/first-post">First Post</Link>;
};

export default Home;
