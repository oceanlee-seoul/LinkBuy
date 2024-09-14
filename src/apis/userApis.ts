import instance from './axios';

interface SignupAndSigninResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    createdAt: string;
    email: string;
    id: number;
    image: string | null;
    nickname: string;
    updatedAt: string;
  };
}

export const postSignup = async (formData: {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
}): Promise<SignupAndSigninResponse> => {
  const response = await instance.post<SignupAndSigninResponse>(
    `/auth/signUp`,
    formData
  );
  return response.data;
};

export const postSignin = async (formData: {
  email: string;
  password: string;
}): Promise<SignupAndSigninResponse> => {
  const response = await instance.post<SignupAndSigninResponse>(
    `auth/signIn`,
    formData
  );
  return response.data;
};
