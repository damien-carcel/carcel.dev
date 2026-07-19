import style from './style.module.css';

export default function Intro() {
  return (
    <div className={style.intro}>
      <div className={style.hello}>Hello, I&apos;m Damien Carcel.</div>
      <div className={style.about}>I like to craft software.</div>
    </div>
  );
}
