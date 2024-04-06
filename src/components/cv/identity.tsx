import Image from 'next/image';
import styles from './style.module.css';

type IdentityProps = {
  name: string;
  profession: string;
};

export default function Identity(props: IdentityProps) {
  return (
    <div className={styles.identity}>
      <div className={styles['identity-value']}>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.profession}>{props.profession}</div>
      </div>
      <div className={styles['identity-photo']}>
        <Image alt="me.jpg" src="/me.jpg" height={160} width={160} />
      </div>
    </div>
  );
}
