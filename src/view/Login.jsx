import { useState, useEffect } from "react";
import React from "react";

function Login() {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

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
		.then(res => res.json())
		.then(data => console.log(data))
	}

	return (
	<div>
		<h1>Login</h1>
		<div id="id_pw_wrap">
			<div className="input_row" id="id_line">
				<input 
					id="username"
					type="text" 
					placeholder="아이디" 
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					/>
			</div>
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
			<label for="keep">로그인 상태 유지</label>
		</div>
		<div>
			<button onClick={onLogin}>로그인</button>
		</div>
		<ui>
			<li>
				<a href="#">비밀번호 찾기</a>
			</li>
			<li>
				<a href="#">아이디 찾기</a>
			</li>
			<li>
				<a href="#">회원가입</a>
			</li>
		</ui>
	</div>
	)
}

export default Login;