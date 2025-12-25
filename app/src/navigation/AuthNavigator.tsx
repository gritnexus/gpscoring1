import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/LoginScreen';
import { QRScannerScreen } from '../screens/QRScannerScreen';
import { TeeAccessScreen } from '../screens/TeeAccessScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { EventInfoScreen } from '../screens/EventInfoScreen';
import { ScoreCardScreen } from '../screens/ScoreCardScreen';
import { LeaderboardScreen } from '../screens/LeaderboardScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { useAuth } from '../hooks/useAuth';

export type AuthStackParamList = {
  Login: undefined;
  QRScanner: undefined;
  TeeAccess: undefined;
};

export type AppStackParamList = {
  Home: undefined;
  EventInfo: undefined;
  ScoreCard: undefined;
  Leaderboard: undefined;
  Chat: undefined;
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
      <AuthStack.Screen name="TeeAccess" component={TeeAccessScreen} />
    </AuthStack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade', // Smooth fade transition
        animationDuration: 200, // Fast and smooth
      }}
    >
      <AppStack.Screen name="Home" component={HomeScreen} />
      <AppStack.Screen name="EventInfo" component={EventInfoScreen} />
      <AppStack.Screen name="ScoreCard" component={ScoreCardScreen} />
      <AppStack.Screen name="Leaderboard" component={LeaderboardScreen} />
      <AppStack.Screen name="Chat" component={ChatScreen} />
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
