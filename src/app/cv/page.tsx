import { Metadata } from 'next';

import Identity from '@/components/cv/identity';
import Section from '@/components/cv/section';

import styles from './page.module.css';
import Annexes from '@/components/cv/annexes';

export const metadata: Metadata = {
  title: "Hello, I'm Damien",
  description: 'Here is my curriculum vitæ.',
};

export default function Cv() {
  const calculateAge = (birthDate: Date) => {
    const now = new Date();
    let age = now.getFullYear() - birthDate.getFullYear();
    const monthDiff = now.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  };

  const formatBirthDate = (birthDate: Date) => {
    const birthdateFormat: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    const formattedBirthDate = new Intl.DateTimeFormat('en-US', birthdateFormat).format(birthDate);

    return formattedBirthDate;
  };

  const birthDate = new Date(1982, 2, 28);
  const age = calculateAge(birthDate);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Identity name="Damien Carcel" profession="Software engineer" />
        <Section
          title="Contact"
          subSections={[
            { title: 'Address', value: { main: '12 rue Pitre de Lisle du Dreneuc, 44200 Nantes, France' } },
            { title: 'Phone', value: { main: '+33 6 20 45 25 55' } },
            { title: 'Email', value: { main: 'damien.carcel@gmail.com' } },
            { title: 'Nationality', value: { main: 'French' } },
            { title: 'Date of birth', value: { main: formatBirthDate(birthDate) + ' (' + age + ' years old)' } },
          ]}
        />
        <Section
          title="Experiences"
          subSections={[
            { title: 'Feb. 2024 - Today', value: { main: 'Senior Software Engineer at Obat' } },
            {
              title: 'Dec. 2014 - Jan. 2024',
              value: {
                main: 'Software Engineer at Akeneo. Including:',
                isList: true,
                sub: [
                  { key: '1', text: 'Lead Software Engineer from January 2020 to June 2023' },
                  { key: '2', text: 'Senior Software Engineer since July 2023' },
                ],
              },
            },
            { title: '2010 - 2013', value: { main: 'Earth-Sciences contractual teacher in middle and high school' } },
            { title: '2008', value: { main: 'Earth-Sciences contractual teacher at ISARA Lyon engineering school' } },
          ]}
        />
        <Section
          title="Education"
          subSections={[
            {
              title: '2009',
              value: {
                main: 'PHD in Earth Sciences',
                sub: [{ key: '1', text: 'Claude Bernard Lyon 1 University, Lyon, France' }],
                important: true,
              },
            },
            {
              title: '2006',
              value: {
                main: 'Master in Earth Sciences',
                sub: [{ key: '1', text: 'Claude Bernard Lyon 1 University, Lyon, France' }],
                important: true,
              },
            },
            {
              title: '2004',
              value: {
                main: 'License in Earth Sciences',
                sub: [{ key: '1', text: 'Claude Bernard Lyon 1 University, Lyon, France' }],
                important: true,
              },
            },
          ]}
        />
        <Section
          title="Languages"
          subSections={[
            { title: 'Mother tongue', value: { main: 'French', important: true } },
            {
              title: 'Foreign languages',
              value: {
                main: 'English',
                important: true,
                sub: [{ key: '1', text: 'Good command of both written and spoken language' }],
              },
            },
          ]}
        />
        <Section
          title="Professional skills"
          subSections={[
            {
              title: 'Development languages',
              value: { main: 'PHP, Symfony, Go, JavaScript, TypeScript, React', important: true },
            },
            { title: 'Development Practices', value: { main: 'TDD, DDD, CI/CD', important: true } },
            { title: 'Databases', value: { main: 'MySQL, PostgreSQL, Elasticsearch', important: true } },
            {
              title: 'Development tools',
              value: {
                main: 'JetBrains IDEs, VS Code, Git, Docker, Kubernetes, Terraform, CircleCI, GitHub Actions',
                important: true,
              },
            },
            { title: 'Operating systems', value: { main: 'GNU/Linux, Windows, macOS', important: true } },
          ]}
        />
        <Annexes
          annexes={[
            {
              title: 'Professional highlights',
              content: [
                {
                  key: '1',
                  text: 'I enjoy coaching and bringing new knowledge when I can while learning new things from new people.',
                },
                {
                  key: '2',
                  text: 'My main thrill is trying to understand what are users problems and to bring solutions to those.',
                },
              ],
            },
            {
              title: 'Other skills and hobbies',
              content: [
                {
                  key: '1',
                  text: 'Reading (mainly fantasy, science fiction and manga)',
                },
                {
                  key: '2',
                  text: 'Fishing',
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
}
