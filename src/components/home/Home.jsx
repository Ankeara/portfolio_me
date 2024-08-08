import './home.css';
import Me from '../../assets/man.jpeg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} style={{ width: "108px", height: "108px" }} className="home__img" alt="Hout Ankeara" />
        <h1 className="home__name">Hout Ankeara</h1>
        <span className="home__education">I'm a Full-Stack developer</span>
      
      <HeaderSocials />

      <a href="#contact" className='btn'>Hire Me</a>
      <ScrollDown />
      </div>
      <Shapes />
    </section>
  );
}

export default Home;
