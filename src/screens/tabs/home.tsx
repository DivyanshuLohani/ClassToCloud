import {View, Text, Image} from 'react-native';
import React from 'react';
import useAuth from '@hooks/useAuth';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchInput from '@components/ui/SearchInput';
import Seperator from '@components/ui/seperator';
import BatchContainer from '@components/Batches/BatchesContainer';

const LogoImage = require('../../../assets/images/logos/logo.png');

const Batches = () => {
  const {userInfo} = useAuth();

  return (
    <>
      <SafeAreaView className="bg-background h-screen items-center px-5">
        <View className="flex gap-5 mt-10 w-full">
          <View className="flex flex-row justify-between">
            <View className="flex flex-col">
              <Text className="text-white text-lg">
                Welcome Back {userInfo?.is_teacher ? 'Sir' : null}
              </Text>
              <Text className="text-white text-2xl">{userInfo?.name}</Text>
            </View>
            <View>
              <Image
                className="h-[70px] w-[110px]"
                source={LogoImage}
                width={111}
                height={75}
              />
            </View>
          </View>
        </View>
        <View className="mt-5 p-0 w-full ">
          <SearchInput />
        </View>
        <Seperator />
        <BatchContainer />
      </SafeAreaView>
    </>
  );
};

export default Batches;
