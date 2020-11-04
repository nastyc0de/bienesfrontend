import React from 'react'

const PropiedadPreview = ({propiedad}) => {
    
    const {dir} = propiedad;
    return (
        <h3>{dir}</h3>
    )
}

export default PropiedadPreview
