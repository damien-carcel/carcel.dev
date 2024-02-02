import styles from './style.module.css';

export type SubSectionProps = {
  title: string;
  // TODO: Use a better pattern than those optional keys
  value: { main: string; sub?: { key: string; text: string }[]; important?: boolean; isList?: boolean };
};

export default function SubSection(props: SubSectionProps) {
  return (
    <div className={styles.subsection}>
      <div className={styles['subsection-title']}>{props.title}</div>
      <div className={styles['subsection-value']}>
        <div style={{ fontWeight: props.value.important ? 'bold' : 'normal' }} className={styles.subsection_value}>
          {props.value.main}
        </div>
        {props.value.sub ? (
          props.value.isList ? (
            <ul>
              {props.value.sub.map((subValue) => (
                <li key={subValue.key}>{subValue.text}</li>
              ))}
            </ul>
          ) : (
            <div>
              {props.value.sub.map((subValue) => (
                <div key={subValue.key}>{subValue.text}</div>
              ))}
            </div>
          )
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
