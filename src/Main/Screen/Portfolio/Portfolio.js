import React from "react";
import './Portfolio.css'
import PortfolioCard from "./PortfolioCard/PortfolioCard";
import data from "./portfolio_data"

export default function Portfolio() {
    const cards = data.map(a => <PortfolioCard name={a.name} img={a.thumbnail} URL={a.URL}/>)
    return(
        <div className="portfolio_container">
        {cards}
        </div>
    )
}