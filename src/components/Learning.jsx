import '../styles/components/Learning.scss'
import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Para adicionar um novo marco, basta incluir um item aqui:
// os lados se alternam sozinhos.
const timeline = [
  {
    date: 'MAR 2017',
    title: 'Antes do código',
    description: 'Assistente administrativo no Banco do Brasil e, depois, atendimento na Teleperformance: anos que me ensinaram a entender problemas reais de pessoas.',
  },
  {
    date: 'SET 2023',
    title: 'Faculdade de ADS',
    description: 'Início da faculdade de Análise e Desenvolvimento de Sistemas na Uninter.',
  },
  {
    date: 'SET 2024',
    title: 'Transição de carreira',
    description: (
      <>
        Primeiros projetos como desenvolvedor backend e início do canal{' '}
        <a href="https://www.youtube.com/@DevNych" target="_blank" rel="noreferrer">DevNych</a>.
      </>
    ),
  },
  {
    date: 'JAN 2025',
    title: 'Estágio na Kumbuca',
    description: 'Primeira experiência na área como estagiário, atuando no backend.',
  },
  {
    date: 'SET 2025',
    title: 'Engenheiro de Plataforma Jr. no Grupo SBF',
    description: 'Automação, confiabilidade, GitOps e observabilidade com Kubernetes, ArgoCD, GCP e Go.',
  },
  {
    date: 'MAR 2026',
    title: 'Formado em ADS',
    description: 'Conclusão do curso de Análise e Desenvolvimento de Sistemas na Uninter.',
  },
]

function Learning() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('#title-learning', {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '#title-learning',
        start: 'top 800px',
        end: 'bottom 700px',
        scrub: true,
      },
    })

    return () => {
      gsap.killTweensOf('#title-learning')
    }
  }, [])

  return (
    <section className="third-part">
      <section className="learning" id="section-learning">
        <h2 id="title-learning">Estudos e experiências</h2>

        <ol className="timeline">
          {timeline.map((item, index) => (
            <li
              key={item.date}
              className={`timeline-item ${index % 2 === 0 ? 'timeline-item--right' : 'timeline-item--left'}`}
              data-reveal
            >
              <time className="timeline-date">{item.date}</time>
              <div className="timeline-marker" aria-hidden="true">
                <span className="timeline-dot" />
              </div>
              <div className="timeline-content">
                <span className="timeline-step">{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </section>
  )
}

export default Learning
