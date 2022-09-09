import React, { useState, useEffect } from "react"
import Poke from "./Poke"

export default function FetchArrayLayout({ arrayPokes }) {
    return (
        <>
            {arrayPokes.map((poke) => (
                <Poke poke={poke}/>
            ))}
        </>
        
    )
}
