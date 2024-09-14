import instance from './axios';

export const postSignup = async (formData: {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
}) => {
  return await instance.post(`/auth/signUp`, formData);
};
