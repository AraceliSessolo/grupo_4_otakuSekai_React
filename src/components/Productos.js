import React from 'react';

function Productos(props){
    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="product-card card text-white bg-dark shadow">
                    <div className="card-body back-azul">
                        {props.name}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Productos;