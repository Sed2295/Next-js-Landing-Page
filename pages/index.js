import React from 'react';
import Container from '../components/container';
import Users from '../components/users';

const Index = (props) => {
    return(
        <>
            <Container>
                <h1>Next</h1>
                <Users users={props.data}/>
            </Container>
        </>
    )
};

export async function getStaticProps(context) {
    const res = await fetch(`https://reqres.in/api/users`)
    const data = await res.json()  
    if (!data)
      return { notFound: true }
    else
        return { props: { data } } 
}

export default Index