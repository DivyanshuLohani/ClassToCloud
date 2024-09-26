import {Text, TouchableOpacity, GestureResponderEvent} from 'react-native';
import React from 'react';

const Button = ({
  title,
  onPress,
}: {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="px-10 items-center py-5 bg-button rounded-lg">
      <Text className="text-white">{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
