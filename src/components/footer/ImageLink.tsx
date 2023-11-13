import Image from 'next/image';
import Link from 'next/link';

type ImageLinkProps = {
  alt: string;
  href: string;
  src: string;
};

export default function ImageLink(props: ImageLinkProps) {
  return (
    <Link href={props.href}>
      <Image alt={props.alt} src={props.src} height={32} width={32} />
    </Link>
  );
}
