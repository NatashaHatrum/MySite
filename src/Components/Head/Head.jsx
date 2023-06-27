import React from "react";
import style from "./Head.module.css"
import {Button, Col, Row} from "antd";
import AppMenu from "./Menu";
import {DownloadOutlined} from '@ant-design/icons';
import cv from "../../Documents/NatalliaTarkaCV.pdf"

const Head = () => {
    return (
        <>
            <Row>
                <Col span={24}> <AppMenu/></Col>
            </Row>
            <Row className={style.tempRow1}>
                <Col xs={{span: 24}} sm={{span: 24}} md={{span: 24}} lg={{span: 18}} xl={{span: 18}} xxl={{span: 18}}>
                    <Row justify={'center'} className={style.tempRow2}>
                        <Col>
                            <div className={style.titleContainer}>
                                <span className={style.text1}> Natallia Tarka </span>
                                <span className={style.text2}>Website frontend developer</span>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row justify='end' className={style.tempRow3}>
                <Col span={2}>
                    <a href={cv} target="_blank" rel="NatalliaTarkaCV" download><Button type="default" shape="round"
                                                                                        className={style.buttonCV}
                                                                                        icon={<DownloadOutlined/>}>
                        Download CV
                    </Button></a>
                </Col>
            </Row>
        </>
    )
};

export default Head;