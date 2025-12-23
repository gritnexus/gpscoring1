import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/LoginScreen';
import { QRScannerScreen } from '../screens/QRScannerScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { useAuth } from '../hooks/useAuth';

export type AuthStackParamList = {
  Login: undefined;
  QRScanner: undefined;
};

export type AppStackParamList = {
  Home: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const AppStack = createNativeStackNavigator<AppStackParamList>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen 
        name="QRScanner" 
        component={QRScannerScreen}
        options={{
          presentation: 'modal',
        }}
      />
    </AuthStack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppStack.Screen name="Home" component={HomeScreen} />
    </AppStack.Navigator>
  );
};

export const RootNavigator = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return null;
  }

  return isAuthenticated ? <AppNavigator /> : <AuthNavigator />;
};
