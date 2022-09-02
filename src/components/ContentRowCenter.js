import React from 'react';
import LastProductInDb from './UltimoProductoCreado';
import CategoriasDb from './CategoriasDb';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastProductInDb />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <CategoriasDb />

        </div>
    )
}

export default ContentRowCenter;