import styles from '@/src/app/page.module.css';

export default function Intro() {
  return (
    <div className={styles.intro}>
      <div className={styles.hello}>Hello, I&apos;m Damien Carcel.</div>
      <div className={styles.about}>I like to craft software.</div>
    </div>
  );
}
