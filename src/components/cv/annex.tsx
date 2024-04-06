import styles from './style.module.css';

export type AnnexProps = {
  title: string;
  content: { key: string; text: string }[];
};

export default function Annex(props: AnnexProps) {
  return (
    <div className={styles.annex}>
      <div className={styles['section-title']}>{props.title}</div>
      <div className={styles['annex-content']}>
        {props.content.map((paragraph) => (
          <p key={paragraph.key}>{paragraph.text}</p>
        ))}
      </div>
    </div>
  );
}
