import logo from '../../assets/logo.png';

import './Header.style.css';

function Header() {
    return (
        <header>
            <a href="#">
                <img src={logo} alt="Groove Grab logo" />
            </a>

            <a className="contact" href="https://api.whatsapp.com/send?0=pt_BR&phone=13997372895">Contact me</a>
        </header>
    );
}

export default Header;