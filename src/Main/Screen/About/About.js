import React from "react"
import './About.css'

export default function About() {
    return (
        <section id="about">
            <article>
                <h3>About me</h3>
                <p>My name is Muzalevskaya Anna,
                    I studied Electrical Engineering, I worked as a realtor, as a school
                    teacher and tried a lot of other jobs, but now I'm studying Web
                    Development, finally on my way to my childhood dream!</p>
                <img src="../about/self.jpg" id="selfie"></img>
            </article>
            <article id="skills">
                <h3>My Skills</h3>
                <div className="skills_container">
                    <img src="../about/icons8-html-5.svg" alt="" />
                    <img src="../about/icons8-css3.svg" alt="" />
                    <img src="../about/icons8-javascript.svg" alt="" />
                    <img src="../about/icons8-figma.svg" alt="" />
                    <img src="../about/icons8-react-native.svg" alt="" />
                    <img src="../about/icons8-sass-avatar.svg" alt="" />
                    <img src="../about/icons8-typescript.svg" alt="" />
                    <img src="../about/icons8-git.svg" alt="" />
                    <img src="../about/icons8-github.svg" alt="" />
                    <img src="../about/icons8-mongodb.svg" alt="" />
                </div>
            </article>
        </section>
    )
}