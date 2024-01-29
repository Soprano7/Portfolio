import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FooterMenu} from "./FooterMenu";
const menuFooter = ["Home","About","Techologies","Projects","Contacts"]
export const Footer = () => {

    return (
        <StyledFooter>
        <WrapFooter>
           <Icon iconId={"LogoSvg"}/>
            <WrapUpFooter>
                <InfoSpan>
                <StyledSpan>+91 12345 09876</StyledSpan>
                <StyledSpanTwo>info@example.com</StyledSpanTwo>
                </InfoSpan>
                <IconInfo>
                    <Icon width="30" height="30" viewBox="0 0 30 30" iconId={"linkedin"}/>
                    <Icon width="30" height="30" viewBox="0 0 30 30" iconId={"twitter"}/>
                    <Icon width="30" height="30" viewBox="0 0 30 30" iconId={"codeSvg"}/>

                </IconInfo>

            </WrapUpFooter>

        </WrapFooter>
            <DecorativeLine />
            <StyledPartTwo>
            <StyledFooterMenu>
                <FooterMenu menuFooter={menuFooter} />
            </StyledFooterMenu>

            <WrapDownFooter>
            <InfoSpan>
            <StyledSpanThree>
                Designed and built by Pavan MG with Love & Coffee
            </StyledSpanThree>
        </InfoSpan>
            </WrapDownFooter>
            </StyledPartTwo>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
   
    `
const StyledSpan = styled.span`
    margin-right: 40px;
    display: flex;
    width: 169px;
    height: 26px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    color: #A7A7A7;

    &:last-child {
        margin-right: 0; 
    }
     `
const WrapFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`
const WrapUpFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const InfoSpan = styled.div`
    display: flex;
    margin-right: 10px;

`
const IconInfo = styled.div`
`

const DecorativeLine = styled.div`
    
    background-color: #3e5ab9;
    width: 100%;
    stroke-width: 2px;
    stroke:  #42446E;
    opacity: 0.3;
    height: 2px;
    flex-shrink: 0;
    
`
const StyledFooterMenu = styled.div``
const WrapDownFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;`
const StyledPartTwo = styled.div `
display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 35px;
    margin-bottom: 35px;
`
const StyledSpanTwo = styled.span`
    display: flex;
    width: 237px;
    height: 26px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0; 
    color: #A7A7A7;    
`
const StyledSpanThree = styled.span`
    color: var(--light-Content, #A7A7A7);
    text-align: center;
    font-family: Poppins, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 144.444% */

`