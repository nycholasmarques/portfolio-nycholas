import { useMemo } from 'react'
import '../styles/components/bubbles.scss'

const NUMBER_OF_BUBBLES = 22

const BubbleAnimation = () => {
  // Valores aleatórios gerados uma vez só, para não "pular" a cada render
  const bubbles = useMemo(
    () =>
      Array.from({ length: NUMBER_OF_BUBBLES }, (_, index) => ({
        id: index,
        left: Math.random() * 100,
        size: 4 + Math.random() * 10,
        duration: 14 + Math.random() * 18,
        delay: -Math.random() * 30,
      })),
    []
  )

  return (
    <div className="bubbles" aria-hidden="true">
      {bubbles.map((b) => (
        <span
          key={b.id}
          className="bubble"
          style={{
            left: `${b.left}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

export default BubbleAnimation
