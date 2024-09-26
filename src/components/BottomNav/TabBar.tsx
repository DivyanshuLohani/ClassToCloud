import useAuth from '@hooks/useAuth';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Batches from '@screens/tabs/home';
import React, {useEffect} from 'react';
import {TabBarIcon} from './TabBarIcon';
import attendance from '@screens/tabs/attendance';
import Profile from '@screens/tabs/profile';

const Tabs = createBottomTabNavigator();

export default function TabLayout({navigation}: any) {
  const {auth, checkLogin} = useAuth();

  useEffect(() => {
    checkLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!auth) {
      return navigation.navigate('Login');
    }
  }, [auth, navigation]);

  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        component={Batches}
        options={{
          title: 'Home',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color}) => <TabBarIcon name={'home'} color={color} />,
        }}
      />
      <Tabs.Screen
        name="attendance"
        component={attendance}
        options={{
          title: 'Attendance',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon
              name={focused ? 'checkcircle' : 'checkcircleo'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        children={Profile}
        name="profile"
        options={{
          title: 'Profile',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color}) => <TabBarIcon name={'user'} color={color} />,
        }}
      />
    </Tabs.Navigator>
  );
}
