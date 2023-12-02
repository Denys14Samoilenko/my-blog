import styles from './page.module.css'

export default function Loading() {
  return (
    <main className={styles.main}>
      <div className={styles.loader}>
        <div className={styles.content} />
      </div>
    </main>
  )
}
