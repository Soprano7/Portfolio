import styled from "styled-components";
import React from "react";


export const HeaderMenu = (props: {menuItems:Array<string>}) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item:string, index: number)=>{
                    return <ListItem key={index}>
                        <Link href="">
                            {item}
                        <Mask>
                            <span>
                            {item}
                        </span>
                        </Mask>
                        <Mask>
                            <span>
                           {item}
                        </span></Mask>
                        </Link>
                    </ListItem>
                })}

            </ul>
        </StyledHeaderMenu>
    );
};
const StyledHeaderMenu =  styled.nav`
    margin-right: 500px;
    ul{
    display: flex;
    gap: 30px;
    
}
`


const Link = styled.a`
    font-family: DM Sans, sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px; 
    color: #A7A7A7;    
`

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;    
    display: inline-block;
    height: 50% ;
    overflow-y: hidden;
    //outline: 1px solid red;
    &+& {
        top: 50%;
        span{
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`
const ListItem = styled.li`
position: relative;
&:hover{
    ${Mask}{
        transform: skewX(12deg);
    }
}
`