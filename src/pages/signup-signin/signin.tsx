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
import { useUserStore } from '../../store/useUserStore';
import { postSignin } from '../../apis/userApis';

export default function Signin() {
  const setUser = useUserStore((state) => state.setUser);

  const [signinData, setSigninData] = useState({
    email: '',
    password: '',
  });

  const [validationObj, setValidationObj] = useState({
    email: false,
    password: false,
  });

  const [errorMessageObj, setErrorMessageObj] = useState({
    email: '',
    password: '',
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? '' : '유효한 이메일 주소를 입력해 주세요.';
  };

  const validatePassword = (password: string) => {
    return password.length ? '' : '비밀번호를 입력해 주세요.';
  };

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setSigninData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  useEffect(() => {
    setValidationObj({
      email: validateEmail(signinData.email) === '',
      password: validatePassword(signinData.password) === '',
    });

    setErrorMessageObj({
      email: validateEmail(signinData.email),
      password: validatePassword(signinData.password),
    });
  }, [signinData]);

  const handleSignin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await postSignin(signinData);
      setUser({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
        user: {
          createdAt: data.user.createdAt,
          email: data.user.email,
          id: data.user.id,
          image: data.user.image,
          nickname: data.user.nickname,
          updatedAt: data.user.updatedAt,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={background}>
      <div className={container}>
        <h1 className={authHeader}>Sign In</h1>
        <form onSubmit={handleSignin}>
          <div className={authInputBox}>
            <label className={authLabel} htmlFor="email">
              이메일
            </label>
            <input
              id="email"
              className={authInput}
              value={signinData.email}
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
            <label className={authLabel} htmlFor="password">
              비밀번호
            </label>
            <input
              id="password"
              className={authInput}
              value={signinData.password}
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
          <Button
            disabled={!(validationObj.email && validationObj.password)}
            height={50}
          >
            로그인
          </Button>
        </form>
      </div>
    </div>
  );
}
