import '../styles/components/navbar.scss'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { HashLink } from 'react-router-hash-link'

const links = [
  { to: '/#section-about', label: 'Sobre' },
  { to: '/#section-learning', label: 'Estudos' },
  { to: '/#section-works', label: 'Portfolio' },
]

const LINKEDIN = 'https://www.linkedin.com/in/nycholas-marques-680411245/'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className={`navbar ${isOpen ? 'navbar--open' : ''}`}>
      <div className="container navbar-inner">
        <HashLink smooth to="/#portfolio" className="navbar-logo" onClick={closeMenu}>
          <span>N</span>YCHOLAS<span>.</span>
        </HashLink>

        <ul className="nav-list">
          {links.map((link) => (
            <li key={link.to}>
              <HashLink smooth to={link.to}>{link.label}</HashLink>
            </li>
          ))}
          <li>
            <a target="_blank" rel="noreferrer" href={LINKEDIN} className="btn btn--primary btn-ctt">
              Contato
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="hambur"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <ul id="mobile-menu" className={`dropdown_menu ${isOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <li key={link.to}>
            <HashLink smooth to={link.to} onClick={closeMenu}>{link.label}</HashLink>
          </li>
        ))}
        <li>
          <a target="_blank" rel="noreferrer" href={LINKEDIN} className="btn btn--primary" onClick={closeMenu}>
            Contato
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
