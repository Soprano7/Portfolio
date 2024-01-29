import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import socialImg from "./../../../assets/images/Rectangle-8-_2_.webp"
import imgTwo from  "./../../../assets/images/Rectangle-18.webp"
import imgThree from "./../../../assets/images/Rectangle-16.webp"
import imgFho from "./../../../assets/images/Rectangle-22.webp"
import imgFive from "./../../../assets/images/Rectangle-23.webp"
import imgSix from  "./../../../assets/images/Rectangle-23.webp"
import {Work} from "./work/Work";
export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>Projects</SectionTitle>
            <SpanWorks>Things I’ve built so far</SpanWorks>
            <GridWrapperWork>
            <Work
            title={"Project Tile goes here"}
            text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
            src={socialImg}/>

            <Work title={"Project Tile goes here"} text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
            src={imgTwo}/>
                <Work title={"Project Tile goes here"} text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                      src={ imgThree}/>
                <Work title={"Project Tile goes here"} text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                      src={imgFho}/>
                <Work title={"Project Tile goes here"} text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                      src={imgFive}/>
                <Work title={"Project Tile goes here"} text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                      src={ imgSix}/>
            </GridWrapperWork>
        </StyledWorks>
    );
};
const StyledWorks = styled.section`
    min-height: 100vh;
`
const SpanWorks = styled.span`
    color: var(--light-Content, #A7A7A7);
    text-align: center;
    font-family: Poppins, sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; 
    margin-left: 400px;
`

const GridWrapperWork = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    grid-gap: 20px; 
    margin-top: 113px;
`

