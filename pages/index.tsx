import type { NextPage } from "next";
import Link from "next/link";
import Layout from "./components/layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Link href="/posts/first-post">First Post</Link>
    </Layout>
  );
};

export default Home;
