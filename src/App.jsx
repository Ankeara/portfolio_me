import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';  // Corrected path
import About from './components/about/About';
import Service from './components/services/Service';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Pricing from './components/pricing/Pricing';
import Blog from './components/blog/Blog';
import Haa from './components/haa';
import Contact from './components/contact/Contact';
import Testimonial from './components/testimonials/Testimonial';

function App() {
  return (
      <>
      <Sidebar />
      <div className="main">
        <Home />
        <About />
        <Service />
        <Resume />
        <Portfolio />
        <Pricing />
        <Testimonial />
        <Blog />
        <Contact />
        <App />
      </div>
      </>
  );
}

export default App;
