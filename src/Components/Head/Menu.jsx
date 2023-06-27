import React from "react";
import style from "./Menu.module.css"
import {Col, Row} from "antd";
import Menu from "antd/es/menu";
import {Link, animateScroll as scroll} from "react-scroll";
import {useMobile} from "./../Hook/Hooks";
import HamburgerMenu from "./HamburgerMenu";

const scrollToTop = () => {
    scroll.scrollToTop();
};

const AppMenu = () => {
    const [isMobile] = useMobile();
    return (
        <>
            {!isMobile?
                <Row justify='end'>
                    <Col xs={{span:12}} lg={{span: 13}} xl={{span: 11}} xxl={{span: 11}}>

                        <Menu  style={{
                            backgroundColor: "transparent",
                            textTransform: "uppercase",
                            fontSize: "20px",

                        }} mode="horizontal"
                              items={
                                  [
                                      {
                                          label: <Link to="section1"
                                                       spy={true}
                                                       smooth={true}
                                                       offset={-70}
                                                       duration={800}
                                                       className={style.navbar}
                                          >About me</Link>,
                                          key: 'aboutMe',
                                          id: '#section1'
                                      },
                                      {
                                          label:
                                              <Link to="section2"
                                                    spy={true}
                                                    smooth={true}
                                                    offset={-70}
                                                    duration={800}
                                                    className={style.navbar}
                                              >Education</Link>,

                                          key: 'education',
                                          id: '#section2'
                                      },
                                      {
                                          label:
                                              <Link to="section3"
                                                    spy={true}
                                                    smooth={true}
                                                    offset={-70}
                                                    duration={800}
                                                    className={style.navbar}
                                              >Portfolio</Link>,

                                          key: 'portfolio',
                                          id: '#section3'
                                      },
                                      {
                                          label:
                                              <Link to="section4"
                                                    spy={true}
                                                    smooth={true}
                                                    offset={-70}
                                                    duration={800}
                                                    className={style.navbar}
                                              >Contact</Link>,

                                          key: 'contact',
                                          id: '#section4'
                                      }

                                  ]
                              }

                        />

                    </Col>
                </Row> :
                <div><HamburgerMenu/></div>
            }
        </>
    )
};

export default AppMenu;