
import Navbar from './Navbar';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Contract from './Contract';
import Banner from './Banner';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Project></Project>
            <Contract></Contract>
            <Footer></Footer>
        </div>
    );
};

export default Home;