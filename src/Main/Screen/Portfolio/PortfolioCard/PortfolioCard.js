import React from "react";
import "./PortfolioCard.css"

export default function PortfolioCard(props) {
    return (

        <article className="portfolioCard">
                <img src={props.img} alt={props.name} />
                <a href={props.URL} target="_blank" rel="noopener noreferrer">{props.name}</a>
        </article>
    )
}