import { useState } from "react";


export const useHeaderHook = () =>{

    const detectMainPage = (event) =>{
        event.preventDefault();
        const urlActual = window.location.href;
        urlActual != 'http://localhost:5173/'? (window.location.href = "http://localhost:5173/"):(window.location.href= "#Inicio")
    }

    return{
        detectMainPage
    }
}