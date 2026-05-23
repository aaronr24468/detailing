
export const showOptionsBtn = () =>{
    const header = document.getElementById('headerInfo');
    const btnHeader = document.getElementById('optionsBtn');

    if(header.getAttribute('show') === "false"){
        header.setAttribute('show', 'true')
        btnHeader.style.transform = "rotate(180deg)"
    }else{
        header.setAttribute('show', 'false')
        btnHeader.style.transform = "rotate(0deg)"
    }
}