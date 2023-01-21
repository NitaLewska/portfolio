import React from "react"
import Screen from "./Screen/Screen"
import './Main.css'
import Aside from "./Aside/Aside"

export default function Main() {
    const [section, setSection] = React.useState("about")

    function selectSection() {
        setSection(document.querySelector('input[name = section_select]:checked').value)
    }

    return (
        <main>
            <Screen section = {section}/>
            <Aside selectSection={selectSection}/>
        </main>
    )
}