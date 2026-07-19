import SubSection, { SubSectionProps } from './subsection';

import style from './style.module.css';

type SectionProps = {
  title: string;
  subSections: SubSectionProps[];
};

export default function Section(props: SectionProps) {
  return (
    <div className={style.section}>
      <div className={style['section-title']}>{props.title}</div>
      {props.subSections.map((subsection) => (
        <SubSection key={subsection.title} title={subsection.title} value={subsection.value} />
      ))}
    </div>
  );
}
