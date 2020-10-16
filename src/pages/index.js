import React from 'react';
import Layout from '../components/Layout';
import useInicio from '../hooks/useInicio';

const Index = () => {
    
    useInicio()
    return (
        <Layout>
            <h1>index</h1>
        </Layout>
     );
}
 
export default Index;
