import React from 'react';
import './Footer.css'
import CIcon from '@coreui/icons-react';
import { cibTwitter, cibLinkedin, cibTelegram } from '@coreui/icons';

export default function Footer() {
    return (
        <footer>
            <a href="https://twitter.com/nita_lewska">
                <CIcon icon={cibTwitter}/>
            </a>
            <a href="https://www.linkedin.com/in/anna-muzalevskaya/">
                <CIcon icon={cibLinkedin}/>
            </a>
            <a href="http://t.me/Nitalewska">
                <CIcon icon={cibTelegram}/>
            </a>
            <a href="http://t.me/Nitalewska">
                <CIcon icon={cibTelegram}/>
            </a>    
        </footer>
    )
}