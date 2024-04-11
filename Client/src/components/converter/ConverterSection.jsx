import { useState } from 'react';
import './ConverterSection.style.css';

import CircularProgress from '@mui/material/CircularProgress';

import apiService from '../../services/apiService.js';
import VideoInfo from '../info/VideoInfo.jsx';
import Error from '../error/Error.jsx';

function ConverterSection() {
    const [loading, setLoading] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');
    const [data, setData] = useState({});
    const [error, setError] = useState('');

    const handleVideoInfo = async () => {
        if (videoUrl.trim() === '') {
            setError("Enter a valid URL!");
            return;
        }

        setLoading(true);
        try {
            setError('');
            setData(await apiService.getVideoInfo(videoUrl));
        } catch (err) {
            setData({});
            setError(err.response?.data || 'An error occurred');
        }
        setLoading(false);
    }

    return (
        <div className='converter_container'>
            <h1>Faster <span>YouTube</span> to MP3 converter</h1>

            <p>Get and download YouTube videos for free</p>

            <div className='input_with_button'>
                <input
                    type='text'
                    onChange={(e) => setVideoUrl(e.target.value)}
                    value={videoUrl}
                    placeholder='https://www.youtube.com/watch?v=zXHvpBd3qNc'
                    required
                    disabled={loading}
                />
                <button onClick={handleVideoInfo} disabled={loading}></button>

            </div>

            {loading &&
                <div id='loading_info'>
                    <CircularProgress />
                </div>
            }

            {!loading && !error && data.name && data.thumb &&
                <VideoInfo {...data} link={videoUrl} />
            }

            {error && <Error message={error} />}
        </div>
    );
}

export default ConverterSection;