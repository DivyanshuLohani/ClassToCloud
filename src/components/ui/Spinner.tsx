import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import {colors} from '@constants/colors';

const Spinner = () => {
  return (
    <View className="h-full w-full flex items-center justify-center">
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

export default Spinner;
