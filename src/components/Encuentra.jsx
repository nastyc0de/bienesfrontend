import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';
import heroCSS from '../css/hero.module.css';

const ImgBg = styled(BackgroundImage)`
    height:300px;
`

export const Encuentra = () => {
    const {imagen} = useStaticQuery(
        graphql`
            query {
                imagen: file(relativePath: {eq: "external.jpeg"}) {
                    sharp:childImageSharp {
                                fluid(maxWidth: 1500) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
        `
    )
    return (
       <ImgBg tag="section" fluid={imagen.sharp.fluid} fadeIn="soft">
           <div className={heroCSS.imagenbg}>
               <h3 className={heroCSS.titulo}>Encuentra tu mejor opcion</h3>
               <p>20 anos de experiencia</p>
           </div>
       </ImgBg>
    )
}
