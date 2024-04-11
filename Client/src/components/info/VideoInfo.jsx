import { useState } from 'react';
import './VideoInfo.style.css';

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

import stringService from '../../services/stringService';
import apiService from '../../services/apiService.js';

function VideoInfo({ name, thumb, sizes, link }) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState('');

    const handleSelect = async (e) => {
        setLoading(true);
        try {
            setData(await apiService.converterVideo(link, e.target.value));
        } catch (err) {
            setData({});
        } finally {
            setLoading(false);
        }
    }

    const handleDownload = async () => {
        if (!data) {
            console.error('Não há arquivo para download');
            return;
        }

        const linkElement = document.querySelector("#download_button");
        linkElement.href = data;
        linkElement.setAttribute('download', `${name}.mp3`);
    }

    return (
        <div id='videoInfo' className='video-info'>
            <img src={thumb} alt="Thumbnail" />
            <div className='videoInfo_container'>
                <p>{name}</p>

                <select className='custom_select' id="sizes" onChange={handleSelect}>
                    <option>Choose the format...</option>

                    <optgroup label='MP3 (Audio)'>
                        {sizes.map((size, index) => (
                            <option key={index} value={size}>
                                {`${size}k (${stringService.removeWhiteSpace(size)})`}
                            </option>
                        ))}
                    </optgroup>
                </select>

                {loading &&
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress color='inherit' />
                    </Box>
                }

                {!loading && data &&
                    <a id='download_button' onClick={handleDownload}>
                        Download
                    </a>
                }
            </div>
        </div>
    );
}

export default VideoInfo;
