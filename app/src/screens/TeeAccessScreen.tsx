import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    Modal,
    FlatList,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { teeAccessStyles } from '../styles/teeAccessStyles';
import { MaterialIcons } from '@expo/vector-icons';

interface TeeAccessScreenProps {
    navigation: any;
}

const HANDICAP_OPTIONS = [
    '0 Professional',
    '1 - 9 Elite',
    '10 - 19 Seeker',
    '20 - 29 Green Hunter',
    '30+ Rookie',
];

const GENDER_OPTIONS = ['Male', 'Female'];

export const TeeAccessScreen: React.FC<TeeAccessScreenProps> = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('');
    const [handicap, setHandicap] = useState('');

    const [showGenderModal, setShowGenderModal] = useState(false);
    const [showHandicapModal, setShowHandicapModal] = useState(false);

    const handleTeeOff = () => {
        // Handle form submission logic here
        console.log({ fullName, phoneNumber, gender, handicap });
    };

    const renderOption = (item: string, selected: string, onSelect: (val: string) => void) => (
        <TouchableOpacity
            style={teeAccessStyles.optionItem}
            onPress={() => onSelect(item)}
        >
            <View style={[
                teeAccessStyles.radioButton,
                selected === item && teeAccessStyles.radioButtonSelected
            ]}>
                {selected === item && <View style={teeAccessStyles.radioButtonInner} />}
            </View>
            <Text style={teeAccessStyles.optionText}>{item}</Text>
        </TouchableOpacity>
    );

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={teeAccessStyles.container}
        >
            <ScrollView contentContainerStyle={teeAccessStyles.scrollContent}>
                <View style={teeAccessStyles.imageContainer}>
                    {/* Using a placeholder or existing logo since I don't have the golf illustration */}
                    <Image
                        source={require('../../assets/logo.png')}
                        style={teeAccessStyles.illustration}
                        resizeMode="contain"
                    />
                </View>

                <View style={teeAccessStyles.titleContainer}>
                    <Text style={teeAccessStyles.title}>Tee Access</Text>
                    <Text style={teeAccessStyles.subtitle}>Please fill out the form to continue.</Text>
                </View>

                <View style={teeAccessStyles.formContainer}>
                    <Input
                        placeholder="Full name"
                        value={fullName}
                        onChangeText={setFullName}
                        icon="person-outline"
                        containerStyle={{ marginBottom: 0 }}
                    />

                    <Input
                        placeholder="Enter your number"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                        keyboardType="phone-pad"
                        icon="phone"
                        containerStyle={{ marginBottom: 0 }}
                    />

                    {/* Gender Dropdown */}
                    <TouchableOpacity
                        style={teeAccessStyles.dropdownButton}
                        onPress={() => setShowGenderModal(true)}
                    >
                        <MaterialIcons name="face" size={20} color={gender ? "#2D7E3E" : "#9CA3AF"} style={teeAccessStyles.dropdownIcon} />
                        <Text style={[
                            teeAccessStyles.dropdownButtonText,
                            !gender && teeAccessStyles.dropdownPlaceholder
                        ]}>
                            {gender || 'Select Gender'}
                        </Text>
                        <MaterialIcons name="keyboard-arrow-down" size={24} color="#9CA3AF" style={teeAccessStyles.dropdownArrow} />
                    </TouchableOpacity>

                    {/* Handicap Dropdown */}
                    <TouchableOpacity
                        style={teeAccessStyles.dropdownButton}
                        onPress={() => setShowHandicapModal(true)}
                    >
                        <MaterialIcons name="flag" size={20} color={handicap ? "#2D7E3E" : "#9CA3AF"} style={teeAccessStyles.dropdownIcon} />
                        <Text style={[
                            teeAccessStyles.dropdownButtonText,
                            !handicap && teeAccessStyles.dropdownPlaceholder
                        ]}>
                            {handicap || 'Handicap Range'}
                        </Text>
                        <MaterialIcons name="keyboard-arrow-down" size={24} color="#9CA3AF" style={teeAccessStyles.dropdownArrow} />
                    </TouchableOpacity>

                    <Button
                        title="Tee Off"
                        onPress={handleTeeOff}
                        style={teeAccessStyles.button}
                    />
                </View>

                <View style={teeAccessStyles.footer}>
                    <Text style={teeAccessStyles.footerText}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={teeAccessStyles.signInText}>Sign in</Text>
                    </TouchableOpacity>
                </View>

                {/* Gender Modal */}
                <Modal
                    visible={showGenderModal}
                    transparent
                    statusBarTranslucent
                    animationType="fade"
                    onRequestClose={() => setShowGenderModal(false)}
                >
                    <TouchableOpacity
                        style={teeAccessStyles.modalOverlay}
                        activeOpacity={1}
                        onPress={() => setShowGenderModal(false)}
                    >
                        <View style={teeAccessStyles.modalContent}>
                            <Text style={teeAccessStyles.modalTitle}>Select Gender</Text>
                            {GENDER_OPTIONS.map((item) => (
                                <View key={item}>
                                    {renderOption(item, gender, (val) => {
                                        setGender(val);
                                        setShowGenderModal(false);
                                    })}
                                </View>
                            ))}
                        </View>
                    </TouchableOpacity>
                </Modal>

                {/* Handicap Modal */}
                <Modal
                    visible={showHandicapModal}
                    transparent
                    statusBarTranslucent
                    animationType="fade"
                    onRequestClose={() => setShowHandicapModal(false)}
                >
                    <TouchableOpacity
                        style={teeAccessStyles.modalOverlay}
                        activeOpacity={1}
                        onPress={() => setShowHandicapModal(false)}
                    >
                        <View style={teeAccessStyles.modalContent}>
                            <Text style={teeAccessStyles.modalTitle}>Select your Handicap Range</Text>
                            <FlatList
                                data={HANDICAP_OPTIONS}
                                keyExtractor={(item) => item}
                                renderItem={({ item }) => renderOption(item, handicap, (val) => {
                                    setHandicap(val);
                                    setShowHandicapModal(false);
                                })}
                            />
                        </View>
                    </TouchableOpacity>
                </Modal>

            </ScrollView>
        </KeyboardAvoidingView>
    );
};
