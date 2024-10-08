import {
  background,
  container,
  authInputBox,
  authInput,
  authHeader,
  authLabel,
  errorMessage,
} from './signup-signin.css';
import { ChangeEvent, useState, useEffect } from 'react';
import Button from '../../components/common/Button';
import { postSignup } from '../../apis/userApis';

export default function Signup() {
  const [signupData, setSignupData] = useState({
    email: '',
    nickname: '',
    password: '',
    passwordConfirmation: '',
  });

  const [validationObj, setValidationObj] = useState({
    email: false,
    nickname: false,
    password: false,
    passwordConfirmation: false,
  });

  const [errorMessageObj, setErrorMessageObj] = useState({
    email: '',
    nickname: '',
    password: '',
    passwordConfirmation: '',
  });

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? '' : '유효한 이메일 주소를 입력해 주세요.';
  };

  const validateNickname = (nickname: string) => {
    return nickname.length > 0 ? '' : '닉네임을 입력해 주세요.';
  };

  const validatePassword = (password: string) => {
    return password.length >= 6 ? '' : '비밀번호는 6자 이상이어야 합니다.';
  };

  const validatePasswordConfirm = (
    password: string,
    passwordConfirm: string
  ) => {
    return password === passwordConfirm ? '' : '비밀번호가 일치하지 않습니다.';
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await postSignup(signupData);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setValidationObj({
      email: validateEmail(signupData.email) === '',
      nickname: validateNickname(signupData.nickname) === '',
      password: validatePassword(signupData.password) === '',
      passwordConfirmation:
        validatePasswordConfirm(
          signupData.password,
          signupData.passwordConfirmation
        ) === '',
    });

    setErrorMessageObj({
      email: validateEmail(signupData.email),
      nickname: validateNickname(signupData.nickname),
      password: validatePassword(signupData.password),
      passwordConfirmation: validatePasswordConfirm(
        signupData.password,
        signupData.passwordConfirmation
      ),
    });
  }, [signupData]);

  return (
    <div className={background}>
      <div className={container}>
        <h1 className={authHeader}>Sign Up</h1>
        <form onSubmit={handleSignup}>
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
              style={{
                borderColor: `${validationObj.email ? '' : '#FF4D4D'}`,
              }}
            />
            {validationObj.email ? null : (
              <p className={errorMessage}>{errorMessageObj.email}</p>
            )}
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
              style={{
                borderColor: `${validationObj.nickname ? '' : '#FF4D4D'}`,
              }}
            />
            {validationObj.nickname ? null : (
              <p className={errorMessage}>{errorMessageObj.nickname}</p>
            )}
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
              style={{
                borderColor: `${validationObj.password ? '' : '#FF4D4D'}`,
              }}
            />
            {validationObj.password ? null : (
              <p className={errorMessage}>{errorMessageObj.password}</p>
            )}
          </div>
          <div className={authInputBox}>
            <label className={authLabel} htmlFor="passwordConfirm">
              비밀번호 확인
            </label>
            <input
              id="passwordConfirmation"
              className={authInput}
              value={signupData.passwordConfirmation}
              onChange={inputChangeHandler}
              type="password"
              placeholder="비밀번호를 다시 한 번 입력해 주세요."
              style={{
                borderColor: `${
                  validationObj.passwordConfirmation ? '' : '#FF4D4D'
                }`,
              }}
            />
            {validationObj.passwordConfirmation ? null : (
              <p className={errorMessage}>
                {errorMessageObj.passwordConfirmation}
              </p>
            )}
          </div>
          <Button
            onClick={() => {
              console.log('clicked!');
            }}
            disabled={
              !(
                validationObj.email &&
                validationObj.nickname &&
                validationObj.password &&
                validationObj.passwordConfirmation
              )
            }
            type="submit"
          >
            회원가입
          </Button>
        </form>
      </div>
    </div>
  );
}
