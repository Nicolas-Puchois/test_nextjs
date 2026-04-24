"use client"

import  { useState } from "react";
import styles from "../styles/card.module.css";

export default function Card(){
    const colors = [
        {className: 'card1', name: 'Fond clair', hex:'#e0fbfc'},
        {className: 'card2', name: 'liens foncé', hex:'#98c1d9'},
        {className: 'card3', name: 'bouton ', hex:'#ee6c4d'},
        {className: 'card4', name: 'liens clair', hex:'#3d5a80'},
        {className: 'card5', name: 'Fond foncé', hex:'#042d3e'},
    ];
    const [isDark,setDark] = useState("Light");

    function handleClick(){
        setDark(isDark === "Light"? "Dark" : "Light");
    }
    return (
    <main>
    
        <div className={styles.main}>
            {colors.map((color , index)=>(
            <div key={index} className={styles[color.className]}>
                {color.name} {color.hex}
            </div>
            ))}
        
        </div>
        <button onClick={handleClick}>changer de thème({isDark})</button>
    </main>
    );
}