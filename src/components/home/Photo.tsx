import Image from 'next/image';

import styles from '@/app/page.module.css';

export default function Photo() {
  return (
    <div className={styles.photo}>
      <Image alt="me.jpg" src="/me.jpg" height={320} width={320} />
    </div>
  );
}
