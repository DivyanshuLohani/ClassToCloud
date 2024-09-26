import {View} from 'react-native';
import React from 'react';
import useFetch from '@hooks/useFetch';
import {SafeAreaView} from 'react-native-safe-area-context';
import Spinner from '@components/ui/Spinner';
import SearchInput from '@components/ui/SearchInput';
import {ISubject} from '@constants/api';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';
import {RootStackParamList} from '@constants/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Batch'>;

const BatchesScreen = ({route}: Props) => {
  const {data: batch, loading} = useFetch(`/batches/${route.params.uid}/`);
  if (loading) {
    return <Spinner />;
  }
  return (
    <SafeAreaView className="px-4 mt-5">
      <SearchInput />
      <View className="flex mt-10 space-y-5 h-full">
        {batch?.results?.map((s: ISubject) => {
          // return <Subject subject={s} key={s.uid} />;
        })}
      </View>
    </SafeAreaView>
  );
};

export default BatchesScreen;
