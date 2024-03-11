import logo from '../../assets/logo.png';

import './Header.style.css';

function Header() {
    return (
        <header>
            <a href="#">
                <img src={logo} alt="Groove Grab logo" />
            </a>

            <a href="">Contact me</a>
        </header>
    );
}

export default Header;