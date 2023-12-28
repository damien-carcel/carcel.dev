import Annex, { AnnexProps } from '@/components/cv/annex';

import styles from './style.module.css';

type AnnexesProps = {
  annexes: AnnexProps[];
};

export default function Annexes(props: AnnexesProps) {
  return (
    <div className={styles.annexes}>
      {props.annexes.map((annex) => (
        <Annex key={annex.title} title={annex.title} content={annex.content} />
      ))}
    </div>
  );
}
