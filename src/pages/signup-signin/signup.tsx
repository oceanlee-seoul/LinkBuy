import {
  background,
  container,
  authInputBox,
  authInput,
  authHeader,
  authLabel,
} from './signup-signin.css';
import { ChangeEvent, useState } from 'react';

export default function Signup() {
  const [signupData, setSignupData] = useState({
    email: '',
    nickname: '',
    password: '',
    passwordConfirm: '',
  });

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <div className={background}>
      <div className={container}>
        <h1 className={authHeader}>Sign Up</h1>
        <div className={authInputBox}>
          <label className={authLabel} htmlFor="email">
            이메일
          </label>
          <input
            id="email"
            className={authInput}
            value={signupData.email}
            onChange={inputChangeHandler}
            type="text"
            placeholder="이메일을 입력해 주세요."
          />
        </div>
        <div className={authInputBox}>
          <label className={authLabel} htmlFor="nickname">
            닉네임
          </label>
          <input
            id="nickname"
            className={authInput}
            value={signupData.nickname}
            onChange={inputChangeHandler}
            type="text"
            placeholder="닉네임을 입력해 주세요."
          />
        </div>
        <div className={authInputBox}>
          <label className={authLabel} htmlFor="password">
            비밀번호
          </label>
          <input
            id="password"
            className={authInput}
            value={signupData.password}
            onChange={inputChangeHandler}
            type="password"
            placeholder="비밀번호를 입력해 주세요."
          />
        </div>
        <div className={authInputBox}>
          <label className={authLabel} htmlFor="passwordConfirm">
            비밀번호 확인
          </label>
          <input
            id="passwordConfirm"
            className={authInput}
            value={signupData.passwordConfirm}
            onChange={inputChangeHandler}
            type="password"
            placeholder="비밀번호를 다시 한 번 입력해 주세요."
          />
        </div>
        <button>회원가입</button>
      </div>
    </div>
  );
}
