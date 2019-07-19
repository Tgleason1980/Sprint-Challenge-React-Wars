import React from 'react';
import styled from 'styled-components';

const Section = styled.section`

border: 1px solid black;
width: 250px;
`
const Div = styled.div`
display: flex;
`
const H2 = styled.h2`
color: white;
`
const H3 = styled.h3`
color: red;
`
const Card = (props)=>
{
    return (
        <Div>
            <Section>
            <H2>{props.person.name}</H2>
            <H3>Gender: {props.person.gender}</H3>
            <H3>Hair Color: {props.person.hair_color}</H3>
            <H3>Skin Color: {props.person.skin_color}</H3>
            </Section>
        </Div>
    )
}

export default Card;