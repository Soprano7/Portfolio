import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
type SkillPropsType = {
    iconId: string
}

export const Skill = (props:SkillPropsType) => {
    return (

        <StyledSkill>
            <Icon width={'90'} height={'120'} iconId={props.iconId}/>
        </StyledSkill>    );
};

const StyledSkill = styled.div`
    width: 33%;
    
`