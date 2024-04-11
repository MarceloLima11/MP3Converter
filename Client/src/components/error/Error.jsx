import './Error.style.css';

function Error({ message }) {
    return (
        <div id="error"><b>{message}</b></div>
    );
}

export default Error;