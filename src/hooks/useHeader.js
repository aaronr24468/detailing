import { useState } from "react";


export const useHeaderHook = () =>{

    const detectMainPage = (event) =>{
        event.preventDefault();
        const tag = event.target;
        const direction = tag.getAttribute('destination');
        console.log(direction)
        const urlActual = window.location.href;
        urlActual != 'http://localhost:5173/'? (window.location.href = "http://localhost:5173/"):(document.getElementById(direction).scrollIntoView({behavior: 'smooth'}))
    }

    return{
        detectMainPage
    }
}