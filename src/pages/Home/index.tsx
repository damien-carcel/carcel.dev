import Intro from '../../components/home/Intro';
import Photo from '../../components/home/Photo';

import style from './style.module.css';

export default function Home() {
  return (
    <div className={style.main}>
      <Intro />
      <Photo />
    </div>
  );
}
