import React from "react";
import "./PortfolioCard.css"

export default function PortfolioCard(props) {
    return (
        <article className="portfolio_card">
            <img src={props.img} alt={props.name} />
            <a className="portfolio_card_details" href={props.URL} target="_blank" rel="noopener noreferrer">
                <p className="portfolio_card_details_langs">{props.langs}</p>
                <p className="portfolio_card_details_name">{props.name}</p>
                <p className="portfolio_card_details_click">click to open in a new tab</p>
                <p></p>
            </a>
        </article>
    )
}