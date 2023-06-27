import React  from "react";
import style from "./Education.module.css";
import {Col, Row, Table, Typography} from "antd";
import {Progress, Space } from 'antd';
import {motion} from 'framer-motion'


const {Title} = Typography;


const ProgressItem = [
    {
        name: "HTML",
        percent: 95
    },
    {
        name: "React",
        percent: 85
    },
    {
        name: "CSS",
        percent: 95
    },
    {
        name: "JavaScript",
        percent: 80
    },
    {
        name: "GIT",
        percent: 80
    },
    {
        name: "JIRA",
        percent: 60
    },

];
const ProgressItemsCircle = [
    {
        name: "English",
        percent: 70
    },
    {
        name: "Polish",
        percent: 90
    },
    {
        name: "Belorussian",
        percent: 100
    },
    {
        name: "Russian",
        percent: 100
    },
]
const animationSection={
    hidden:{
        x: -100,
        opacity: 0,


    },
    visible: () => ({
        opacity: 1,
        x:0,
        transition: { delay: 0.30 }
    })
}

export const Education = () => {


    const dataSource = [
        {
            key: '1',
            period: '2022',
            school: "Programming course JS Bogdan's Stashchuk (11 hours)"
        },
        {
            key: '2',
            period: '2022',
            school: 'React JS course "Way of the samurai" (JavaScript , React) (52 hours)'
        },
        {
            key: '3',
            period: '2021',
            school: 'Lublin University of Inspiration. Language course (40 units of Polish language)',

        },
        {
            key: '4',
            period: '2021',
            school: `Udemy's course "Manual Testing. Basics course"`
        },
        {
            key: '5',
            period: '2014',
            school: 'Belorussian Polytechnic School. Office manager'
        },
        {
            key: '6',
            period: '2007- 2012',
            school: 'Belorussian State University Named after Arkadi Kuleshov. Educator and social pedagogue.'
        },
    ];

    const columns = [
        {
            title: 'Period',
            dataIndex: 'period',
            key: 'period',
            align: 'center',

        },
        {
            title: 'Information about school',
            dataIndex: 'school',
            key: 'school',
        }
    ];


return (
        <>
            <Row id="section2" className={style.tempRow5}>
                <Col  xxl={{span:12}} xl={{span: 15}} xs={{span:24}}>
                    <Typography>
                        <div className={style.textTitleShadow2}>education</div>
                        <Title className={style.textTitle2} level={1}>education</Title>
                    </Typography>
                </Col>
            </Row>

            <Row justify="center"  dark={false} gutter={[80, 10]} >
                <Col className={style.tempCol2} xxl={{span:12}} xl={{span: 9}}  xs={{span:24}} >

                    <Table dataSource={dataSource}
                           columns={columns}
                           pagination={false}
                    />
                </Col>
                <Col xxl={{span:10}} xl={{span: 9}}  xs={{span:24}} >
                    <Row className={style.tempRow6}>
                        <Col xxl={{span:12}} xl={{span: 15}}  className={style.titleSkils}>
                            <h2>Professional skills</h2>
                        </Col>
                        <Col className={style.titleSkilsText}>
                            <p>EVERY DAY I GAIN NEW EXPERIENCE IN TECHNOLOGIES AND THEIR PRACTICAL APPLICATIONS</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                          {ProgressItem.map((el, index) =>
                                <>
                                   <span className={style.skills}>{el.name}</span>
                                    <Progress  strokeColor={{
                                        '0%': '#7ecacc',
                                        '100%': 'cadetblue',
                                    }} style={{marginBottom: "20px"}} key={index}
                                              percent={el?.percent} status='active' />
                                </>
                          )}
                        </Col>
                    </Row>
                </Col>
            </Row>
        <motion.section
            initial="hidden"
            whileInView="visible"
            transition={{ duration:20}}
        >
            <motion.div variants={animationSection} >
            <Row  className={style.tempRow7}>
                <Col span={24}>
                    <div className={style.titleSkils}>
                        <h2>Levels of language proficiency</h2>
                    </div>
                    {ProgressItemsCircle.map((el,index) =>
                    <Space wrap key={index}>
                        <div> <Progress className={style.circle} type="circle" status="normal"  strokeColor={{
                            '0%': '#7ecacc',
                            '100%': 'cadetblue',
                        }} percent={el.percent} />
                            <div className={style.skillsLanguage}>{el.name}</div>
                        </div>
                    </Space>
                    )}
                    </Col>
            </Row>
            </motion.div>
        </motion.section>
            < />
            ) }

