import React from 'react';
import styled from "styled-components";

export const Contact = () => {
    return (
        <StyledWrapCont>
            <StyledContact>For any questions please mail me:</StyledContact>
            <StyledLinkedin>hi@pavanmg.in</StyledLinkedin>
        </StyledWrapCont>
    );
};

const StyledContact = styled.p`
justify-content: center;
    margin: 0;
    color: #CCC;
    text-align: center;
    
    font-family: "DM Sans", sans-serif;
    font-size: 58px;
    font-style: normal;
    font-weight: 700;
    line-height: 70px; /* 120.69% */
    letter-spacing: -1px;
`
const StyledLinkedin = styled.p`
    color: #13B0F5;
    justify-content: center;
    margin: 0.5px;
    text-align: center;

    
    font-family: "DM Sans".sans-serif;
    font-size: 58px;
    font-style: normal;
    font-weight: 700;
    line-height: 70px; /* 120.69% */
    letter-spacing: -1px;
    background: linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
const StyledWrapCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `