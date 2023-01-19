import React from "react"
import './About.css'

export default function About() {
    return (
        <section className="about">
            <article className="about_general">
                <h3 className="about_heading">About me</h3>
                <div>
                    <p>
                        I studied Electrical Engineering, I worked as a realtor, as a school teacher and tried a lot of other jobs, but now I'm studying Web Development, finally on my way to my childhood dream!
                    </p>
                    <p>
                        <span>First Name:</span> Anna
                    </p>
                    <p>
                        <span>Last Name:</span> Muzalevskaya
                    </p>
                    <p>
                        <span>Age:</span> 30
                    </p>
                    <p>
                        <span>Current city:</span>  Lipetsk, Russia
                    </p>
                    <p>
                        <span>Github:</span> <a href="https://github.com/NitaLewska" target="_blank" rel="noopener noreferrer"> NitaLewska</a>
                    </p>
                    <p>
                        <span>LinkedIn:</span> <a href="https://www.linkedin.com/in/anna-muzalevskaya/" target="_blank" rel="noopener noreferrer"> anna-muzalevskaya</a>
                    </p>
                    <p>
                        <span>Twitter:</span> <a href="https://twitter.com/nita_lewska" target="_blank" rel="noopener noreferrer"> @nita_lewska</a>
                    </p>
                </div>
                <img src="./about/selfie.jfif" />
            </article>
            <article className="about_skills">
                <h3 className="about_heading">My Skills</h3>
                <div className="about_skills_container">
                    <img src="./about/icons8-html-5.svg" alt="" />
                    <img src="./about/icons8-css3.svg" alt="" />
                    <img src="./about/icons8-javascript.svg" alt="" />
                    <img src="./about/icons8-figma.svg" alt="" />
                    <img src="./about/icons8-react-native.svg" alt="" />
                    <img src="./about/icons8-sass-avatar.svg" alt="" />
                    <img src="./about/icons8-typescript.svg" alt="" />
                    <img src="./about/icons8-git.svg" alt="" />
                    <img src="./about/icons8-github.svg" alt="" />
                    <img src="./about/icons8-mongodb.svg" alt="" />
                </div>
            </article>
            <article className="about_education">
                <h3 className="about_heading">My Education</h3>
                    <p className="about_education_university">LIPETSK STATE TECHNICAL UNIVERSITY</p>
                    <p className="about_education_specialty">Electrical equipment and electrical facilities of enterprises, organizations and institutions</p>
                    <p className="about_education_years">2009-2014</p>
                    <p className="about_education_university">LIPETSK STATE TECHNICAL UNIVERSITY</p>
                    <p className="about_education_specialty">Translator for professional communication</p>
                    <p className="about_education_years">2011-2014</p>
                    <p className="about_education_university">MOSCOW WITTE STATE UNIVERSITY</p>
                    <p className="about_education_specialty">Business informatics</p>
                    <p className="about_education_years">2021-2024</p>
            </article>

            <article className="about_hobbies">
                <h3 className="about_heading">Hobbies</h3>
                <div className="about_hobbies_container">
                    <img src="./about/bake.png" alt="" />
                    <img src="./about/reading.png" alt="" />
                    <img src="./about/game-console.png" alt="" />
                    <img src="./about/gym.png" alt="" />
                    <img src="./about/mushrooms.png" alt="" />
                    <img src="./about/chess.png" alt="" />
                    <img src="./about/role-playing.png" alt="" />
                </div>
            </article>
        </section>
    )
}