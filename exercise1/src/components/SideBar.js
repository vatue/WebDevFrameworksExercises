import React from 'react'
import '../styles/SideBar.css';

export default function SideBar() {
    return (
        <div className="SideBar">

        <h2 className="SBTitle">
                Suosittua:</h2>
                
        <p className="SBNews">
               HUUTISTA: Valtteri kuoppasi tuhansia euroja kasinolle: katso kuvat!</p> 

        <p className="SBNews">
               Naurattaahan se tietty: kissa voitti pelikoneesta 500€!</p>

        <p className="SBNews">
               Hae koronarokotteesi jo! Sanoo asiantuntija.</p>  

        <p className="SBNews">
               Artikkeli: Oulun Ammattikorkeakoulussa sijaitseva Subway on miljoonabisnes.</p>
        
        </div>
    )
}
