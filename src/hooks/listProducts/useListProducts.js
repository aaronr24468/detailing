import { useState, useEffect, useCallback } from "react";
import { getList } from "../../services/listServices.mjs";

export const useGetListProducts = () =>{
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const listProducts = useCallback(async() =>{
        try {
            setLoading(true)
            const data = await getList();
            setList(data.list);
        } catch (error) {
            setError(error.message || "Error de servidor")
        }finally{
            setLoading(true)
        }
    }, [])


    useEffect(() =>{
        listProducts();
    },[])

    return{
        loading,
        error,
        list
    }
}