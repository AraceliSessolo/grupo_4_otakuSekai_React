import React from 'react';
import imagenFondo from '../assets/images/manga22.png';

function LastProductInDb(){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Last product in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Manga Pokemon "/>
                    </div>
                    <h5 className='tituloProducto'>Manga Pokemon Yellow Editorial Panini Dgl Games & Comics</h5>
                    <p className='detalleProducto'>Han pasado dos años desde que Red y sus amigos derrotaron al Equipo Rocket en Silph S.A. Bruno, un miembro del Alto Mando, lanzó un reto para Red. Él salió a enfrentar el desafío con valentía, pero desapareció. Pikachu fue el único que regresó pero sus heridas son graves. Yellow tomó a Pikachu bajo su cuidado y partió en busca de Red.</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View product detail</a>
                </div>
            </div>
        </div>
    )
}

export default LastProductInDb;
