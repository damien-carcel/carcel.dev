type ImageLinkProps = {
  alt: string;
  href: string;
  src: string;
};

export default function ImageLink(props: ImageLinkProps) {
  return (
    <a href={props.href}>
      <img alt={props.alt} src={props.src} />
    </a>
  );
}
