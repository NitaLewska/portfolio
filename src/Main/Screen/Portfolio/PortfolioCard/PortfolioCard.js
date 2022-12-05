import React from "react";
import "./PortfolioCard.css"

export default function PortfolioCard(props) {
    console.log(props.URL)
    return (

        <article className="portfolioCard">
                <img src={props.img} alt={props.name}/>
                <a href={props.URL} target="_blank">{props.name}</a>
        </article>
    )
}