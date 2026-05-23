const URL_PATH = `http://localhost:8181`

export const getPackage = async(path) =>{
    const data = await fetch(`${URL_PATH}${path}`,{
        method: 'GET',
        headers:{
            "Content-Type":"application/json"
        }
    })

    return(data.json());
}