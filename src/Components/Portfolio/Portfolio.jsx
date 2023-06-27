import React, {Fragment} from "react";
import style from "./Portfolio.module.css"
import {Col, Progress, Row, Typography} from "antd";
import fotoProject1 from "./../../Image/Projects/ZnajdeTo.jpg"
import fotoProject2 from "./../../Image/Projects/Balandowka.jpg"
import fotoProject3 from "./../../Image/Projects/MemoryGame.png"
import fotoProject4 from "./../../Image/Projects/Shubinica.png"
import fotoProject5 from "./../../Image/Projects/HoverProect.png"

const {Title} = Typography;

const ProjectItem = [
    {
        name: 'Znajdeto.pl',
        href:'https://znajdeto.pl/',
        img: fotoProject1,
        text: "ZnajdeTo - it's a project about professional search and locating object metal and underwater. The project consists of several information blocks with text and images of varying complexity, as well as a contact form for communication through the site."
    },
    {
        name: 'Bałandówka',
        href:'https://github.com/NatashaHatrum/balandowkaproekt',
        img: fotoProject2,
        text: "Bałandówka - information resource, which is a presentation of a house in Zakopane for renting rooms. The project has several page. There is a description of the place, a short history of the house, a photo gallery, a feedback form and contact details."
    },
    {
        name: 'Memory game',
        href:'https://github.com/NatashaHatrum/graWPami-',
        img: fotoProject3,
        text: "Memory game - this is a small game made with JS and HTML, where the user has to match all paired pictures to win."
    } ,
    {
        name: 'Hangman game',
        href:'https://github.com/NatashaHatrum/GraSzubienica',
        img: fotoProject4,
        text: "Hangman game - s a game where you have to guess the word from the system and make it from letters. If the user makes a mistake, he draws a hangman's picture in parts until he draws it completely or guesses the word."
    },
    {
        name: 'Hover project ',
        href:'https://github.com/NatashaHatrum/CSSHover',
        img: fotoProject5,
        text: "Hover project - this is a presentation of several images with different hover effects in CSS."
    }
]
const Portfolio = () => {
    return (
        <>
            <Row className={style.tempRow5}  id='section3'>
                <Col span={24}>
                    <Typography>
                        <div className={style.textTitleShadow2}>my projects</div>
                        <Title className={style.textTitle2} level={1}>my projects</Title>
                    </Typography>
                </Col>
            </Row>
            <Row justify="center">
                {ProjectItem.map((el, index) =>
                    <Col key={index} className={style.tempCol6} xs={{span:12}} lg={{span: 8}} xl={{span: 8}} xxl={{span: 8}}>
                        <div className={style.border}>
                        <div><h2 className={style.titleProjects}>{el.name}</h2></div>
                        <div className={style.containerFoto}><a href={el.href} target="_blank"><img
                            className={style.fotoProjects} src={el.img}/></a></div>
                        <div className={style.textProjekts}>{el.text}</div>
                        </div>
                    </Col>
                )}
            </Row>
        </>
    )
};


export default Portfolio;