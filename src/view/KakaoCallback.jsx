import React from "react";
import { useEffect } from 'react';
import { useLocation } from 'react-router'

function KakaoCallback() {

    const location = useLocation();
    const code = new URLSearchParams(location.search).get("code"); // querystring code

    useEffect(() => {
    
        kakaoTokenHandler(code);

        return () => {
            // unmount

        }
    }, []);

    const kakaoTokenHandler = (code) => {
        console.log(code);
        window.fetch(`http://localhost:8080/api/oauth/v1/kakao?code=${code}`, {
            method: "GET"
        })
        .then(res => console.log(res.json()));
    };
    
    return (
        <div>
            카카오 로그인 중
        </div>
    )
}

export default KakaoCallback;