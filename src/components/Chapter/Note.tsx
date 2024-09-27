import {View, Text} from 'react-native';
import React from 'react';
import {INotes} from '@/constants/api';
import {Link} from '@react-navigation/native';

const Note = ({note}: {note: INotes}) => {
  return (
    <View className="py-5 px-5 mt-5 bg-card rounded-lg w-full">
      <Link to={{screen: 'Notes', params: {uid: note.uid, name: note.name}}}>
        <View className="flex flex-col">
          <Text className="text-2xl font-semibold text-white">{note.name}</Text>
        </View>
      </Link>
    </View>
  );
};

export default Note;
