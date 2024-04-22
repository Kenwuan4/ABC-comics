import React from 'react';

function Credits({ name, link }) {

    return (
        <div className='col-md-3  justify-content-center'>
            <div class="card" >
                <div class="card-body">
                    <h5 class="card-title"> {name}</h5>
                    <a href={link} target="_blank" rel="noopener noreferrer" class="card-link">Más información</a>
                </div>
            </div>
        </div>
    );

}

export default Credits;