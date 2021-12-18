import React from "react";
import PostContent from "../../components/posts/post-detail/PostContent";
import { getPostData, getPostFiles } from "../../lib/posts-util";
import Head from "next/head";

const PostDetailPage = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </>
  );
};

export const getStaticProps = (ctx) => {
  const {
    params: { slug },
  } = ctx;

  const post = getPostData(`${slug}.md`);

  return {
    props: {
      post,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const postFileNames = getPostFiles();

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
};

export default PostDetailPage;
