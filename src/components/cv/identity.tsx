import styles from './style.module.css';

type IdentityProps = {
  name: string;
  profession: string;
};

export default function Identity(props: IdentityProps) {
  return (
    <div className={styles.section}>
      <div className={styles.name}>{props.name}</div>
      <div className={styles.profession}>{props.profession}</div>
    </div>
  );
}
