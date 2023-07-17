import React from "react";
import './Portfolio.css'
import PortfolioCard from "./PortfolioCard/PortfolioCard";
import data from "./portfolio_data"

export default function Portfolio() {
    const cardsFMN = data.filter(a => (a.frontendmentor === true  && a.difficulty === "newbie")).map(a => <PortfolioCard name={a.name} img={a.thumbnail} URL={a.URL} langs={a.langs}/>)
    const cardsFMJ = data.filter(a => (a.frontendmentor === true  && a.difficulty === "junior")).map(a => <PortfolioCard name={a.name} img={a.thumbnail} URL={a.URL} langs={a.langs}/>)
    const cardsFMI = data.filter(a => (a.frontendmentor === true  && a.difficulty === "intermediate")).map(a => <PortfolioCard name={a.name} img={a.thumbnail} URL={a.URL} langs={a.langs}/>)
    const cardsFL = data.filter(a => a.freelance === true).map(a => <PortfolioCard name={a.name} img={a.thumbnail} URL={a.URL} langs={a.langs}/>)
    const cardsBest = data.filter(a => a.favourite === true).map(a => <PortfolioCard name={a.name} img={a.thumbnail} URL={a.URL} langs={a.langs}/>)
    const cardsPP = data.filter(a => a.pet === true).map(a => <PortfolioCard name={a.name} img={a.thumbnail} URL={a.URL} langs={a.langs}/>)
    return (
        <div className="portfolio_container">
            <details className="portfolio_menu_item" open>
                <summary>Best Works</summary>
                <div className="portfolio_category_container">
                    {cardsBest}
                </div>
            </details>
            <details className="portfolio_menu_item">
                <summary>Frontend Mentor</summary>
                <p className="portfolio_fm_explanation"><a href="https://www.frontendmentor.io/profile/NitaLewska" target="_blank" rel="noopener noreferrer">Frontend Mentor</a> - a website created to help developers improve front-end skills by building real projects and solving real-world HTML, CSS and JavaScript challenges whilst working to professional designs</p>
                <p className="portfolio_submenu_item">Intermediate level</p>
                <div className="portfolio_category_container">
                    {cardsFMI}
                </div>
                <p className="portfolio_submenu_item">Junior level</p>
                <div className="portfolio_category_container">
                    {cardsFMJ}
                </div>
                <p className="portfolio_submenu_item">Newbie level</p>
                <div className="portfolio_category_container">
                    {cardsFMN}
                </div>
            </details>
            <details className="portfolio_menu_item">
                <summary>Freelance</summary>
                <p className="portfolio_submenu_item">Kwork</p>
                <div className="portfolio_category_container">
                    {cardsFL}
                </div>
            </details>
            <details className="portfolio_menu_item">
                <summary>Pet projects</summary>
                <div className="portfolio_category_container">
                    {cardsPP}
                </div>
            </details>
        </div>
    )
}