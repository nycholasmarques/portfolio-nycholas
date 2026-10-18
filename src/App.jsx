import Navbar from './components/Navbar'
import About from './components/About'
import Works from './components/Works'
import Learning from './components/Learning'
import BubbleAnimation from './components/BubbleAnimation'
import { HashLink } from 'react-router-hash-link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiArrowRight, FiArrowDown } from 'react-icons/fi'
import { useReveal } from './hooks/useReveal'

import './styles/components/app.scss'

const LINKEDIN = 'https://www.linkedin.com/in/nycholas-marques-680411245/'
const GITHUB = 'https://github.com/nycholasmarques'

function App() {
  useReveal()

  const actualYear = new Date().getFullYear()

  return (
    <div id="portfolio">
      <Navbar />

      <section className="hero">
        <BubbleAnimation />

        <div className="container hero-content">
          <div className="hero-text">
            <span className="hero-greeting" data-reveal>{'// olá, eu sou'}</span>
            <h1 data-reveal style={{ '--reveal-delay': '0.08s' }}>
              Nycholas <span className="hero-highlight">Marques</span>
            </h1>
            <p className="hero-role" data-reveal style={{ '--reveal-delay': '0.16s' }}>
              Desenvolvedor web
            </p>
            <p className="hero-tagline" data-reveal style={{ '--reveal-delay': '0.24s' }}>
              Construo aplicações web do backend ao frontend, com foco em código limpo e boas experiências.
            </p>

            <div className="hero-actions" data-reveal style={{ '--reveal-delay': '0.32s' }}>
              <HashLink smooth to="/#section-works" className="btn btn--primary">
                Ver projetos <FiArrowRight />
              </HashLink>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="btn btn--ghost">
                Contato
              </a>
              <ul className="rs-links">
                <li>
                  <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="hero-avatar" data-reveal style={{ '--reveal-delay': '0.2s' }}>
            <div className="hero-avatar_ring">
              <img src="https://avatars.githubusercontent.com/u/110244475?v=4" alt="Foto de Nycholas Marques" />
            </div>
          </div>
        </div>

        <HashLink smooth to="/#section-about" className="scroll-down" aria-label="Rolar para a seção Sobre">
          <span>Role para baixo</span>
          <FiArrowDown className="scroll-icon" />
        </HashLink>
      </section>

      <About />
      <Learning />
      <Works />
      <footer className="footer">
        <div className="container">
          <div className="footer-cta" data-reveal>
            <h2>
              Tem um projeto ou uma ideia?
              <br />
              <span className="hero-highlight">Bora tirar do papel.</span>
            </h2>
            <p>
              Estou aberto a oportunidades, parcerias e boas conversas sobre tecnologia.
            </p>
            <div className="footer-actions">
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="btn btn--primary">
                <FaLinkedin /> Falar no LinkedIn
              </a>
              <a href={GITHUB} target="_blank" rel="noreferrer" className="btn btn--ghost">
                <FaGithub /> Ver meu GitHub
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <HashLink smooth to="/#portfolio" className="navbar-logo">
              <span>N</span>YCHOLAS<span>.</span>
            </HashLink>

            <ul className="footer-nav">
              <li><HashLink smooth to="/#section-about">Sobre</HashLink></li>
              <li><HashLink smooth to="/#section-learning">Estudos</HashLink></li>
              <li><HashLink smooth to="/#section-works">Portfolio</HashLink></li>
            </ul>

            <p className="footer-copy">
              {actualYear} © Desenvolvido por{' '}
              <a href={GITHUB} target="_blank" rel="noreferrer">Nycholas Marques</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
