import {View, Text} from 'react-native';
import React from 'react';
import {IChapter} from '@constants/api';
import {Link} from '@react-navigation/native';

const Chapter = ({chapter, index}: {chapter: IChapter; index: number}) => {
  return (
    <View className="py-5 px-5 bg-card rounded-lg w-full">
      <Link
        to={{
          screen: 'Chapter',
          params: {uid: chapter.uid, name: chapter.name},
        }}>
        <View className="flex flex-col">
          <Text className="text-2xl font-semibold text-white">
            Chapter {index + 1}: {chapter.name}
          </Text>
          <Text className="text-1xl text-white">
            {chapter.lectures} Lectures | {chapter.notes} Notes | {chapter.dpps}{' '}
            DPPS
          </Text>
        </View>
      </Link>
    </View>
  );
};

export default Chapter;
