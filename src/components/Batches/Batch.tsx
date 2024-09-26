import {View, Text} from 'react-native';
import React from 'react';
import {IBatch} from '@constants/api';
import {Link} from '@react-navigation/native';

const Batch = ({batch}: {batch: IBatch}) => {
  return (
    <View className="bg-card min-w-fit p-5 w-full mt-10">
      <Link to={{screen: 'Batch', params: {uid: batch.uid, name: batch.name}}}>
        <View className="flex flex-col">
          <Text className="text-white text-xl font-bold">{batch.name}</Text>
          <Text className="text-white text-md font-bold">
            {batch.description}
          </Text>
        </View>
      </Link>
    </View>
  );
};

export default Batch;
