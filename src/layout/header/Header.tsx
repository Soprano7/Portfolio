import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {HeaderMenu} from "../../components/menu/headerMenu/HeaderMenu";
const items = ["Home","About","Tech stack","Projects","Contacts"]

export const Header = () => {
    return (

        <StyledHeader>
            <Logo/>
            < HeaderMenu menuItems = {items}/>
        </StyledHeader>

    );
};
const StyledHeader = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    background-color: rgba(25, 25, 25, 0.5);
`
