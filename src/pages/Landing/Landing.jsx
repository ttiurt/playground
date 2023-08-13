// css
import styles from './Landing.module.css'
import ThreeTest from '../../components/ThreeTest/ThreeTest'



const Landing = () => {
  return (
    <main className={styles.container}>
      
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo ipsam perferendis distinctio velit reiciendis labore atque consequatur eligendi ducimus cum, consequuntur voluptatem, modi enim, exercitationem ab odit sit quis! Excepturi.</p>
      <div className={styles.card}>
        <ThreeTest />
      </div>
      <h1>GAMUT</h1>
    </main>
  )
}

export default Landing
