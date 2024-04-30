import '../styles/components/navbar.scss'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { HashLink } from 'react-router-hash-link';

function Navbar() {


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar'>
        <HashLink smooth to='#portfolio'>
          <h1 data-last-letter="."><span>N</span>YCHOLAS</h1>
        </HashLink>
        <ul className="nav-list">
            <li><HashLink smooth to='/#section-about'>Sobre</HashLink></li>
            <li><HashLink smooth to='/#section-learning'>Estudos</HashLink></li>
            <li><HashLink smooth to='/#section-works'>Porfolio</HashLink></li>
            <li><a href="https://www.linkedin.com/in/nycholas-marques-680411245/" id='btn-ctt'>Contato</a></li>
        </ul>

        <div className="navbar-responsive">
          <div onClick={toggleMenu}>
            <FaBars className='hambur'/>
          </div>
          <ul className={`dropdown_menu ${isOpen ? 'open' : ''}`}>
          <li><HashLink smooth to='/#section-about'>Sobre</HashLink></li>
            <li><HashLink smooth to='/#section-learning'>Estudos</HashLink></li>
            <li><HashLink smooth to='/#section-works'>Porfolio</HashLink></li>
            <li><a href="https://www.linkedin.com/in/nycholas-marques-680411245/" id='btn-ctt'>Contato</a></li>
          </ul>
          
        </div>
    </nav>
  )
}

export default Navbar