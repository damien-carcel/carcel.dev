import styles from '@/app//about/page.module.css';
import SubSection, { SubSectionProps } from '@/components/cv/subsection';

type SectionProps = {
  title: string;
  subSections: SubSectionProps[];
};

export default function Section(props: SectionProps) {
  return (
    <section>
      <div className={styles.section_title}>{props.title}</div>
      {props.subSections.map((subsection) => (
        <SubSection key={subsection.title} title={subsection.title} value={subsection.value} />
      ))}
    </section>
  );
}
