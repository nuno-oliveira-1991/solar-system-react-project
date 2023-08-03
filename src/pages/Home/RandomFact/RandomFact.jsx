import{ useState, useEffect } from "react"
import solarSystemFacts from "./solar-system-facts"
import styles from "./random-fact.module.scss"

const RandomFact = () => {
  const [randomFact, setRandomFact] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const displayRandomFact = () => {
      const randomIndex = Math.floor(Math.random() * solarSystemFacts.length)
      setRandomFact(solarSystemFacts[randomIndex])
      setIsVisible(true)
    };

    setTimeout(() => {
      setIsVisible(false);
    }, 1000)

    const initialTimeout = setTimeout(displayRandomFact, 2000)
    const interval = setInterval(displayRandomFact, 60000)

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    };
  }, [])

  return (
    <div className={isVisible ? styles.fadeIn : styles.fadeOut}>
      {randomFact && <p>{randomFact}</p>}
    </div>
  )
};

export default RandomFact