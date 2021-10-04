import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="notFound">

            <div className="page-wrap d-flex flex-row align-items-center mt-5">
                <div className="container mt-5">
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-12 text-center mt-5">
                            <span className="display-1 d-block">404</span>
                            <div className="mb-4 lead">The page you are looking for was not found.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;