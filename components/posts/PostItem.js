import React from "react";
import classes from "./postitem.module.css";
import Image from "next/image"
import Link from 'next/link'

const PostItem = ({post : {title, image, excerpt, date, slug}}) => {

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: "numeric",
        month: "long",
        year: "numeric"
    })

    const imagePath = `/images/${image}`

  return (
    <li className={classes.post}>
      <Link href={`/posts/${slug}`}>
        <a>
            <div className={classes.image}>
                <Image src={imagePath} alt={title} width={300} height={200} layout="responsive"/>
            </div>
            <div className={classes.content}>
                <h3>{title}</h3>
                <time>{formattedDate}</time>
                <p>{excerpt}</p>
            </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
