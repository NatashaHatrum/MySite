import React, {useEffect} from "react";
import style from './HamburgerMenu.module.css'


import {
    MenuFoldOutlined
} from '@ant-design/icons';
import {Button, Menu} from 'antd';
import {useState} from 'react';
import MenuUnfoldOutlined from "@ant-design/icons/es/icons/MenuUnfoldOutlined";
import Link from "antd/es/typography/Link";



const HamburgerMenu = () => {


    const [collapsed, setCollapsed] = useState(false);
    const [currentSelected, setCurrentSelected] = useState(null)
    console.log(currentSelected)
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };


    useEffect(() => {
        if (currentSelected) {
            document.getElementById(currentSelected).scrollIntoView({
                behavior: 'smooth'
            })
        }
        setCurrentSelected(null);
        setCollapsed(false)

    }, [currentSelected]);


    return (
        <>

            <div className={style.menuContainer}>
                        <Button
                            type="primary"
                            onClick={toggleCollapsed}
                            style={{
                                margin: '0',
                                background: 'none',
                                fontSize: '30px',
                                marginLeft:'20px',
                                paddingTop:'0'
                            }}
                        >
                            {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                        </Button>
                {collapsed ? <Menu
                    className={style.menuContainer2}
                    mode="inline"
                    onClick={(menuItem) => setCurrentSelected(menuItem.key)}
                    theme="light"
                    inlineCollapsed={collapsed}
                    items={
                        [
                            {
                                label: <Link
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                    className={style.menuItems}
                                >About me</Link>,
                                key: 'section1',
                                id: '#section1'
                            },
                            {
                                label:
                                    <Link to="#section2"
                                          spy={true}
                                          smooth={true}
                                          offset={-70}
                                          duration={800}
                                          className={style.menuItems}
                                    >Education</Link>,

                                key: 'section2',
                                id: '#section2'
                            },
                            {
                                label:
                                    <Link to="#section3"
                                          spy={true}
                                          smooth={true}
                                          offset={-70}
                                          duration={800}
                                          className={style.menuItems}
                                    >Portfolio</Link>,

                                key: 'section3',
                                id: '#section3'
                            },
                            {
                                label:
                                    <Link to="section4"
                                          spy={true}
                                          smooth={true}
                                          offset={-70}
                                          duration={800}
                                          className={style.menuItems}
                                    >Contact</Link>,

                                key: 'section4',
                                id: '#section4'
                            }

                        ]
                    }
                /> : undefined}
            </div>
        </>
)
};

export default HamburgerMenu;