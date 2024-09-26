import {RootStackParamList} from '@constants/types';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';
import NotesTab from './notes';
import LecturesTab from './lectures';

type Props = NativeStackScreenProps<RootStackParamList, 'Chapter'>;

const Tab = createMaterialTopTabNavigator();

const ChapterScreen = ({route, navigation}: Props) => {
  return (
    <Tab.Navigator backBehavior="none">
      <Tab.Screen name="lectures">
        {(props: any) => (
          <LecturesTab
            uid={route.params.uid}
            navigation={navigation}
            {...props}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="notes">
        {(props: any) => <NotesTab uid={route.params.uid} {...props} />}
      </Tab.Screen>
      <Tab.Screen name="dpps">
        {(props: any) => <NotesTab uid={route.params.uid} {...props} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default ChapterScreen;
