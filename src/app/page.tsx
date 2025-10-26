import { Metadata } from 'next';

import Intro from '@/src/components/home/Intro';
import Photo from '@/src/components/home/Photo';

import styles from './page.module.css';

export const metadata: Metadata = {
  title: "Hello, I'm Damien",
  description: 'Welcome to my personal page',
};

export default function Home() {
  return (
    <div className={styles.main}>
      <Intro />
      <Photo />
    </div>
  );
}
