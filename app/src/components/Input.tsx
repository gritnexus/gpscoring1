import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface InputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  icon?: keyof typeof MaterialIcons.glyphMap;
  error?: string;
  editable?: boolean;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  icon,
  error,
  editable = true,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const containerStyle = [
    styles.container,
    error ? styles.containerError : isFocused ? styles.containerFocused : styles.containerDefault
  ];

  return (
    <View style={styles.wrapper}>
      <View style={containerStyle}>
        {icon && (
          <MaterialIcons
            name={icon}
            size={20}
            color={error ? '#EF4444' : isFocused ? '#2D7E3E' : '#9CA3AF'}
            style={styles.icon}
          />
        )}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          editable={editable}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 12,
    height: 52,
  },
  containerDefault: {
    borderColor: '#E5E7EB',
  },
  containerFocused: {
    borderColor: '#2D7E3E',
  },
  containerError: {
    borderColor: '#EF4444',
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#1F2937',
  },
  errorText: {
    color: '#EF4444',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
});
