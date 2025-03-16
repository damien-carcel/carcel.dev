import { Metadata } from 'next';

import styles from './page.module.css';

export const metadata: Metadata = {
  title: "Hello, I'm Damien",
  description: "Let's talk about me :).",
};

export default function About() {
  const yearsOfXp = (): number => {
    const started = new Date('2014-09-01');
    const now = new Date();

    return now.getFullYear() - started.getFullYear();
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <p>I am a software engineer with {yearsOfXp()} years of experience.</p>
        <p>
          But before that, I have been passionate about free and open-source software for decades. A passion that has
          accompanied me throughout my studies and professional career, as well as in my spare time.
        </p>
        <p>
          I have an atypical background. First an Earth Sciences scientist, I obtained a PhD degree in 2009. After that,
          I taught Earth Sciences in middle and high-school for a few years. Then, in 2013, I eventually decided to
          learn how to be a software engineer by myself, and did not regret that move ever since.
        </p>
        <p>
          I kept from my academic years a taste for knowledge sharing. I like to mentor my pairs anytime I can, and
          always look to learn new things and improve myself.
        </p>
        <p>
          I do also especially value practices such as TDD, pair and mob programming, code reviews. I consider that
          working as a team, and not as a simple group of individual and isolated contributors, the best way to achieve
          quality software.
        </p>
      </div>
    </div>
  );
}
