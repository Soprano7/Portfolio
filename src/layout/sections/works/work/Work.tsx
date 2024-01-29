import React from 'react';
import styled from "styled-components";
import IconProblem from "./../../../../assets/images/icon1.svg"
import IconProblem1 from "./../../../../assets/images/icon2.svg"

type  WorkPropsType = {
title: string
text: string
src: string
}
export const  Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWork src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <LinkContainer>
            <Link href={"#"}> <IconLinkWork src={IconProblem}/> Preview</Link>
            <Link href={"#"}> <IconLinkWork src={IconProblem1}/> View Code</Link>
            </LinkContainer>


        </StyledWork>
    );
};

const StyledWork = styled.div`
    max-width: 373px;
    width: 100%;
    border-radius: 20px;
    background: #363636;
    box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.20);
    object-fit: cover;
    
`
const Image = styled.img`
    height: 273px;
    width:371px ;
    object-fit: cover;
`
const Link = styled.a`
    color: #FFF;
    font-family: Poppins, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
    text-decoration-line: underline;
`
const Title = styled.h3`
    color: var(--Solid-Heading-Dark-mode, #CCC);
    text-align: center;
    font-family: Poppins.sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px; 
    margin-right: 45px;
    margin-left: 28px;
    margin-top: 27px;
`
const Text = styled.p`
    color: var(--Solid-Heading-Dark-mode, #CCC);
    font-family: Poppins, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: 26px; 
    margin: 17px 31px 59px 28px;
`
const LinkContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-right: 58px;
    margin-left: 58px;
    margin-bottom: 25px;
`
const IconLinkWork = styled.img`
`
const ImageWork = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;`