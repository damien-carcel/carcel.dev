import ImageLink from '@/components/footer/ImageLink';
import styles from '@/components/Footer.module.css';

export default function Links() {
  return (
    <div className={styles.links}>
      <ImageLink alt={'GitHub'} href={'https://github.com/damien-carcel/'} src={'/octocat.png'} />
      <ImageLink alt={'LinkedIn'} href={'https://www.linkedin.com/in/damien-carcel/'} src={'/linkedin.png'} />
      <ImageLink alt={'Twitter'} href={'https://twitter.com/damiencarcel'} src={'/twitter.png'} />
    </div>
  );
}
