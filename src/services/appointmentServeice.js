const URL_PATH = `https://api.waxonwaxoffdetailing.com.mx`

export const getPackage = async(path) =>{
    const data = await fetch(`${URL_PATH}${path}`,{
        method: 'GET',
        headers:{
            "Content-Type":"application/json"
        }
    })

    return(data.json());
}