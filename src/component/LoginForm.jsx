

function LoginForm() {


	return (
	<div>
		<div id="id_pw_wrap">
			<div className="input_row" id="id_line">
				<input type="text" placeholder="아이디"/>
			</div>
			<div className="input_row" id="pw_line">
				<input type="password" placeholder="비밀번호" />
			</div>
		</div>
		<div>
			<input type="checkbox" id="keep" />
			<label for="keep">로그인 상태 유지</label>
		</div>
		<div>
			<button>로그인</button>
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

export default LoginForm;