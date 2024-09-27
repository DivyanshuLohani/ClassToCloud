import {Text, View} from 'react-native';
import React from 'react';
import useFetch from '@hooks/useFetch';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';
import {RootStackParamList} from '@constants/types';
import LecturePlayer from '@components/Player/LecturePlayer';

type Props = NativeStackScreenProps<RootStackParamList, 'Lecture'>;
const LectureScreen = ({route}: Props) => {
  const {data: lecture, loading} = useFetch(`/lectures/${route.params.uid}`);
  if (loading || !lecture) {
    return null;
  }
  return (
    <View className="flex flex-col">
      <LecturePlayer uri={lecture.file} />
      <Text className="p-5 text-2xl font-bold">{lecture.title}</Text>
    </View>
  );
};

export default LectureScreen;
