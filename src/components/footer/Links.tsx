import ImageLink from '@/src/components/footer/ImageLink';

import styles from './style.module.css';

export default function Links() {
  return (
    <div className={styles.links}>
      <ImageLink alt={'GitHub'} href={'https://github.com/damien-carcel/'} src={'/octocat.png'} target="_blank" />
      <ImageLink
        alt={'LinkedIn'}
        href={'https://www.linkedin.com/in/damien-carcel/'}
        src={'/linkedin.png'}
        target="_blank"
      />
      <ImageLink
        alt={'Mastodon'}
        href={'https://social.tchncs.de/@damiencarcel'}
        src={'/mastodon.png'}
        target="_blank"
      />
    </div>
  );
}
