import { useState } from 'react';
import './ConverterSection.style.css';

import apiService from '../../services/apiService.js';
import VideoInfo from '../info/VideoInfo.jsx'

function ConverterSection() {
    const [loading, setLoading] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');
    const [data, setData] = useState({});
    const [err, setErr] = useState(null);

    const handleVideoInfo = async () => {
        setLoading(true);
        try {
            setErr(null);
            setData(await apiService.getVideoInfo(videoUrl));
        } catch (err) {
            setData({});
            setErr(err.response.data);
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
                    required />
                <button onClick={handleVideoInfo} disabled={loading}></button>

            </div>

            {data.name && data.thumb &&
                (
                    <VideoInfo {...data} link={videoUrl} />
                )}
            {err && <div id="error"><b>{err}</b></div>}
        </div>
    );
}

export default ConverterSection;