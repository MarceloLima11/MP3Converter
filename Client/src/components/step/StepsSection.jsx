import './StepsSection.style.css';
import copy from '../../assets/copy.svg';
import click from '../../assets/click.svg';
import download from '../../assets/download.svg';

function StepsSection() {
    return (
        <div className='steps_container'>
            <h2>How to download YouTube video online?</h2>
            <div className='cards_container'>
                <div className='card'>
                    <img src={copy} alt="Copy icon" />
                    <h3>1º Step:</h3>
                    <p>Copy the URL of the YouTube video you need to download.</p>
                </div>

                <div className='card'>
                    <img src={click} alt="Click icon" />
                    <h3>2º Step:</h3>
                    <p>Paste the URL in the Search field and click the "=>" button to start the conversion process.
                    </p>
                </div>

                <div className='card'>
                    <img src={download} alt="Download icon" />
                    <h3>3º Step:</h3>
                    <p>The file will be downloaded by the browser with the best mp3 quality.</p>
                </div>
            </div>
        </div>
    );
}

export default StepsSection;