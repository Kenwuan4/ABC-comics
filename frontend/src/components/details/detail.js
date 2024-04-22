import React from 'react';
import IssueDetail from './issueDetail';
import CharacterDetail from './characterDetail';

function Detail({ data, location }) {

    return (
        <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center" style={{backgroundColor   :'#ffffec'}}>
                <div class="col-md-8" >

                    <div class="row text-center">
                        <br></br>
                        <h2> {data.name ? data.name : data.volume.name}</h2>
                    </div>

                    <div class="row mt-5">
                        <h2>Descripción</h2>
                        <div>{data.deck}</div>
                    </div>
                    <div class="row mt-5">
                        {location==='issue'?<IssueDetail data={data}></IssueDetail>:<CharacterDetail data={data}></CharacterDetail>}
                    </div>

                </div>

                <div class="col-md-4">
                    <br></br>
                    <img src={data.image.medium_url} className="card-img-top" alt={data.name} style={{ maxHeight: '80%', width: '100%' }} />
                    <div class="row mt-3 text-center">
                        <a href={data.volume ? data.volume.site_detail_url : data.volume_credits[0].site_detail_url} target="_blank" rel="noopener noreferrer" >Para más información</a>
                    </div>
                </div>
            </div>

        </div>
    );

}

export default Detail;