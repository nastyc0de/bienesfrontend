import {graphql, useStaticQuery} from 'gatsby';

const useInicio = () => {
    const res = useStaticQuery(
        graphql`
            {
                    allStrapiPaginas(filter: {nombre: {eq: "Inicio"}}) {
                        nodes {
                        id
                        contenido
                        nombre
                        imagen {
                            publicURL
                        }
                    }
                }
            }

        `
    );
    console.log(res);
    return res;
}

export default useInicio
