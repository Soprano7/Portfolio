import React from 'react';
import iconSprite from '../../assets/images/iconSprite.svg'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string

}

export const Icon = (props: IconPropsType) => {
    const iconHref = `iconSprite.svg#${props.iconId}`

    return (
        <svg width={props.width || "88"} height={props.height || "88"} viewBox={props.viewBox || "0 0 120 120"}
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={iconHref}/>
        </svg>
    );
};
