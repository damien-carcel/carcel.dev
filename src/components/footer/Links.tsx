import ImageLink from './ImageLink';

import linkedin from '../../assets/linkedin.png';
import mastodon from '../../assets/mastodon.png';
import octocat from '../../assets/octocat.png';

import style from './style.module.css';

export default function Links() {
  return (
    <div className={style.links}>
      <ImageLink alt={'GitHub'} href={'https://github.com/damien-carcel/'} src={octocat} target="_blank" />
      <ImageLink alt={'LinkedIn'} href={'https://www.linkedin.com/in/damien-carcel/'} src={linkedin} target="_blank" />
      <ImageLink alt={'Mastodon'} href={'https://social.tchncs.de/@damiencarcel'} src={mastodon} target="_blank" />
    </div>
  );
}
