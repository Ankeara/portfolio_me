import './about.css';
import Image from '../../assets/man.jpeg';
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className='about container section' id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} style={{ width: "108px", height: "108px" }} alt="Hout Ankeara" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">I am Hout Ankeara, a web developer from Banteay Meanchey, Cambodia. I have rich experience in website design, building, and customization.</p>
            <a href="#" className="btn">Download CV</a>
          </div>
          
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">90%</span>
              </div>
              <div className="skills__bar">
                <span className='skills__percentage development'></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX design</h3>
                <span className="skills__number">60%</span>
              </div>
              <div className="skills__bar">
                <span className='skills__percentage ui__design'></span>
              </div>
            </div>

             <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Laravel developer</h3>
                <span className="skills__number">55%</span>
              </div>
              <div className="skills__bar">
                <span className='skills__percentage laravel'></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
}

export default About;
