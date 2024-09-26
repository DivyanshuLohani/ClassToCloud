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

const theme: Theme = {
  dark: true,
  colors: {
    ...colors,
  },
};

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <ThemeProvider value={theme}>
        <AuthProvider>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={TabLayout} />
          </Stack.Navigator>
        </AuthProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
