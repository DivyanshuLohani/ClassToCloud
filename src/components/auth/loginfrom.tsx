import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import Input from '@components/ui/input';
import Button from '@components/ui/button';
import useAuth from '@hooks/useAuth';
import showToast from '@components/ui/toast';

const LoginForm = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login, checkLogin, auth} = useAuth();

  useEffect(() => {
    checkLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (auth) {
      navigation.replace('Home');
    }
  }, [auth, navigation]);

  const handleSubmit = async () => {
    const isLoginSuccess = await login(email, password);
    if (!isLoginSuccess) {
      return showToast('Login Error');
    }
    showToast('Login successful');
    navigation.replace('Home');
  };

  return (
    <View className="w-full space-y-5 mt-10">
      <Text className="text-2xl text-white font-semibold text-left">Login</Text>
      {/* Email */}
      <View className="flex flex-col gap-1">
        <Text className="text-muted text-lg mb-2">Login Id</Text>
        <Input placeholder="Login ID" value={email} onChange={setEmail} />
      </View>
      {/* Password */}
      <View className="flex flex-col gap-1">
        <Text className="text-muted text-lg mb-2">Password</Text>
        <Input
          placeholder="Password"
          textContentType={'password'}
          password={true}
          onChange={setPassword}
          value={password}
        />
      </View>
      <View className="mt-10">
        <Button title="Login" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default LoginForm;
