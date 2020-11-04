import React, { useState , useEffect } from 'react';
import { css } from '@emotion/core';
import usePropiedad from '../hooks/usePropiedad';
import PropiedadPreview from './PropiedadPreview';

const ListadoPropiedades = () => {
    
    const resultado = usePropiedad();
    const [propiedades, setPropiedades] = useState([]);
    useEffect(() => {
        setPropiedades(resultado)
        
    }, [])

    return (
        <>
            <h2 css={css`
                margin-top:5rem;
            `}
            >Nuestras Propiedades</h2>

            <ul>
                {propiedades.map(propiedad => (
                    <PropiedadPreview
                        key={propiedad.id}
                        propiedad={propiedad}
                    />
                ))}
            </ul>
        </>
    )
}

export default ListadoPropiedades
