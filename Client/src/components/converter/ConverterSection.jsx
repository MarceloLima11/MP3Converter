import './ConverterSection.style.css';

function ConverterSection() {
    return (
        <div className='converter_container'>
            <h1>Faster <span>YouTube</span> to MP3 converter</h1>

            <p>Get and download YouTube videos for free</p>

            <div className='input_with_button'>
                <input type='text' placeholder='https://www.youtube.com/watch?v=zXHvpBd3qNc' required />
                <button></button>
            </div>
        </div>
    );
}

export default ConverterSection;