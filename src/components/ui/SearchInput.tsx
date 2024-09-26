import {View, TextInput} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SearchInput = () => {
  return (
    <View className="relative w-full bg-card rounded-lg">
      <TextInput
        className="text-white p-5"
        placeholder="Search for a Chapter"
        placeholderTextColor={'#CDCDE0'}
      />
      <View className="absolute -translate-x-1/2 right-5 top-5 opacity-70">
        <FontAwesome name="search" size={24} color="white" />
      </View>
    </View>
  );
};

export default SearchInput;
