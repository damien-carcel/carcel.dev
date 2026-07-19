import photo from '../../assets/me.jpg';

import style from './style.module.css';

export default function Photo() {
  return (
    <div className={style.photo}>
      <img alt="me.jpg" src={photo} height="320" width="320" />
    </div>
  );
}
