import '../styles/components/services.scss'
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


function Services() {

    const el = useRef()
    const tl = useRef()

    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger)
          gsap.to('#title-section', {
            y: 0,
            scrollTrigger: {
              trigger: '.services',
              //markers: true,
              start: 'top 900x',
              end: 'bottom 950px', 
              scrub: true
            }
          })
        
          return () => {
            gsap.killTweensOf('#title-section')
          }
      }, [])

    

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
    
        // eslint-disable-next-line no-unused-vars
        const ctx = gsap.context(() => {
          tl.current = gsap.timeline({
            scrollTrigger: {
              trigger: '.card',
              start: 'top 900x',
              end: 'bottom 950px',    
            }
          })
          .fromTo('#card-1', {
            opacity: 0,
            y: 80,
          }, {
            opacity: 0.4,
            y: 0
          })
          .fromTo('#card-2', {
            opacity: 0,
            y: 80,
          }, {
            opacity: 1,
            y: 0
          })
          .fromTo('#card-3', {
            opacity: 0,
            y: 80,
          }, {
            opacity: 0.4,
            y: 0
          })
        }, el)
        
    
        return () => {
          gsap.killTweensOf('.card')
        }
      }, [])



  return (
    <section className='third-part'>
        <div className='services'>
            <h2 id='title-section'>Services</h2>
            <div className="services-container" ref={el}>
                <div className="card" id='card-1'>
                    <div className="faixa">
                    <p>EM BREVE</p>
                    </div>
                    <figure>
                    </figure>
                    <figcaption>
                    <h4>Backend Web</h4>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo sequi quidem suscipit, laboriosam sed eveniet.
                    </figcaption>
                </div>
                <div className="card" id='card-2'>
                    <figure>
                    </figure>
                                       
                    <figcaption>
                    <h4>Frontend Web</h4>
                        Consigo criar páginas dinamicas, responsivas e interativas, com um bom design. Utilizando tecnologias: HTML CSS E REACT.
                    </figcaption>
                </div>
                <div className="card" id='card-3'>
                    <div className="faixa">
                    <p>EM BREVE</p>
                    </div>
                    <figure>
                    </figure>                   
                    <figcaption>
                    <h4>Design UI-UX</h4>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo sequi quidem suscipit, laboriosam sed eveniet.
                    </figcaption>
                </div>                  
            </div>
        </div>
    </section>
  )
}

export default Services