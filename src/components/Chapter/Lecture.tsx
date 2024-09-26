import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {ILecture} from '@constants/api';

function formatSeconds(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const hoursStr = hours.toString().padStart(2, '0');
  const minutesStr = minutes.toString().padStart(2, '0');
  const secondsStr = secs.toString().padStart(2, '0');

  if (!hours) {
    return `${minutesStr}:${secondsStr}`;
  }
  return `${hoursStr}:${minutesStr}:${secondsStr}`;
}

const Lecture = ({
  lecture,
  navigation,
}: {
  lecture: ILecture;
  navigation: any;
}) => {
  return (
    <TouchableOpacity
      onPress={e => {
        e.preventDefault();
        navigation.navigate('Lecture', {uid: lecture.uid});
      }}>
      <View className="bg-card rounded-lg w-full mt-5">
        <View className="w-full relative">
          <Image
            source={{uri: 'https://picsum.photos/200'}}
            width={325}
            height={180}
            className="w-full"
          />
          <View className="absolute bottom-2 right-2">
            <Text className="text-white p-1 bg-black">
              {formatSeconds(lecture.duration)}
            </Text>
          </View>
        </View>
        <Text className="text-white px-5 py-2 text-2xl font-semibold">
          {lecture.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Lecture;
