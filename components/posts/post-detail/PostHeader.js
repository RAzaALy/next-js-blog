import React from 'react'
import classes from "./postheader.module.css"
import Image from 'next/image'

const PostHeader = ({title, image}) => {
    return (
        <header className={classes.header}>
            <h1>{title}</h1>
            <Image src={`/images/${image}`} alt={title} width={200} height={150} />
        </header>
    )
}

export default PostHeader