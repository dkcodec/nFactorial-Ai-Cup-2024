import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Hello world!
      </div>
    </main>
  );
}
