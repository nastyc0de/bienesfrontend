import React from 'react';
import { Helmet } from 'react-helmet';
import {Global, css} from '@emotion/core';
import Header from './Header';

const Layout = ({children}) => {
    return (
        <>
            <Global
                styles={css`
                   html{
                       font-size:62.5%;
                       box-sizing:border-box;
                   }
                   *, *:before, *:after{
                       box-sizing:inherit;
                   }
                   body{
                       font-size:1.6rem;
                       line-height:2;
                       font-family: 'Ubuntu', sans-serif; 
                   }
                   h1, h2, h3 {
                       margin:0;
                       line-height:1.5;
                   }
                   h1, h2 {
                       text-align:center;
                       font-family: 'Fredoka One', cursive;
                       font-weight:300;
                   }
                   ul{
                       list-style:none;
                       margin:0;
                       padding:0;
                   }
                   .contenedor{
                       max-width:120rem;
                       margin:0 auto;
                       width:95%;
                   }
                   img{
                       max-width:100%;
                   }

                `}
            />
            <Helmet>
                <title>Bienes Raices Gatsby</title>
                <meta name='description' content='sitio web de bienes raices'/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Ubuntu&display=swap" rel="stylesheet"/> 
            </Helmet>
            <Header/>
            {children}
        </>
    );
}
 
export default Layout;