import React from 'react';
import Credits from '../credits';

function IssueDetail({ data }) {
    return (
        <div className="container  my-5">
            <div className="row  align-items-center mb-4">
                <h3> Location Credits</h3>
                {data.location_credits.map((item, index) => (
                    <Credits name={item.name} link={item.site_detail_url} ></Credits>
                ))}
            </div>

            <div className="row  align-items-center mb-4">
                <h3> Person Credits</h3>
                {data.person_credits.map((item, index) => (
                    <Credits name={item.name} link={item.site_detail_url} ></Credits>
                ))}
            </div>

        </div>
    );

}

export default IssueDetail;