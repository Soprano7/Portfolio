import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle> My Tech Stack</SectionTitle>
            <StyledSpan>  Technologies I’ve been working with recently </StyledSpan>
            <GridWrapper>
                    <Skill iconId={"css"}/>
                    <Skill iconId={"man"}/>
                    <Skill iconId={"boot"}/>
                    <Skill iconId={"git"}/>
                    <Skill iconId={"react"}/>
                        <Skill iconId={"sass"}/>
                        <Skill iconId={"html"}/>
                        <Skill iconId={"js"}/>
                        <Skill iconId={"taliwind"}/>
                        <Skill iconId={"vscode"}/>
                        <Skill iconId={"lastIcon"}/>
                    </GridWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    min-height: 100vh;
    margin-bottom: 49px;
`
const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr); 
    grid-gap: 10px; 
    padding-left: 170px ;
    align-content: center;
    //justify-items: center;
`
const StyledSpan = styled.span`
    color: #A7A7A7;
    text-align: center;
    font-family: Poppins, sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; 
    display: block; 
    
    padding: 20px;
    margin-bottom: 173px;
`
