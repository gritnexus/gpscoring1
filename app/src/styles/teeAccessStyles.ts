import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const teeAccessStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F4F6',
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingTop: 24,
        paddingBottom: 32,
        alignItems: 'center',
    },
    imageContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    illustration: {
        width: '100%',
        height: 180,
        maxWidth: 300,
    },
    titleContainer: {
        width: '100%',
        marginBottom: 20,
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 14,
        color: '#4B5563',
    },
    formContainer: {
        width: '100%',
        gap: 16,
    },
    button: {
        marginTop: 8,
        borderRadius: 12,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 12,
        gap: 4,
    },
    footerText: {
        color: '#6B7280',
        fontSize: 14,
    },
    signInText: {
        color: '#2D7E3E',
        fontSize: 14,
        fontWeight: '600',
    },
    // Dropdown styles
    dropdownButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        paddingHorizontal: 12,
        height: 52,
    },
    dropdownButtonText: {
        flex: 1,
        fontSize: 16,
        color: '#1F2937',
    },
    dropdownPlaceholder: {
        color: '#9CA3AF',
    },
    dropdownIcon: {
        marginRight: 8,
    },
    dropdownArrow: {
        marginLeft: 8,
    },
    // Modal styles
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    modalContent: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        width: '100%',
        maxHeight: '80%',
        padding: 24,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: 24,
    },
    optionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    optionText: {
        fontSize: 16,
        color: '#374151',
        marginLeft: 12,
    },
    radioButton: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#D1D5DB',
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioButtonSelected: {
        borderColor: '#2D7E3E',
    },
    radioButtonInner: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#2D7E3E',
    },
});
