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
import { StyleSheet } from 'react-native';
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
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subtitle}>Please Sign in to continue.</Text>

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

          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          <View style={styles.buttonRow}>
            <Button
              title="Login"
              onPress={handleLogin}
              loading={isLoading}
              style={styles.loginButton}
            />

            <TouchableOpacity
              style={styles.qrButton}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 24,
    paddingTop: 80,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logo: {
    width: '150%',
    height: 230,
  },
  formContainer: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 24,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: '#111827',
    fontSize: 14,
    fontWeight: '500',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 32,
  },
  loginButton: {
    flex: 1,
  },
  qrButton: {
    width: 52,
    height: 52,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
