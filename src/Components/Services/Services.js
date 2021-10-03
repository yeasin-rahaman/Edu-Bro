import React, { useEffect, useState } from 'react';

const Services = () => {
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('/Details.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    return (
        <div className="container text-black mt-5 mb-5" >
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {details.map(detail => <div className="col" key={detail.key} >
                    <div className="card h-100">
                        <img src={detail.img} className="img-fluid rounded-start" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{detail.name}</h5>
                            <p className="card-text">{detail.description}</p>
                        </div>
                        <div className="card-footer  text-center">
                            <h3 className="card-text"> ${detail.price}</h3>
                        </div>
                    </div>
                </div>)
                }

            </div>
        </div >
    );
};

export default Services;
