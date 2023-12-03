import axios from 'axios';

const BASE_URL = 'backend-url.com'; // Replace with backend URL

const SongService = {
    getSong: async () => {
        try {
            const response = await axios.get(`${BASE_URL}/api/song`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default SongService;