import React from "react";
import {Row, Col, Typography} from "antd";
import photo from './../../Image/AboutMe/AboutMe.png'
import style from "./AboutMe.module.css"

const {Title, Paragraph, Text} = Typography;

const AboutMe = () => {
    return (
        <>

            <Row id="section1"   dark={false} >
                <Col className={style.tempCol1}  xxl={{span:13}} xl={{span:13}} lg={{span:13}} md={{span:13}} sm={{span:13}} xs={{span: 24}}>
                    <img src={photo} alt="Photo Natallia Tarka" className={style.photoAboutMe}/>
                </Col>
                <Col xxl={{span:8}}  xl={{span:8}} lg={{span:8}} md={{span:8}} sm={{span:8}} xs={{span: 24}}>
                    <Row>
                        <Col xxl={{span:24}} xs={{span: 24}}>
                            <Typography>
                                <div className={style.textTitleShadow}>about me</div>
                                <Title className={style.textTitle} level={1}>about me</Title>
                                <Paragraph className={style.paragrafText}> <p>My name is Natallia Tarka. </p>
                                    <p>I'm WEBSITE FRONTEND DEVELOPER. I'm focused on learning and continuous
                                        improvement
                                        of my
                                        skills in the field of programming.</p>
                                    <p> I come from Belarus and I build my programming career in Poland. </p>
                                            <p> I am communicative, optimistic and like working in a team. I enjoy
                                                programming,
                                                I learn quickly new things and I would like to work on real projects and
                                                consolidate
                                                my
                                                skills as
                                                an independent frontend developer.</p>
                                </Paragraph>
                            </Typography>
                        </Col>
                    </Row>
                </Col>
            </Row>
            < />
            )
            };

            export default AboutMe;