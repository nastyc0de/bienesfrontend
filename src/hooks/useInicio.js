import {graphql, useStaticQuery} from 'gatsby';

const useInicio = () => {
    const res = useStaticQuery(
        graphql`
           {
                allStrapiPaginas(filter: {nombre: {eq: "Inicio"}}) {
                    nodes {
                        id
                        nombre
                        contenido
                        imagen {
                            sharp:childImageSharp {
                                fluid(maxWidth: 1200 duotone:{
                                    highlight:"#222222", shadow:"#192550", opacity:100
                                }) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                }
            }`
    );
    return res.allStrapiPaginas.nodes.map(inicio =>({
        nombre:inicio.nombre,
        contenido:inicio.contenido,
        imagen:inicio.imagen
    }));
}

export default useInicio
