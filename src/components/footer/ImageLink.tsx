import Image from 'next/image';
import Link from 'next/link';

type ImageLinkProps = {
  alt: string;
  href: string;
  src: string;
  target: string;
};

export default function ImageLink(props: ImageLinkProps) {
  return (
    <Link href={props.href} target={props.target}>
      <Image alt={props.alt} src={props.src} height={32} width={32} />
    </Link>
  );
}
