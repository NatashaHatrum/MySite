import './App.css';
import React from "react";
import Layout from "antd/es/layout";
import Head from "./Components/Head/Head";
import AboutMe from "./Components/AboutMe/AboutMe";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import {Education} from "./Components/Education/Education";

const {Header, Content, Footer} = Layout;


function App() {

    return (
        <>
            <Layout className='layoutDocument'>
                <Header className='layoutHeder'>
                    <Head/>
                </Header>
                <Layout className='layoutContent'>
                    <Content>
                        <AboutMe/>
                        <Education/>
                        <Portfolio/>
                        <Contact/>
                    </Content>
                    <Footer className='layoutFooter'><span>Copyright 2023 </span>Natallia Tarka</Footer>
                </Layout>
            </Layout>
        </>
    );
}

export default App;
