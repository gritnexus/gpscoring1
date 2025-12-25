import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface SnackbarProps {
    visible: boolean;
    message: string;
    type?: 'success' | 'error' | 'info';
    onDismiss: () => void;
    duration?: number;
}

export const Snackbar: React.FC<SnackbarProps> = ({
    visible,
    message,
    type = 'info',
    onDismiss,
    duration = 3000,
}) => {
    const opacity = useRef(new Animated.Value(0)).current;
    const translateY = useRef(new Animated.Value(50)).current;

    useEffect(() => {
        if (visible) {
            Animated.parallel([
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.spring(translateY, {
                    toValue: 0,
                    useNativeDriver: true,
                    speed: 12,
                    bounciness: 5,
                }),
            ]).start();

            if (duration > 0) {
                const timer = setTimeout(() => {
                    hide();
                }, duration);
                return () => clearTimeout(timer);
            }
        } else {
            hide();
        }
    }, [visible]);

    const hide = () => {
        Animated.parallel([
            Animated.timing(opacity, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(translateY, {
                toValue: 50,
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start(() => {
            onDismiss();
        });
    };

    if (!visible && (opacity as any)._value === 0) return null;

    const getBackgroundColor = () => {
        switch (type) {
            case 'success':
                return '#2D7E3E'; // Golf Green
            case 'error':
                return '#DC2626'; // Red
            default:
                return '#374151'; // Gray
        }
    };

    const getIcon = () => {
        switch (type) {
            case 'success':
                return 'check-circle';
            case 'error':
                return 'error';
            default:
                return 'info';
        }
    };

    return (
        <Animated.View
            style={[
                styles.container,
                {
                    opacity,
                    transform: [{ translateY }],
                    backgroundColor: getBackgroundColor(),
                },
            ]}
        >
            <View style={styles.content}>
                <MaterialIcons name={getIcon()} size={24} color="#FFF" style={styles.icon} />
                <Text style={styles.message}>{message}</Text>
            </View>
            <TouchableOpacity onPress={hide} style={styles.closeButton}>
                <MaterialIcons name="close" size={20} color="#FFF" />
            </TouchableOpacity>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 24,
        left: 20,
        right: 20,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
        zIndex: 9999,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginRight: 8,
    },
    icon: {
        marginRight: 12,
    },
    message: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: '500',
        flex: 1,
    },
    closeButton: {
        padding: 4,
    },
});
