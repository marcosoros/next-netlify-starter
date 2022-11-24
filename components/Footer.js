import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Creado con mis cojones <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} /> para ti
      </footer>
    </>
  )
}
