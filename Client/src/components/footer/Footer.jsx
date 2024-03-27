import './Footer.style.css';
import logo from '../../assets/logo.png';

function Footer() {
    return (
        <footer className='footer'>
            <img src={logo} />
            <ul className='links'>
                <li><a href="#">Privacy Policy</a></li>
                <li className='sep'>|</li>
                <li><a href="#">Terms of Use</a></li>
                <li className='sep'>|</li>
                <li><a href="#">Contact</a></li>
            </ul>
        </footer>
    );
}

export default Footer;