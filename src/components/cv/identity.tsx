import styles from '@/app//about/page.module.css';

type IdentityProps = {
  name: string;
  profession: string;
};

export default function Identity(props: IdentityProps) {
  return (
    <section className={styles.identity}>
      <div className={styles.name}>{props.name}</div>
      <div className={styles.profession}>{props.profession}</div>
    </section>
  );
}
