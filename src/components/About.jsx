import '../styles/components/about.scss'
import { GiBurningBook } from 'react-icons/gi'
import { BsCodeSquare, BsClockHistory } from 'react-icons/bs'
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function About () {

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

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // eslint-disable-next-line no-unused-vars
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: '.icons-container_item',
          start: 'top 900x',
          end: 'bottom 700px',
          scrub: true,
        }
      })
      .fromTo('#item-1', {
        opacity: 0,
        y: 120,
      }, {
        opacity: 1,
        y: 0
      })
      .fromTo('#item-2', {
        opacity: 0,
        y: 120,
      }, {
        opacity: 1,
        y: 0
      })
      .fromTo('#item-3', {
        opacity: 0,
        y: 120,
      }, {
        opacity: 1,
        y: 0
      })
      .fromTo('#item-4', {
        opacity: 0,
        y: 120,
      }, {
        opacity: 1,
        y: 0
      })
    }, el)
    

    return () => {
      gsap.killTweensOf('.icons-container_item')
    }
  }, [])

  function loadingCv () {
    window.alert('Não há curriculo no momento!')
  }
 
  
  return (
    <section className="flx-second_part">
          <div className="about" id='section-about'>
            <h2 id='title-section'>Sobre mim</h2>
            <div className="flx-about">
                <img src="https://avatars.githubusercontent.com/u/110244475?v=4" alt="Nycholas" className='profile'/>
                <div className="about-details">
                    <div className='about-text'>
                        <p>Há varios anos apaixonado por tecnologia, entrei para a área de desenvolvimento web. Atualmente estou cursando ADS, e me especializando na área, não só para o âmbito profissional como para o pessoal. Buscando sempre ter e proporcionar boas experiências nos meus serviços.</p>
                        <button id='about-btn' onClick={loadingCv}>Download CV</button>
                    </div>
                    <div className="about-skills">

                        <h4>HTML + Tailwind<span id="progress-number">85%</span>
                        </h4>
                        <progress value='85' max='100' id='progress'></progress>

                        <h4>PHP <span id="progress-number">80%</span></h4>
                        <progress value='80' max='100' id='progress2'></progress>

                        <h4>LARAVEL <span id="progress-number">70%</span></h4>
                        <progress value='70' max='100' id='progress3'></progress>
                    </div>
                </div>
            </div>
            <div className="icons-container" ref={el}>
              <div className='icons-container_item' id='item-1'>
                 <GiBurningBook id='ic' />
                  <div>
                    <h4>2</h4>
                    <p>Projetos completos</p>
                  </div>
              </div>
              <div className='icons-container_item' id='item-2'>
                  <BsCodeSquare id='ic' />
                  <div>
                    <h4>3</h4>
                    <p>codepein resolvidos</p>
                  </div>
              </div>
              <div className='icons-container_item' id='item-4'>
                  <BsClockHistory id='ic' />
                  <div>
                    <h4>3</h4>
                    <p>Projetos em andamento</p>
                  </div>
              </div>
            </div>
          </div>
      </section>
  )
}

export default About