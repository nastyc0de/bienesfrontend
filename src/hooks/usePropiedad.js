import {graphql, useStaticQuery} from 'gatsby';

const usePropiedad = () => {
    const data = useStaticQuery(
        graphql`
            {
                allStrapiPropiedades {
                    nodes {
                    id
                    Descripcion
                    Direccion
                    Estacionamiento
                    Habitaciones
                    Lavabos
                    Precio
                    categoria {
                        Nombre
                    }
                    agente {
                        Nombre
                        Telefono
                        Email
                    }
                    Imagenes {
                            formats {
                            large {
                                childImageSharp {
                                        fluid {
                                            srcSet
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
    `);
    return data.allStrapiPropiedades.nodes.map(propiedad => ({
                id:propiedad.id,
                desc:propiedad.Descripcion,
                dir:    propiedad.Direccion,
                estacionamiento:    propiedad.Estacionamiento,
                habitacion:    propiedad.Habitaciones,
                lavabos:    propiedad.Lavabos,
                precio:    propiedad.Precio,
                categoria: propiedad.categoria, 
                agente: propiedad.agente, 
                imagenes: propiedad.Imagenes
    }))
}
export default usePropiedad;