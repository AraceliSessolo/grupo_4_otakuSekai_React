import React from 'react';
import UltimoProductoCreado from './UltimoProductoCreado';
import CategoriasDb from './CategoriasDb';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <UltimoProductoCreado />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <CategoriasDb />

        </div>
    )
}

export default ContentRowCenter;