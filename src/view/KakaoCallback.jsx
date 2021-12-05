import React from "react";
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router'

function KakaoCallback() {

    const location = useLocation();
    const navigate = useNavigate();
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
        .then(res => {
            console.log(res);
            if (res.status === 200) {
                return res.json();
            }
            return null;
        })
        .then(data => {
            if (!data) {
                alert("카카오 로그인에 실패하였습니다.");
                navigate('/login');
            }
            console.log("로그인 성공");
            navigate('/');
        })
        .catch(e => {
            alert("잠시 후 다시 시도해주십시오.");
            navigate("/login");
        })
    };
    
    return (
        <div>
            카카오 로그인 중
        </div>
    )
}

export default KakaoCallback;