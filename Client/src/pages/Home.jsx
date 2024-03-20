import copy from '../assets/copy.svg';
import click from '../assets/click.svg';
import donwload from '../assets/download.svg';

import logo from '../assets/logo.png'


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
                <div className='cards_container'>
                    <div className='card'>
                        <img src={copy} />
                        <h3>1º Step:</h3>
                        <p>Copy the URL of the YouTube video you need to download.</p>
                    </div>

                    <div className='card'>
                        <img src={click} />
                        <h3>2º Step:</h3>
                        <p>Paste the URL in the Search field and click the "=>" button to start the conversion process.
                        </p>
                    </div>

                    <div className='card'>
                        <img src={donwload} />
                        <h3>3º Step:</h3>
                        <p>The file will be downloaded by the browser with the best mp3 quality.</p>
                    </div>
                </div>
            </div>

            <footer className='footer'>
                <img src={logo} />
                <ul className='links'>
                    <li><a href="#">Privacy Policy</a></li>

                    <li><a href="#">Terms of Use</a></li>

                    <li><a href="#">Contact</a></li>
                </ul>
            </footer>
        </main>
    );
}

export default Home;