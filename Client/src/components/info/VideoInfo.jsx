import { useState } from 'react';
import './VideoInfo.style.css';

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

import stringService from '../../services/stringService';
import apiService from '../../services/apiService.js';

function VideoInfo({ name, thumb, sizes, link }) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});

    const handleSelect = async (e) => {
        setLoading(true);
        try {
            setData(await apiService.converterVideo(link, e.target.value));
        } catch (err) {
            setData({});
        }
        setLoading(false);
    }

    const handleDownload = async () => {
        if (data && data.url) {
            const link = document.querySelector("#download_button");
            link.href = data.url;
            link.setAttribute('download', `${name}.mp3`);
        } else {
            console.error('Não há arquivo para download');
        }
    }

    return (
        <div id='videoInfo'>
            <img src={thumb}></img>
            <div className='videoInfo_container'>
                <p>{name}</p>

                <select className='custom_select' id="sizes" onChange={handleSelect}>
                    <option>Choose the format...</option>

                    <optgroup label='MP3 (Audio)'>
                        <option value={sizes[0]}>320k
                            ({stringService.removeWhiteSpace(sizes[0])})</option>
                        <option value={sizes[1]}>256k
                            ({stringService.removeWhiteSpace(sizes[1])})</option>
                        <option value={sizes[2]}>192k
                            ({stringService.removeWhiteSpace(sizes[2])})</option>
                        <option value={sizes[3]}>128k
                            ({stringService.removeWhiteSpace(sizes[3])})</option>
                        <option value={sizes[4]}>64k
                            ({stringService.removeWhiteSpace(sizes[4])})</option>
                    </optgroup>
                </select>

                {loading &&

                    <Box sx={{ width: '100%' }}>
                        <LinearProgress color='inherit' />
                    </ Box>
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