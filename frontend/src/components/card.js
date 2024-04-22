import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import GridContext from '../context/gridContext';

function Item({ data, index, card }) {
    const { isGrid } = useContext(GridContext);

    return (
        <div key={index} className={isGrid ? "col-md-3 mb-5 justify-content-center" : "mb-5 justify-content-center"}>
            <Link to={`${card}/${data.id}`} className="card-link">
                <div className="card h-70" style={isGrid ? { height: '400px' } : { height: '300px', width: '200px' }}>
                    <img src={data.image.medium_url} className="card-img-top" alt={data.name} style={{ maxHeight: '90%', width: '100%' }} />
                    <div className="card-body p-2 text-center">
                        <h5 className="card-title">{data.name? data.name:data.volume.name}</h5>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Item;