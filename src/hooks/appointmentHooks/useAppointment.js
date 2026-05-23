import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router";
import { getPackage } from "../../services/appointmentServeice";

export const useAppointment = () =>{
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState({id: 0, package_Name: '', description_Package: ["",""], price_CH:'',  price_L:'', washing_Time:''})
    const [state, setState] = useState('Info')

    const  {packages} = useParams()

    const getDataPackage = async() =>{
        try {
            setLoading(true);
            const path = `/v1/package/data/${packages}`;
            const info = await getPackage(path);
            setData(info.data)
        } catch (error) {
            setError(error.message || 'Error de servidor')
        }finally{
            setLoading(false)
        }
    }

    useEffect(() =>{
        getDataPackage();
    }, [])

    return{
        state,
        setState,
        data
    }
}