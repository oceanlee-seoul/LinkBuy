import instance from './axios';

interface SignupResponse {
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
}): Promise<SignupResponse> => {
  const response = await instance.post<SignupResponse>(
    `/auth/signUp`,
    formData
  );
  return response.data;
};
