import Header from '../components/header/Header';
import './Home.style.css'

function Home() {
    return (
        <main>
            <Header />
            <div className='converter_container'>
                <h1>Faster <span>YouTube</span> to MP3 converter</h1>

                <p>Get and download YouTube videos for free</p>

                <input type='text' placeholder='https://www.youtube.com/watch?v=aTMtiakjpks' required />
                <button></button>
            </div>
        </main>
    );
}

export default Home;