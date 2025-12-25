import axios from 'axios';

const API_BASE_URL = 'http://192.168.0.104:5000/api';

export interface TeeAccessData {
    fullName: string;
    phoneNumber: string;
    gender: string;
    handicap: string;
}

export const teeAccessService = {
    submitTeeAccess: async (data: TeeAccessData) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/tee-access`, data);
            return response.data;
        } catch (error) {
            console.error('Tee Access Error:', error);
            throw error;
        }
    }
};
