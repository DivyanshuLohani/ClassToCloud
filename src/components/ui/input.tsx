import {View, TextInput} from 'react-native';
import React from 'react';

const Input = ({
  placeholder,
  textContentType,
  password,
  value,
  onChange,
}: {
  placeholder?: string;
  textContentType?: any;
  password?: boolean;
  value?: string;
  onChange?: any;
}) => {
  return (
    <View className="w-full bg-card rounded-lg">
      <TextInput
        className="text-white p-5"
        placeholder={placeholder}
        placeholderTextColor={'#CDCDE0'}
        textContentType={textContentType}
        secureTextEntry={password}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};

export default Input;
