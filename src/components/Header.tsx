import { useLocation } from 'preact-iso';

export default function Header() {
  const { url } = useLocation();

  return (
    <header>
      <nav>
        <a href="/" className={(url == '/' && 'active') || ''}>
          Home
        </a>
        <a href="/about" className={(url == '/about' && 'active') || ''}>
          About Me
        </a>
        <a href="/cv" className={(url == '/cv' && 'active') || ''}>
          CV
        </a>
      </nav>
    </header>
  );
}
