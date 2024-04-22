import React from 'react';
import Credits from '../credits';

function CharacterDetail({ data }) {

    return (
        <div className="container  my-5">
            <div className="row  align-items-center mb-4">
                <h3> Movies</h3>
                {data.movies?.map((item, index) => (
                    <Credits name={item.name} link={item.site_detail_url} ></Credits>
                ))}
            </div>

            <div className="row  align-items-center mb-4">
                <h3> Creadores   </h3>
                {data.creators.map((item, index) => (
                    <Credits name={item.name} link={item.site_detail_url} ></Credits>
                ))}
            </div>

        </div>
    );

}

export default CharacterDetail;