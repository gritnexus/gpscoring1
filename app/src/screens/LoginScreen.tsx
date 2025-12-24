import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';

import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { validateEmail, validateRequired } from '../utils/validators';
import { authService } from '../services/authService';
import { useAuth } from '../hooks/useAuth';
import { MaterialIcons } from '@expo/vector-icons';
import { loginStyles } from '../styles/loginStyles';

interface LoginScreenProps {
  navigation: any;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleLogin = async () => {
    setEmailError('');
    setPasswordError('');

    let hasError = false;

    if (!validateRequired(email)) {
      setEmailError('Email is required');
      hasError = true;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email');
      hasError = true;
    }

    if (!validateRequired(password)) {
      setPasswordError('Password is required');
      hasError = true;
    }

    if (hasError) return;

    setIsLoading(true);

    try {
      const response = await authService.login({ email, password });
      await login(response.token, response.user);
    } catch (error: any) {
      Alert.alert(
        'Login Failed',
        error.response?.data?.message || 'Invalid email or password. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleQRScan = () => {
    navigation.navigate('QRScanner');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={loginStyles.container}
    >
      <ScrollView
        contentContainerStyle={loginStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={loginStyles.logoContainer}>
          <Image
            source={require('../../assets/logo.png')}
            style={loginStyles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={loginStyles.formContainer}>
          <Text style={loginStyles.title}>Login</Text>
          <Text style={loginStyles.subtitle}>Please Sign in to continue.</Text>

          <Input
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            icon="email"
            error={emailError}
          />

          <Input
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            icon="lock"
            error={passwordError}
          />

          <TouchableOpacity style={loginStyles.forgotPassword}>
            <Text style={loginStyles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          <View style={loginStyles.buttonRow}>
            <Button
              title="Login"
              onPress={handleLogin}
              loading={isLoading}
              style={loginStyles.loginButton}
            />

            <TouchableOpacity
              style={loginStyles.qrButton}
              onPress={handleQRScan}
              disabled={isLoading}
            >
              <MaterialIcons name="qr-code-scanner" size={24} color="#2D7E3E" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
