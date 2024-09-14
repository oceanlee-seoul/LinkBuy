import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface User {
  createdAt: string;
  email: string;
  id: number;
  image: string | null;
  nickname: string;
  updatedAt: string;
}

interface UserState {
  accessToken: string | null;
  refreshToken: string | null;
  user: User | null;
}

interface UserAction {
  setUser: (user: UserState | null) => void;
}

export const useUserStore = create<UserState & UserAction>()(
  devtools(
    persist(
      (set) => ({
        accessToken: null,
        refreshToken: null,
        user: null,
        setUser: (user: UserState | null) => {
          set({ ...user });
        },
      }),
      {
        name: 'userStore',
      }
    )
  )
);
