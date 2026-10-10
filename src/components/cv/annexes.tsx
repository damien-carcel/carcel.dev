import Annex, { type AnnexProps } from './annex';

import style from './style.module.css';

type AnnexesProps = {
  annexes: AnnexProps[];
};

export default function Annexes(props: AnnexesProps) {
  return (
    <div className={style.annexes}>
      {props.annexes.map((annex) => (
        <Annex key={annex.title} title={annex.title} content={annex.content} />
      ))}
    </div>
  );
}
