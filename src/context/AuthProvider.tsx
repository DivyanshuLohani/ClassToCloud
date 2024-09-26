import {api} from '@constants/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

interface IAuth {
  access: string;
  refresh: string;
}

interface IUser {
  uid: string;
  email: string;
  name: string;
  standard: string | null;
  phone_number: string;
  meta: null;
  created_at: string;
  updated_at: string;
  is_teacher: boolean;
}

export interface AuthContextValue {
  auth: IAuth | null;
  setAuth: Dispatch<SetStateAction<IAuth | null>>;
  userInfo: IUser | null;
  setUserInfo: Dispatch<SetStateAction<IUser | null>>;
  login: (email: string, password: string) => Promise<boolean>;
  getUserData: () => Promise<IUser | null>;
  logout: () => void;
  checkLogin: () => void;
}

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined,
);

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [auth, setAuth] = useState<IAuth | null>(null);
  const [userInfo, setUserInfo] = useState<IUser | null>(null);

  const getUserData = async () => {
    if (!auth) {
      return;
    }
    try {
      const res = await api.get('/auth/user/', {
        headers: {
          Authorization: `Bearer ${auth.access}`,
        },
      });

      setUserInfo(res.data);
      await AsyncStorage.setItem('userInfo', JSON.stringify(res.data));
      return res.data;
    } catch (e) {
      console.error(`Error in getUserData ${e}`);
    }
    return null;
  };

  useEffect(() => {
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  const login = async (email: string, password: string) => {
    try {
      const res = await api.post('/auth/login/', {email, password});
      setAuth(res.data);
      await AsyncStorage.setItem('auth', JSON.stringify(res.data));

      return true;
    } catch (e) {
      console.log(`Error in login ${e}`);
    }
    return false;
  };

  const logout = () => {
    setUserInfo(null);
    setAuth(null);
    AsyncStorage.clear();
  };

  const checkLogin = async () => {
    console.log('Check login');
    try {
      const v = await AsyncStorage.getItem('auth');
      const a = JSON.parse(v ?? '');
      if (a.access) {
        const UserInfo = (await AsyncStorage.getItem('userInfo')) ?? '';
        const parsedUserInfo = JSON.parse(UserInfo);
        if (!parsedUserInfo) {
          return;
        }
        setAuth(a);
        setUserInfo(parsedUserInfo);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        userInfo,
        setUserInfo,
        login,
        getUserData,
        logout,
        checkLogin,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
