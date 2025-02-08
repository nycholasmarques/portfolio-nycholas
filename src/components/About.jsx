import '../styles/components/about.scss';
import { SiTailwindcss, SiTypescript, SiGo, SiPostgresql } from "react-icons/si";
import { FaNodeJs, FaReact } from "react-icons/fa";
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



  return (
    <section className="flx-second_part">
      <div className="about" id='section-about'>
        <h2 id='title-section'>Sobre mim</h2>
        <div className="flx-about">
          <img src="https://avatars.githubusercontent.com/u/110244475?v=4" alt="Nycholas" className='profile' />
          <div className="about-details">
            <div className='about-text'>
              <p>Apaixonado por tecnologia, ingressei na área de desenvolvimento em 2023. Atualmente, curso Análise e Desenvolvimento de Sistemas (ADS) e atuo como estagiário em Backend, aprimorando minhas habilidades tanto para o crescimento profissional quanto pessoal. Estou sempre em busca de oferecer e proporcionar as melhores experiências em meus projetos e serviços.</p>
              <div>
                <div className='icons-container'>
                <div className='icons-container_item' id='item-1'>
                    <SiGo />
                    <div>
                      <p>Golang</p>
                    </div>
                  </div>
                  <div className='icons-container_item' id='item-2'>
                    <SiTailwindcss />
                    <div>
                      <p>Tailwind</p>
                    </div>
                  </div>
                  <div className='icons-container_item' id='item-3'>
                    <SiTypescript />
                    <div>
                      <p>Typescript</p>
                    </div>
                  </div>
                  <div className='icons-container_item' id='item-4'>
                    <SiPostgresql />
                    <div>
                      <p>PostgreSQL</p>
                    </div>
                  </div>
                  <div className='icons-container_item' id='item-5'>
                    <FaNodeJs />
                    <div>
                      <p>Nodejs</p>
                    </div>
                  </div>
                  <div className='icons-container_item' id='item-6'>
                    <FaReact />
                    <div>
                      <p>React</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About