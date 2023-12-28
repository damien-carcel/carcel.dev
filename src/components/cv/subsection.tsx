import styles from './style.module.css';

export type SubSectionProps = {
  title: string;
  value: { main: string; sub?: string; important?: boolean };
};

export default function SubSection(props: SubSectionProps) {
  return (
    <div className={styles.subsection}>
      <div className={styles['subsection-title']}>{props.title}</div>
      <div className={styles['subsection-content']}>
        <div style={{ fontWeight: props.value.important ? 'bold' : 'normal' }} className={styles.subsection_value}>
          {props.value.main}
        </div>
        {props.value.sub ? <div className={styles['subsection-value']}>{props.value.sub}</div> : ''}
      </div>
    </div>
  );
}
