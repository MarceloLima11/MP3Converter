import Header from '../components/header/Header';
import './Home.style.css';
import Footer from '../components/footer/Footer';
import StepsSection from '../components/step/StepsSection';
import ConverterSection from '../components/converter/ConverterSection';

function Home() {
    return (
        <main>
            <Header />

            <ConverterSection />

            <StepsSection />

            <Footer />
        </main>
    );
}

export default Home;