import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import GetListInfo from "../services/getListInfo";


function GetList() {
    const INITIAL_PAGE =1 
    const [issues, setIssue] = useState([]);
    const [page, setPage] =useState(INITIAL_PAGE);
    const [isLoading, setLoading] = useState(true);
    
    //obtener la información de la ruta para hacer la petición
    let locationInfo = useLocation().pathname.split("/")[1];
    
    let infoCard ='';
    infoCard = locationInfo === 'issues'?infoCard = 'issue':infoCard = 'character';
    
    const newdata = {
        items: issues,
        
        card: infoCard
    };

    useEffect(function () {  
        GetListInfo({information:locationInfo}).then(issues => {
            setIssue(issues);
            setLoading(false);
        })
    }, [locationInfo])


    useEffect(function () {
        if (page === INITIAL_PAGE ) return
        GetListInfo({information:locationInfo, page}).then(issues => {
            setIssue(issues);
            setLoading(false);
        })
    }, [page, locationInfo])

    return {isLoading, newdata, setPage};
}

export default GetList;