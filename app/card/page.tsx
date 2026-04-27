"use client"

import  { useState } from "react";
import styles from "../styles/card.module.css";

export default function Card(){
    const colors = [
        {   
            theme:"Light",
            name: 'Fond',
            className: 'card1'
        },
        {   

            name: 'texte',
            className: 'card2'
        },        
        {   

            name: 'lien',
            className: 'card3'
        },        
        {   

            name: 'bouton',
            className: 'card4'
        },        
        {   

            name: 'lien hover',
            className: 'card5'
        },
    ];

    const [isDark,setDark] = useState("Light");
    const theme = isDark.toLowerCase(); // "Light" → "light"

    function handleClick(){
        return    setDark(isDark === "light"? "dark" : "light");
    }
    return (
    <main>
    
        <div className={`${styles.main} ${styles[theme]}`}>
            {colors.map((color , index)=>(
            <div key={index} className={styles[color.className]}>
                {color.name} 
            </div>
            ))}
        
        </div>
        <button onClick={handleClick}>changer de thème({isDark})</button>
    </main>
    );
}