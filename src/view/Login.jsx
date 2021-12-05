import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from 'react-router';

function Login(props) {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		return () => {

		}
	}, [])

	const onLogin = () => {
		window.fetch("http://localhost:8080/api/users/v1/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({"username":username, "password":password})
		})
		.then(res => console.log(res));
	}

	const callKakaoLogin = () => {

		window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=28905262b69a56805097e8eea1fc075d&redirect_uri=http://localhost:3000/callback/kakao`;
	}

	return (
	<div>
		<h1>Login</h1>
		<div id="id_pw_wrap">
			{/* ID */}
			<div className="input_row" id="id_line">
				<input 
					id="username"
					type="text" 
					placeholder="아이디" 
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					/>
			</div>
			{/* PW */}
			<div className="input_row" id="pw_line">
				<input
					id="password" 
					type="password" 
					placeholder="비밀번호" 
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					/>
			</div>
		</div>
		<div>
			<input type="checkbox" id="keep" />
			<label htmlFor="keep">로그인 상태 유지</label>
		</div>
		<div>
			<button onClick={onLogin}>로그인</button>
		</div>
		<ul>
			<li>
				<a href="/">비밀번호 찾기</a>
			</li>
			<li>
				<a href="/">아이디 찾기</a>
			</li>
			<li>
				<a href="/">회원가입</a>
			</li>
		</ul>
		<button onClick={callKakaoLogin}>
			카카오 로그인
		</button>
	</div>
	)
}

export default Login;