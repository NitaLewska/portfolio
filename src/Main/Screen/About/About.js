import React from "react"
import './About.css'

export default function About() {
    return (
        <section className="about">
            <article className="about__general">
                <h3 className="about__heading">About me</h3>
                    <p><span></span></p>
            </article>
            <article className="about__skills">
                <h3 className="about__heading">My Skills</h3>
                <div className="about__skills_container">
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
            <article className="about__education">
                <h3 className="about__heading">My Education</h3>
                <p></p>
            </article>
            <article className="about__hobbies">
                <h3 className="about__heading">Hobbies</h3>
                <p>sdsd</p>
            </article>
        </section>
    )
}