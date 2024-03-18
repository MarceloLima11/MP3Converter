import stars from '../assets/bg_stars.png';

import Header from '../components/header/Header';
import './Home.style.css'

function Home() {
    return (
        <main>
            <Header />
            <div className='converter_container'>
                <h1>Faster <span>YouTube</span> to MP3 converter</h1>

                <p>Get and download YouTube videos for free</p>

                <div className='input_with_button'>
                    <input type='text' placeholder='https://www.youtube.com/watch?v=aTMtiakjpks' required />
                    <button></button>
                </div>
            </div>


            <div className='steps_container'>
                <h2>How to download YouTube video online?</h2>
                <div><img src={stars} alt="" /></div>
            </div>
        </main>
    );
}

export default Home;