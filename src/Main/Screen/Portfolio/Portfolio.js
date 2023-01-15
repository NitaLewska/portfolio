import React from "react";
import './Portfolio.css'
import PortfolioCard from "./PortfolioCard/PortfolioCard";
import data from "./portfolio_data"

export default function Portfolio() {
    const cardsFMN = data.filter(a => (a.frontendmentor === true  && a.difficulty === "newbie")).map(a => <PortfolioCard name={a.name} img={a.thumbnail} URL={a.URL} />)
    const cardsFMJ = data.filter(a => (a.frontendmentor === true  && a.difficulty === "junior")).map(a => <PortfolioCard name={a.name} img={a.thumbnail} URL={a.URL} />) 
    const cardsFL = data.filter(a => a.freelance === true).map(a => <PortfolioCard name={a.name} img={a.thumbnail} URL={a.URL} />)
    const cardsBest = data.filter(a => a.favourite === true).map(a => <PortfolioCard name={a.name} img={a.thumbnail} URL={a.URL} />)
    const cardsPP = data.filter(a => a.pet === true).map(a => <PortfolioCard name={a.name} img={a.thumbnail} URL={a.URL} />)
    return (
        <div className="portfolio_container">
            <details className="portfolio_menu_item" open>
                <summary>Best of 2022</summary>
                <div className="portfolio_category_container">
                    {cardsBest}
                </div>
            </details>
            <details className="portfolio_menu_item">
                <summary>Frontend Mentor</summary>
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