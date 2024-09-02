import '../styles/components/about.scss';
import { GiBurningBook } from 'react-icons/gi';
import { BsCodeSquare, BsClockHistory } from 'react-icons/bs';
import { SiTailwindcss, SiTypescript, SiMysql, SiReact, SiPhp } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function About() {

  const el = useRef()
  const tl = useRef()

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)
    gsap.to('#title-section', {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '#title-section',
        //markers: true,
        start: 'top 800px',
        end: 'bottom 700px',
        scrub: true,
      }
    })

    return () => {
      gsap.killTweensOf('#title-section')
    }
  }, [])

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)
    gsap.to('.profile', {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.flx-about',
        //markers: true,
        start: 'top 700px',
        end: 'bottom 900px',
        scrub: true,

      }
    })

    return () => {
      gsap.killTweensOf('.profile')
    }
  }, [])

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to('.about-details', {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.flx-about',
        start: 'top 700px',
        end: 'bottom 500px',
        scrub: true,
      }
    })

    return () => {
      gsap.killTweensOf('.about-details')
    }
  }, [])

  function loadingCv() {
    window.alert('Não há curriculo no momento!')
  }


  return (
    <section className="flx-second_part">
      <div className="about" id='section-about'>
        <h2 id='title-section'>Sobre mim</h2>
        <div className="flx-about">
          <img src="https://avatars.githubusercontent.com/u/110244475?v=4" alt="Nycholas" className='profile' />
          <div className="about-details">
            <div className='about-text'>
              <p>Há varios anos apaixonado por tecnologia, entrei para a área de desenvolvimento web. Atualmente estou cursando ADS, e me especializando na área, não só para o âmbito profissional como para o pessoal. Buscando sempre ter e proporcionar boas experiências nos meus serviços.</p>
              <div>
                <div className='icons-container'>
                  <div className='icons-container_item' id='item-1'>
                    <SiTailwindcss />
                    <div>
                      <p>Laravel</p>
                    </div>
                  </div>
                  <div className='icons-container_item' id='item-2'>
                    <SiPhp />
                    <div>
                      <p>PHP</p>
                    </div>
                  </div>
                  <div className='icons-container_item' id='item-3'>
                    <SiTailwindcss />
                    <div>
                      <p>Tailwind</p>
                    </div>
                  </div>
                  <div className='icons-container_item' id='item-4'>
                    <SiTypescript />
                    <div>
                      <p>Typescript</p>
                    </div>
                  </div>
                  <div className='icons-container_item' id='item-5'>
                    <SiMysql />
                    <div>
                      <p>Mysql</p>
                    </div>
                  </div>
                  <div className='icons-container_item' id='item-6'>
                    <SiReact />
                    <div>
                      <p>React</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='about-btn'>
                <button id='btn' onClick={loadingCv}>Download CV</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About