import axios from 'axios';

const baseUrl = 'https://localhost:7213/api';

const ApiService = {
    async getVideoInfo(videoUrl) {
        try {
            const response = await axios.get(`${baseUrl}/Video`, {
                params: {
                    videoLink: videoUrl
                }
            });
            return response.data;
        } catch (err) {
            console.error("ERROR: ", err.response.data);
            throw err;
        }
    },

    async converterVideo(videoUrl, size) {
        try {
            const response = await axios.get(`${baseUrl}/Converter`, {
                params: {
                    videoUrl: videoUrl,
                    Size: size
                }
            });
            return response.data;
        } catch (err) {
            console.error("ERROR: ", err.response.data);
            throw err;
        }
    }
};

export default ApiService;