type ImageLinkProps = {
  alt: string;
  href: string;
  src: string;
  target: string;
};

export default function ImageLink(props: ImageLinkProps) {
  return (
    <a href={props.href} target={props.target}>
      <img alt={props.alt} src={props.src} height={32} width={32} />
    </a>
  );
}
