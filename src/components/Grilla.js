import React from 'react';
import DatosGrilla from './DatosGrilla';

let tableRowsData = [
    {
        nombre: 'Mangas ',
        Length: '2',
    },
    {
        nombre: 'Indumentaria',
        Length: '4',
    },
    {
        nombre: 'Posters',
        Length: '5',
    },
    {
        nombre: 'Figuras',
        Length: '6',
    },
    {
        nombre: 'Tazas',
        Length: '1',
    },
    {
        nombre: 'Llaveros',
        Length: '2',
    },
    {
        nombre: 'Otros',
        Length: '2',
    }
    
]


function Grilla (){
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4 row cajaDeProductos grillaCategorias">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Categoría</th>
                                <th>Cantidad</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                return <DatosGrilla { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Grilla;