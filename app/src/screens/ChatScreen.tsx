import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { BottomNavigation } from '../components/BottomNavigation';

export const ChatScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#E8EEE9" />
            <View style={styles.content}>
                <Text style={styles.title}>Chat</Text>
                <Text style={styles.subtitle}>Chat messages will be displayed here</Text>
            </View>
            <BottomNavigation />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EEE9',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        paddingBottom: 120,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1F2937',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#6B7280',
        textAlign: 'center',
    },
});
