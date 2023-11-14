import '../styles/components/bubbles.scss'


const BubbleAnimation = () => {
    const numberOfBubbles = 50; 
    const bubbles = Array.from({ length: numberOfBubbles }, (_, index) => index);
    
    return (
      <div className="bubbles">
        {bubbles.map((index) => {
          const animationDuration = 10 + Math.random() * 15; // Gere durações aleatórias entre 5s e 30s
          const animationDelay = 0 + Math.random() * 20; // Gere atrasos aleatórios entre 0s e 20s
          
          return (
            <span key={index} className="bubble" style={{
              animationDuration: `${animationDuration}s`,
              animationDelay: `${animationDelay}s`,
            }}></span>
          );
        })}
      </div>
    );
  };
export default BubbleAnimation