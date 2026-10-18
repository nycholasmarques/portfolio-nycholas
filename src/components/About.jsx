import '../styles/components/about.scss';
import {
  SiGo, SiLinux, SiKubernetes, SiHelm, SiDocker, SiArgo, SiIstio,
  SiTerraform, SiVault, SiGooglecloud, SiAkamai, SiDatadog, SiPostgresql,
} from "react-icons/si";
import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const stacks = [
  { name: 'Go', icon: <SiGo />, color: '#00ADD8' },
  { name: 'Linux', icon: <SiLinux />, color: '#D9A400' },
  { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5' },
  { name: 'Helm', icon: <SiHelm />, color: '#0F1689' },
  { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
  { name: 'ArgoCD', icon: <SiArgo />, color: '#EF7B4D' },
  { name: 'Istio', icon: <SiIstio />, color: '#466BB0' },
  { name: 'Terraform', icon: <SiTerraform />, color: '#7B42BC' },
  { name: 'Vault', icon: <SiVault />, color: '#000000' },
  { name: 'GCP', icon: <SiGooglecloud />, color: '#4285F4' },
  { name: 'Akamai', icon: <SiAkamai />, color: '#0096D6' },
  { name: 'Datadog', icon: <SiDatadog />, color: '#632CA6' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
]

function About() {

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
              <p>Comecei minha trajetória longe do código, passando por atendimento, suporte e rotinas operacionais, experiências que me ensinaram muito sobre comunicação, organização e, principalmente, sobre entender problemas reais de pessoas. Em 2023 encontrei na tecnologia o meu caminho e hoje, formado em Análise e Desenvolvimento de Sistemas, atuo como Engenheiro de Plataforma / SRE no Grupo SBF, trabalhando com automação, confiabilidade, GitOps, observabilidade e ferramentas internas que apoiam os times de engenharia no dia a dia. Também me interesso por IA aplicada ao desenvolvimento e sigo aprendendo na prática, buscando construir soluções úteis, confiáveis e bem pensadas.</p>
              <div>
                <div className='icons-container'>
                  {stacks.map((stack) => (
                    <div className='icons-container_item' key={stack.name} style={{ color: stack.color }}>
                      {stack.icon}
                      <div>
                        <p>{stack.name}</p>
                      </div>
                    </div>
                  ))}
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