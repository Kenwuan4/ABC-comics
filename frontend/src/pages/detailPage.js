import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import GetDetailInfo from '../services/getDetail';
import Detail from '../components/details/detail';


function DetailPage() {
    
    const [details, setDetail] = useState({});
    const { id } = useParams();
    const [isLoading, setLoaging] = useState(true);

    //obtener la información de la ruta para hacer la petición
    let location = useLocation().pathname.split("/");
    let information = location[1];
    let detail = location[2]
    useEffect(function () {
        GetDetailInfo({information,detail,id }).then(data => {
            setDetail(data);
            setLoaging(false);
        })

    }, [id])
    
    if (isLoading) return <i>Cargando...</i>
    return (
        <div>
            <Detail data={details} location={detail}></Detail>

        </div>
    );
}

export default DetailPage;