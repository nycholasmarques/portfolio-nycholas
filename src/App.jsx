import Navbar from './components/Navbar'
import About from './components/About'
import Works from './components/Works'
import BubbleAnimation from './components/BubbleAnimation'
import { HashLink } from 'react-router-hash-link';



import './styles/components/app.scss'
import { FaGithub, FaLinkedin, FaAngleDoubleDown} from 'react-icons/fa'
import Learning from './components/Learning'

function App() {

  const actualYear = new Date().getFullYear();

  return (
    <div id="portfolio">
      <Navbar />
      <section className="flx-home">
      <BubbleAnimation />
        <div id="wrapper-home">
          <img src="https://avatars.githubusercontent.com/u/110244475?v=4" alt="Nycholas"/>
          <h2>Nycholas Marques</h2>
          <p>Desenvolvedor web</p>
          <ul className="rs-links">
            <li><a href="https://www.linkedin.com/in/nycholas-marques-680411245/" target='_blank' rel='noreferrer'>
              <FaLinkedin />
            </a></li>
            <li><a href="https://github.com/nycholasmarques" target='_blank' rel='noreferrer'>
              <FaGithub />
            </a></li>
          </ul>
        </div>
        <HashLink smooth to='/#section-about' id="scroll-down">
            <p>Clique aqui</p>
              <FaAngleDoubleDown className='scroll-icon'/>
        </HashLink>
      </section>
      <About/>
      <Learning />
      <Works />
      <footer>
      {actualYear} © Desenvolvido por <a href="https://github.com/nycholasmarques" target='_blank' rel='noreferrer'>Nycholas Marques</a>
      </footer>
    </div>
  )
}

export default App
