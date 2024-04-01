import { useState } from 'react';
import './ConverterSection.style.css';

import apiService from '../../services/apiService.js';

function ConverterSection() {
    const [loading, setLoading] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');
    const [data, setData] = useState({});

    const handleVideoInfo = async () => {
        setLoading(true);
        try {
            setData(await apiService.getVideoInfo(videoUrl));
        } catch (error) {
            console.error('Erro ao converter:', error);
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

            {data.name && <p>{data.name}</p>}
            {data.name && <img src={data.thumb}></img>}
        </div>
    );
}

export default ConverterSection;