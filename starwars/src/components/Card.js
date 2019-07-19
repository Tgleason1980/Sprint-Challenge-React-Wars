import React from 'react';
import styled from 'styled-components';

const Section = styled.section`

border: 1px solid black;
width: 250px;
`
const Div = styled.div`
display: flex;
`
const Card = (props)=>
{
    return (
        <Div>
            <Section>
            <h2>{props.person.name}</h2>
            <h3>Gender:{props.person.gender}</h3>
            <h3>Hair Color:{props.person.hair_color}</h3>
            <h3>Skin Color:{props.person.skin_color}</h3>
            </Section>
        </Div>
    )
}

export default Card;