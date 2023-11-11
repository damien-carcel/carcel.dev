'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const currentRoute = usePathname();

  return (
    <nav>
      <Link href="/" className={'/' === currentRoute ? 'active' : ''}>
        Home
      </Link>
      <Link href="/about" className={'/about' === currentRoute ? 'active' : ''}>
        About Me
      </Link>
    </nav>
  );
}
