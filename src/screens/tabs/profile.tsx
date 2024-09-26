import {View, Text} from 'react-native';
import React from 'react';
import useAuth from '@hooks/useAuth';
import {SafeAreaView} from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Input from '@components/ui/input';
import Button from '@components/ui/button';

const Profile = () => {
  const {userInfo, logout} = useAuth();

  return (
    <SafeAreaView>
      <View className="flex space-y-10 mt-20 px-5">
        <View className="flex items-center justify-center">
          <View className="mb-5">
            <FontAwesome name="user-circle" size={100} color="white" />
          </View>
          <Text className="text-white text-xl font-bold">{userInfo?.name}</Text>
        </View>
        <View>
          <Text className="text-white text-2xl font-bold">Edit Info</Text>

          <View className="flex flex-col my-10">
            <Text className="text-muted text-lg mb-2">Name</Text>
            <Input placeholder="Name" />
          </View>

          <Button title="Save" />
          <View className="my-10" />
          <Button
            title="Logout"
            onPress={() => {
              logout();
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
