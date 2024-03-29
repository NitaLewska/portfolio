import React, { useEffect } from "react"
import './Screen.css'
import About from "./About/About"
import Portfolio from "./Portfolio/Portfolio"
import Work from "./Work/Work"

export default function Screen(props) {
    useEffect(() => {
        SetScreenContext(props.section)
    })

    function SetScreenContext(section) {
        switch (section) {
            case "portfolio":
                return (<Portfolio />)
            case "about":
                return (<About />)
            case "work":
                return (<Work />)
        }

    }

    return (
        <div className="screen">
            {SetScreenContext(props.section)}
        </div>
    )
}