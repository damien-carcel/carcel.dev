import SubSection, { SubSectionProps } from '@/components/cv/subsection';

import styles from './style.module.css';

type SectionProps = {
  title: string;
  subSections: SubSectionProps[];
};

export default function Section(props: SectionProps) {
  return (
    <div className={styles.section}>
      <div className={styles['section-title']}>{props.title}</div>
      {props.subSections.map((subsection) => (
        <SubSection key={subsection.title} title={subsection.title} value={subsection.value} />
      ))}
    </div>
  );
}
