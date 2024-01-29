import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Works} from "./layout/sections/works/Works";
import {Contact} from "./components/contact/Contact";
import {Footer} from "./layout/footer/Footer";
import {GlobalStyle} from "./styles/GlobalStyle";

function App() {
    return (
        <ContainerApp>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <GlobalStyle/>
            <Contact/>
            <Footer/>
        </ContainerApp>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;
const ContainerApp = styled.div`
padding: 20px 183px 0px 183px`;