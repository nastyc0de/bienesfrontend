import React from 'react';
import Layout from '../components/Layout';
import { Encuentra } from '../components/Encuentra';

import useInicio from '../hooks/useInicio';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';
import heroCSS from '../css/hero.module.css';
import ListadoPropiedades from '../components/ListadoPropiedades';

import 'bootstrap/dist/css/bootstrap.min.css';



const BgImage = styled(BackgroundImage)`
    height:600px;
`;
const Index = () => {
    
    const ini = useInicio();
    const {nombre, contenido, imagen} = ini[0];
    
    
    return (
        <Layout>
            <BgImage
                tag="section"
                fluid={imagen.sharp.fluid}
                fadeIn="soft"
            >
                <div className={heroCSS.imagenbg}>
                    <h1 className={heroCSS.titulo}>VENTA DE CASAS Y DEPARTAMENTOS</h1>
                </div>

            </BgImage>
            <main>
                <div css={css`
                    max-width:800px;
                    margin:0 auto;
                `}>
                    <h1>{nombre}</h1>
                    <p css={css`
                        text-align:center;
                    `}>{contenido}</p>
                </div>
            </main>
            <Encuentra/>
            <ListadoPropiedades/>
        </Layout>
     );
}
 
export default Index;
