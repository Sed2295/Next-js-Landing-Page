import React from 'react';
import Container from '../components/container';
import Fetch from 'isomorphic-fetch';

const Index = (props) => {
    console.log(props)
    return(
        <>
            <Container>
                <h1>Next</h1>
            </Container>
        </>
    )
};

export async function getStaticProps(context) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json()  
    if (!data)
      return { notFound: true }
    else
        return { props: { data } }
}

export default Index