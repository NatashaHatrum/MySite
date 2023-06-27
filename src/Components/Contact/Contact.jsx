import React from "react";
import {Row, Col, Typography} from "antd";
import style from "./Contact.module.css"
import {motion} from 'framer-motion'
import Forms from "./Form";
import {useMobile} from "../Hook/Hooks";


const {Title, Paragraph, Text} = Typography;

const animationSection = {
    hidden: {
        x: -300,
        opacity: 0,


    },
    visible: () => ({
        opacity: 1,
        x: 150,
        transition: {delay: 0.30}
    })
}
const animationSection2 = {
    hidden: {
        x: 500,
        opacity: 0,
    },
    visible: () => ({
        opacity: 1,
        x: 200,
        transition: {delay: 0.30}
    })
}


const Contact = () => {
    const [isMobile] = useMobile();
    return (
        <>
            <Row className={style.tempRow7}>
                <Col span={24}>
                    <Row className={style.tempRow6} id='section4'>
                        <Col span={24}>
                            <Typography>
                                <div className={style.textTitleShadow2}>contact</div>
                                <Title className={style.textTitle2} level={1}>contact</Title>
                            </Typography>
                        </Col>
                    </Row>

                    {!isMobile ?
                        <motion.section
                            initial="hidden"
                            whileInView="visible"
                            transition={{duration: 40}}
                        >
                            <Row justify='end'>
                                <Col xxl={{span: 8}} xl={{span: 7}} xs={{span: 24}} >
                                    <motion.div variants={animationSection}>
                                        <div className={style.contactItem}><a
                                            href='https://www.google.com/maps/place/Lublin/@51.2180254,22.4236877,11z/data=!3m1!4b1!4m6!3m5!1s0x472257141e154061:0x5528ee7af6e8e95f!8m2!3d51.2464536!4d22.5684463!16zL20vMGp3XzU?entry=ttu'
                                            target="blank">
                                            <i className="bi bi-geo-alt"
                                               style={{fontSize: '1.2rem', color: 'cadetblue', paddingRight: '10px'}}/>Lublin</a>
                                        </div>
                                        <div className={style.contactItem}><a href="tel:731798540"><i
                                            className="bi bi-telephone-fill"
                                            style={{fontSize: '1.2rem', color: 'cadetblue', paddingRight: '10px'}}/>731798540</a>
                                        </div>
                                        <div className={style.contactItem}><a href="natalliatrk@gmail.com"><i
                                            className="bi bi-envelope"
                                            style={{fontSize: '1.2rem', color: 'cadetblue', paddingRight: '10px'}}/>natalliatrk@gmail.com</a>
                                        </div>
                                        <div className={style.contactItem}><a href='https://github.com/NatashaHatrum'
                                                                              target="blank"><i className="bi bi-github"
                                                                                                style={{
                                                                                                    fontSize: '1.2rem',
                                                                                                    color: 'cadetblue',
                                                                                                    paddingRight: '10px'
                                                                                                }}/>NatashaHatrum</a>
                                        </div>
                                    </motion.div>
                                </Col>

                                <motion.section
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={{duration: 40}}
                                >
                                    <motion.div className={style.section1} variants={animationSection2}>
                                        <Col xxl={{span: 14}} xl={{span: 12}}><Forms/></Col>
                                    </motion.div>
                                </motion.section>


                            </Row>
                        </motion.section> :
                        <Row>
                            <Col span={12}>
                                <div className={style.contactItem}><a
                                    href='https://www.google.com/maps/place/Lublin/@51.2180254,22.4236877,11z/data=!3m1!4b1!4m6!3m5!1s0x472257141e154061:0x5528ee7af6e8e95f!8m2!3d51.2464536!4d22.5684463!16zL20vMGp3XzU?entry=ttu'
                                    target="blank">
                                    <i className="bi bi-geo-alt"
                                       style={{
                                           fontSize: '1.2rem',
                                           color: 'cadetblue',
                                           paddingRight: '10px'
                                       }}/>Lublin</a>
                                </div>
                                <div className={style.contactItem}><a href="tel:731798540"><i
                                    className="bi bi-telephone-fill"
                                    style={{
                                        fontSize: '1.2rem',
                                        color: 'cadetblue',
                                        paddingRight: '10px'
                                    }}/>731798540</a>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className={style.contactItem}><a href="natalliatrk@gmail.com"><i
                                    className="bi bi-envelope"
                                    style={{fontSize: '1.2rem', color: 'cadetblue', paddingRight: '10px'}}/>natalliatrk@gmail.com</a>
                                </div>
                                <div className={style.contactItem}><a href='https://github.com/NatashaHatrum'
                                                                      target="blank"><i className="bi bi-github"
                                                                                        style={{
                                                                                            fontSize: '1.2rem',
                                                                                            color: 'cadetblue',
                                                                                            paddingRight: '10px'
                                                                                        }}/>NatashaHatrum</a></div>
                            </Col>
                            <Col span={24} className={style.tempCol3}><Forms/></Col>
                        </Row>

                    }

                </Col>
            </Row>
            < />
            )
            };

            export default Contact;