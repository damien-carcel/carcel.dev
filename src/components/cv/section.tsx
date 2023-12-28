import SubSection, { SubSectionProps } from '@/components/cv/subsection';

import styles from './style.module.css';

type SectionProps = {
  title: string;
  subSections: SubSectionProps[];
};

export default function Section(props: SectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.section_title}>{props.title}</div>
      {props.subSections.map((subsection) => (
        <SubSection key={subsection.title} title={subsection.title} value={subsection.value} />
      ))}
    </section>
  );
}
