const URL_PATH = `https://api.waxonwaxoffdetailing.com.mx`

export const getList = async() =>{
    const list = await fetch(`${URL_PATH}/get/list/products`,{
        method: 'GET',
        headers:{
            "Content-Type":"application/json"
        }
    })
    return(list.json());
}