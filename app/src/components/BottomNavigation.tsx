import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

export const BottomNavigation: React.FC = () => {
    const navigation = useNavigation<any>();
    const route = useRoute();

    const navigateTo = (screen: string) => {
        navigation.navigate(screen);
    };

    const isActive = (screenName: string) => route.name === screenName;

    const renderNavButton = (
        screenName: string,
        iconName: string,
        label: string,
        IconComponent: any = MaterialIcons,
        iconSize: number = 24
    ) => {
        const active = isActive(screenName);

        return (
            <TouchableOpacity
                style={styles.navItem}
                activeOpacity={0.7}
                onPress={() => navigateTo(screenName)}
            >
                <IconComponent
                    name={iconName}
                    size={active ? 28 : iconSize}
                    color={active ? "#6200EE" : "#000"}
                    style={styles.navIcon}
                />
                <Text style={active ? styles.activeLabel : styles.navLabel}>{label}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.bottomNavContainer}>
            <View style={styles.bottomNavBg}>
                {renderNavButton('Home', 'home', 'HOME')}
                {renderNavButton('EventInfo', 'event', 'EVENT INFO')}
                {renderNavButton('ScoreCard', 'golf-ball', 'SCORE CARD', FontAwesome5, 22)}
                {renderNavButton('Leaderboard', 'leaderboard', 'LEADERBOARD')}
                {renderNavButton('Chat', 'chat-bubble-outline', 'CHAT')}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    bottomNavContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 100,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: Platform.OS === 'ios' ? 30 : 24,
        backgroundColor: 'transparent',
    },
    bottomNavBg: {
        position: 'absolute',
        bottom: Platform.OS === 'ios' ? 30 : 24,
        left: 16,
        right: 16,
        height: 75,
        backgroundColor: '#FFFFFF',
        borderRadius: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 12,
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
    },
    navIcon: {
        marginBottom: 4,
    },
    navLabel: {
        fontSize: 8,
        color: '#000',
        fontWeight: '600',
        textAlign: 'center',
    },
    activeLabel: {
        fontSize: 8.5,
        color: '#6200EE',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
