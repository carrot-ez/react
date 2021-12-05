import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import MainContext from "../context/MainContext";

function Index() {

    const navigate = useNavigate();
    const {state, dispatch} = useContext(MainContext);

    const {userInfo} = state;

    useEffect(() => {
        // 로그인 되어 있지 않다면, login 페이지로 이동
        if (!userInfo) {
            navigate("/login");
        }
    }, [userInfo, navigate])

    return (
        <div>
            <p>안녕하세요! {userInfo?.name}님</p>
        </div>
    )
}

export default Index;