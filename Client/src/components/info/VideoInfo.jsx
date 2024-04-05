import { useState } from 'react';
import './VideoInfo.style.css';

import stringService from '../../services/stringService';
import apiService from '../../services/apiService.js';

function VideoInfo({ name, thumb, sizes, link }) {
    const [data, setData] = useState({});

    const handleSelect = async (e) => {
        try {
            setData(await apiService.converterVideo(link, e.target.value));
        } catch (err) {
            setData({});
        }
    }

    return (
        <div id='videoInfo'><img src={thumb}></img>
            <div>
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
            </div>
        </div>
    );
}

export default VideoInfo;