import React from 'react';

const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4">
            <div className="card">
                <img src={require(`../../images/${service.image}`).default} alt="" />
                <div className="card-body">
                    <h5>{service.name}</h5>
                    <p className="text-muted">{service.desc}</p>
                    <h5>{service.price}</h5>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetail;