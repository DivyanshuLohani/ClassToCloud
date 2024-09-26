import {View} from 'react-native';
import React from 'react';
import useFetch from '@hooks/useFetch';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchInput from '@components/ui/SearchInput';
import Spinner from '@components/ui/Spinner';
import {IChapter} from '@constants/api';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';
import {RootStackParamList} from '@constants/types';
import Chapter from '@components/Chapter/Chapter';

type Props = NativeStackScreenProps<RootStackParamList, 'Subject'>;

const SubjectsScreen = ({route}: Props) => {
  const {data: subject, loading} = useFetch(
    `/batches/subjects/${route.params.uid}/`,
  );
  if (loading) {
    return <Spinner />;
  }
  return (
    <SafeAreaView className="px-4 mt-5">
      <SearchInput />
      <View className="flex mt-10 space-y-5 h-full w-full">
        {subject?.results?.map((s: IChapter, i: number) => {
          return <Chapter chapter={s} index={i} key={s.uid} />;
        })}
      </View>
    </SafeAreaView>
  );
};

export default SubjectsScreen;
