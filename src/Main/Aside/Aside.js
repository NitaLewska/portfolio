import React from "react";
import './Aside.css'
import CIcon from '@coreui/icons-react';
import { cibTwitter, cibLinkedin, cibTelegram } from '@coreui/icons';

export default function Aside(props) {
    return (
        <aside>
            <form>
                <div>
                    <input id="radio_about" type="radio" name="section_select" value="about" onInput={props.selectSection} />
                    <label for="radio_about">About me</label>
                </div>
                <div>
                    <input id="radio_portfolio" type="radio" name="section_select" value="portfolio" onInput={props.selectSection} />
                    <label for="radio_portfolio">My portfolio</label>
                </div>
                <div>
                    <input id="radio_work" type="radio" name="section_select" value="work" onInput={props.selectSection} />
                    <label for="radio_work">Work history</label>
                </div>
            </form>
            <div className="links">
                <a href="https://twitter.com/nita_lewska" target="_blank" rel="noopener noreferrer">
                    <CIcon icon={cibTwitter} />
                </a>
                <a href="https://www.linkedin.com/in/anna-muzalevskaya/" target="_blank" rel="noopener noreferrer">
                    <CIcon icon={cibLinkedin} />
                </a>
                <a href="http://t.me/Nitalewska" target="_blank" rel="noopener noreferrer">
                    <CIcon icon={cibTelegram} />
                </a>
            </div>
        </aside>
    )
}