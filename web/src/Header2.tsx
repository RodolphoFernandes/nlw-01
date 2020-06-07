import React from 'react';

//Conceito de propriedades no componente


interface HeaderProps {
    title: string;
}

const Header2: React.FC<HeaderProps> = (props) => {
    
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );
}

export default Header2;