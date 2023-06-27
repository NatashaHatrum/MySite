import React, { useState, useEffect } from 'react';


export const useMobile = () =>{
    const [isMobile, setMobile] = useState(false)
    const widthScreen = window.innerWidth
    useEffect(
        () =>{
            if (widthScreen < 992) {
                setMobile(true)
            }
            else {
                setMobile(false)
            }
        },[widthScreen]
    );
    return [isMobile]
};