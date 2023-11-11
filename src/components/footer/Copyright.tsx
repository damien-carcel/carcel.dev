import styles from '@/components/Footer.module.css';

export default function Copyright() {
  return <div className={styles.copyright}>© {new Date().getFullYear()} Damien Carcel</div>;
}
