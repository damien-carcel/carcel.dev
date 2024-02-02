import styles from './style.module.css';

export default function Copyright() {
  return <div className={styles.copyright}>© {new Date().getFullYear()} Damien Carcel</div>;
}
