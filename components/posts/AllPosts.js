import React from "react";
import classes from "./allposts.module.css";
import PostsGrid from "./PostsGrid";

const AllPosts = ({ posts }) => {
  return (
    <section className={classes.posts}>
      <h1>aLL pOsTs</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
