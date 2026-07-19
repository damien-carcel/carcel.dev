'use client';

import style from './style.module.css';

export default function Copyright() {
  return <div className={style.copyright}>© {new Date().getFullYear()} Damien Carcel</div>;
}
