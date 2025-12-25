import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { BottomNavigation } from '../components/BottomNavigation';

export const LeaderboardScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#E8EEE9" />
            <View style={styles.content}>
                <Text style={styles.title}>Leaderboard</Text>
                <Text style={styles.subtitle}>Player rankings will be displayed here</Text>
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
