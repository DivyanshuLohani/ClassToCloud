import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

export function TabBarIcon({style, ...rest}: any) {
  // eslint-disable-next-line react-native/no-inline-styles
  return <AntDesign size={28} style={[{marginBottom: -3}, style]} {...rest} />;
}
