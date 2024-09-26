import React from 'react';
import {
  NavigationContainer,
  Theme,
  ThemeProvider,
} from '@react-navigation/native';
import {colors} from '@constants/colors';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '@screens/auth/Login';
import TabLayout from '@components/BottomNav/TabBar';
import AuthProvider from '@context/AuthProvider';
import BatchesScreen from '@screens/batches/batch';
import {RootStackParamList} from '@constants/types';
import SubjectsScreen from '@screens/subjects/subject';
import ChapterScreen from '@screens/chapter/chapter';

const theme: Theme = {
  dark: true,
  colors: {
    ...colors,
  },
};

const Stack = createStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <ThemeProvider value={theme}>
        <AuthProvider>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={TabLayout} />
            <Stack.Screen
              name="Batch"
              component={BatchesScreen}
              options={({route}) => ({
                title: route.params.name,
                headerShown: true,
              })}
            />
            <Stack.Screen
              name="Subject"
              component={SubjectsScreen}
              options={({route}) => ({
                title: route.params.name,
                headerShown: true,
              })}
            />
            <Stack.Screen
              name="Chapter"
              component={ChapterScreen}
              options={({route}) => ({
                title: route.params.name,
                headerShown: true,
              })}
            />
          </Stack.Navigator>
        </AuthProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
