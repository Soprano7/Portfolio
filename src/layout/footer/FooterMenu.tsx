import React from 'react';
import styled from "styled-components";

export const FooterMenu = (props: {menuFooter:Array<string>}) => {
    return (
        <StyledFooterMenu>
            <ul>
                {props.menuFooter.map((item:string, index: number)=>{
                    return <li key={index}>
                        <a href="">{item}</a>
                    </li>
                })}

            </ul>
        </StyledFooterMenu>
    );
};
const StyledFooterMenu =  styled.nav`
  
    
}
ul{
    display: flex;
    gap: 30px;
    color: #A7A7A7;
    font-family: "DM Sans", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 144.444% */
    
    & li {
        color: #A7A7A7 !important;
    }
`