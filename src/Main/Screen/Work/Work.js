import React from "react"
import './Work.css'

export default function Work() {
    return(
        <section className="work">

            <p className="work_intro">I tried different professions and fields of activity before I found myself in web development, and this helped me develop a wide range of skills, like communication, .....</p>


            <article className="work__item webdev">
                <h3 className="work__heading">Frontend Web Developer</h3>
                <p><span>self-employed</span>, 2022-2023</p>
                <ul className="work__description">
                    <li>Increased sales and customer satisfaction through personalized servicing.</li>
                    <li>Listened to clients and introduced solutions to satisfy business and personal needs.</li>
                    <li>Balanced and organized cash register by handling cash, counting change and storing coupons.</li>
                    <li>Worked with loss prevention in monitoring shopper behavior.</li>
                </ul>
            </article>
            <article className="work__item tutor">
                <h3 className="work__heading">Private Maths and Physics Tutor</h3>
                <p><span>self-employed</span>, 2014-2023</p>
                <ul className="work__description">
                    <li>Used positive reinforcement, repetition and review to help students master challenging material.</li>
                    <li>Collaborated with students to complete homework assignments, identify lagging skills and correct weaknesses.</li>
                    <li>Evaluated student progress through analysis of test scores and homework completion.</li>
                    <li>Taught students remotely using online video chat platform and other delivery channels.</li>
                </ul>
            </article>
            <article className="work__item elections">
                <h3 className="work__heading">Deputy Chairman<br/>of a Local Electoral Commission</h3>
                <p><span>Lipetsk Electoral Commission 24-12</span>, 2012-2023</p>
                <ul className="work__description">
                    <li>Distributed ballots to voters and answered questions concerning voting procedures.</li>
                    <li>Maintained ballot secrecy and confidentiality.</li>
                    <li>Collected necessary information from voters to determine correct voting location and ballot.</li>
                    <li>Obtained signatures and recorded names of voters to prevent voting of unauthorized persons.</li>
                </ul>
            </article>
            <article className="work__item physics">
                <h3 className="work__heading">Physics Teacher</h3>
                <p><span>Orthodox Gymnasium, Lipetsk School 5</span>, 2017, 2020</p>
                <ul className="work__description">
                    <li>Provided physics demonstrations to illustrate how coursework can be applied.</li>
                    <li>Tested students on knowledge of physics and retention of class lessons.</li>
                    <li>Designed regular learning assessments and used performance analysis to improve training outcomes.</li>
                    <li>Encouraged critical-thinking to understand reasoning behind physics formulas.</li>
                </ul>
            </article>
            <article className="work__item realtor">
                <h3 className="work__heading">Realtor</h3>
                <p><span>real estate agency "Garant+"</span>, 2014-2015</p>
                <ul className="work__description">
                    <li>Managed contracts, negotiations and all aspects of sales to finalize purchases and exceed customer expectations.</li>
                    <li>Liaised between buyers and sellers to provide positive experiences for both parties.</li>
                    <li>Advertised client properties through websites, social media and real estate guides.</li>
                    <li>Compared recently sold area properties to determine competitive market prices.</li>
                </ul>
            </article>
            <article className="work__item mts">
                <h3 className="work__heading">Electronics Sales Associate</h3>
                <p><span>MTS</span>, 2013-2014</p>
                <ul className="work__description">
                    <li>Applied knowledge of electronics products to educate prospects and customers.</li>
                    <li>Utilized highly developed interpersonal and people skills to approach customers and engage in conversations.</li>
                    <li>Learned about customer's financial needs, established trust and optimized sales opportunities resulting in quality customer service.</li>
                    <li>Listened to customer needs and desires to identify and recommend optimal products.</li>
                </ul>
            </article>
            <article className="work__item incity">
                <h3 className="work__heading">Clothing Sales Associate</h3>
                <p><span>Incity</span>, 2013-2014</p>
                <ul className="work__description">
                    <li>Increased sales and customer satisfaction through personalized servicing.</li>
                    <li>Balanced and organized cash register by handling cash, counting change and storing coupons.</li>
                    <li>Answered customer questions about products and services, helped locate merchandise and promoted key items.</li>
                    <li>Worked with loss prevention in monitoring shopper behavior.</li>
                </ul>
            </article>
            <article className="work__item x5">
                <h3 className="work__heading">Merchandiser</h3>
                <p><span>"X5 Retail Group"</span>, 2012-2013</p>
                <ul className="work__description">
                    <li>Inspected merchandise for quality and arranged proper display location on floor.</li>
                    <li>Verified products appeared at correct locations in proper quantities.</li>
                    <li>Updated merchandise pricing to match new values and special promotional rates.</li>
                    <li>Monitored inventory levels and kept adequate stock in product displays on sales floor.</li>
                </ul>
            </article>
        </section>
    )
}