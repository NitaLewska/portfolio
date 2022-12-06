import React from "react";
import './Portfolio.css'
import PortfolioCard from "./PortfolioCard/PortfolioCard";
import data from "./portfolio_data"

export default function Portfolio() {
    const cardsFM = data.filter(a => a.frontendmentor == true).map(a => <PortfolioCard name={a.name} img={a.thumbnail} URL={a.URL} />)
    const cardsFL = data.filter(a => a.freelance == true).map(a => <PortfolioCard name={a.name} img={a.thumbnail} URL={a.URL} />)
    const cardsBest = data.filter(a => a.favourite == true).map(a => <PortfolioCard name={a.name} img={a.thumbnail} URL={a.URL} />)
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
                <div className="portfolio_category_container">
                    {cardsFM}
                </div>
            </details>
            <details className="portfolio_menu_item">
                <summary>Freelance</summary>
                <div className="portfolio_category_container">
                    {cardsFL}
                </div>
            </details>
        </div>
    )
}