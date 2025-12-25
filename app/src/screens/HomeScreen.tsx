import React from 'react';
import { View, StatusBar } from 'react-native';
import { homeStyles } from '../styles/homeStyles';
import { BottomNavigation } from '../components/BottomNavigation';

export const HomeScreen: React.FC = () => {
  return (
    <View style={homeStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#E8EEE9" />

      {/* Empty content area - just background */}
      <View style={{ flex: 1 }} />

      {/* Bottom Navigation */}
      <BottomNavigation />
    </View>
  );
};
