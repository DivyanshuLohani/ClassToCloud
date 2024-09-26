import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import LoginForm from '@components/auth/loginfrom';
const LogoImage = require('../../../assets/images/logos/logo.png');

const Login = ({navigation}: any) => {
  return (
    <SafeAreaView className="flex items-center justify-center h-full px-10">
      <View className="flex flex-row justify-around items-center w-full">
        <View>
          <Image
            className="h-[70px] w-[55px]"
            source={LogoImage}
            width={111}
            height={75}
          />
        </View>
        <Text className="text-white font-bold text-4xl">Class To Cloud</Text>
      </View>
      <LoginForm navigation={navigation} />
    </SafeAreaView>
  );
};

export default Login;
