import React from "react";
import './Aside.css'

export default function Aside(props) {
    return(
        <aside>
            <form>
                <div>
                    <input id="radio_about" type="radio" name="section_select" value="about" onInput={props.selectSection}/>
		            <label for="radio_about">About me</label>
                </div>
                <div>
                    <input id="radio_portfolio" type="radio" name="section_select" value="portfolio" onInput={props.selectSection}/>
		            <label for="radio_portfolio">My portfolio</label>
                </div>

            </form>
        </aside>
    )
}