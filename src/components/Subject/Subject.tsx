import {View, Text} from 'react-native';
import React from 'react';
import {ISubject} from '@constants/api';
import {Link} from '@react-navigation/native';

const Subject = ({subject}: {subject: ISubject}) => {
  return (
    <View className="py-10 px-5 bg-card rounded-lg w-full">
      <Link
        to={{
          screen: 'Subject',
          params: {uid: subject.uid, name: subject.name},
        }}>
        <Text className="text-2xl text-white">{subject.name}</Text>
      </Link>
    </View>
  );
};

export default Subject;
