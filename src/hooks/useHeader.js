import { useState } from "react";


export const useHeaderHook = () =>{

    const detectMainPage = (event) =>{
        event.preventDefault();
        const tag = event.target;
        const direction = tag.getAttribute('destination');
        console.log(direction)
        const urlActual = window.location.href;
        urlActual != 'https://waxonwaxoffdetailing.com.mx/'? (window.location.href = "https://waxonwaxoffdetailing.com.mx/"):(document.getElementById(direction).scrollIntoView({behavior: 'smooth'}))
    }

    return{
        detectMainPage
    }
}