import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import photo from '../../../assets/images/HeaderPhoto.webp'
import * as child_process from "child_process";

export const Main = () => {
    return (
        <section>
            <StyledMain>
                <FlexWrapper align={"center"} justify={"space-around"}>
                    <div>
                        <MainTitle>
                            Hi 👋, <br/>
                            My name is <br/>
                            <GradientText>Erik Ak</GradientText><br />
                            I build things for web<br/>
                        </MainTitle>
                    </div>

                    <PhotoContainer>
                        <Photo src={photo} alt="" className={"Border"}/>
                    </PhotoContainer>

                </FlexWrapper>

            </StyledMain>
        </section>
    );
};
const StyledMain = styled.div`
    min-height: 100vh;
    margin: 100px;

`

const MainTitle = styled.h1`
    color: #D9D9D9;

    font-family: Poppins, sans-serif;
    font-size: 58px;
    font-style: normal;
    font-weight: 700;
    line-height: 70px; /* 120.69% */
    letter-spacing: -1px;

`

const PhotoContainer = styled.div`
    width: 349px;
    height: 349px;
    
    min-width: 349px;
    min-height: 349px;

    position: relative;

    border: 5px solid transparent;
    border-radius: 50%;
    margin-left: 198px;

    &:before {
        content: '';
        
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        
        z-index: -1;

        margin: -5px;
        border-radius: 50%;
        background-color: #00C0FD;
        background: linear-gradient(#E70FAA, #00C0FD);
    }
`

const Photo = styled.img`
    width: 100%;
    //height: 349px;
    object-fit: cover;
`
const GradientText = styled.span`
  background: linear-gradient(45deg, #E70FAA, #00C0FD);
  -webkit-background-clip: text;
  color: transparent;
`;