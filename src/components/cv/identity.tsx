import photo from '../../assets/me.jpg';

import style from './style.module.css';

type IdentityProps = {
  name: string;
  profession: string;
};

export default function Identity(props: IdentityProps) {
  return (
    <div className={style.identity}>
      <div className={style['identity-value']}>
        <div className={style.name}>{props.name}</div>
        <div className={style.profession}>{props.profession}</div>
      </div>
      <div className={style['identity-photo']}>
        <img alt="me.jpg" src={photo} height="160" width="160" />
      </div>
    </div>
  );
}
