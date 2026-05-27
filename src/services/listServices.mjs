const URL_PATH = `http://localhost:8181`

export const getList = async() =>{
    const list = await fetch(`${URL_PATH}/get/list/products`,{
        method: 'GET',
        headers:{
            "Content-Type":"application/json"
        }
    })
    return(list.json());
}