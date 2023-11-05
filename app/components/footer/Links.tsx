import ImageLink from '~/components/footer/ImageLink';
import linkedin from '~/images/linkedin.png';
import octocat from '~/images/octocat.png';
import twitter from '~/images/twitter.png';

export default function Links() {
  return (
    <div className="links">
      <ImageLink alt={'GitHub'} href={'https://github.com/damien-carcel/'} src={octocat} />
      <ImageLink alt={'LinkedIn'} href={'https://www.linkedin.com/in/damien-carcel/'} src={linkedin} />
      <ImageLink alt={'Twitter'} href={'https://twitter.com/damiencarcel'} src={twitter} />
    </div>
  );
}
