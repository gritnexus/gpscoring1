import React from 'react';
import { View, Text } from 'react-native';
import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/Button';
import { homeStyles } from '../styles/homeStyles';

export const HomeScreen: React.FC = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.card}>
        <Text style={homeStyles.title}>Welcome!</Text>
        
        {user && (
          <View style={homeStyles.userInfo}>
            <Text style={homeStyles.userName}>{user.name}</Text>
            <Text style={homeStyles.userEmail}>{user.email}</Text>
          </View>
        )}

        <Button
          title="Logout"
          onPress={handleLogout}
          variant="outline"
          style={homeStyles.logoutButton}
        />
      </View>
    </View>
  );
};
