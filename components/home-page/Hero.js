import React from 'react'
import classes from "./hero.module.css"
import Image from "next/image"
const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/profile.jpg" alt="An image showing Hayder" width={300} height={300}  />
            </div>
            <h1>Hello I'm Hayder Aly</h1>
            <p>I blog about web development - especically frontend frameworks like React or Angular .</p>
        </section>
    )
}

export default Hero
