// - If no batches then display centered text
// - If batches return the list of batches using batch component
// - While fetching the batches there should be a loading spinner

import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import Batch from './Batch';
import useFetch from '@hooks/useFetch';
import {IBatch} from '@constants/api';

const BatchContainer = () => {
  const {data: batches, loading} = useFetch('/batches/');

  if (loading) {
    return (
      <View className="h-full w-full flex items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <View className="flex flex-col w-full">
      {batches?.results?.map((v: IBatch) => {
        return <Batch key={v.uid} batch={v} />;
      })}
    </View>
  );
};

export default BatchContainer;
