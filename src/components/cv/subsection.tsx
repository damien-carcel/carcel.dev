import styles from '@/app//about/page.module.css';

export type SubSectionProps = {
  title: string;
  value: { main: string; sub?: string; important?: boolean };
};

export default function SubSection(props: SubSectionProps) {
  return (
    <div>
      <div className={styles.subsection_title}>{props.title}</div>
      <div>
        <div style={{ fontWeight: props.value.important ? 'bold' : 'normal' }} className={styles.subsection_value}>
          {props.value.main}
        </div>
        {props.value.sub ? <div className={styles.subsection_value}>{props.value.sub}</div> : ''}
      </div>
    </div>
  );
}
