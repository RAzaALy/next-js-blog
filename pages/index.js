import React from "react";
import Hero from "../components/home-page/Hero";
import FeaturedPosts from "../components/home-page/FeaturedPosts";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";
const HomePage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Hayder{"'"}s Blog</title>
        <meta
          name="description"
          content="I post about programming adn web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export const getStaticProps = () => {
  const posts = getFeaturedPosts();

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
};

export default HomePage;
