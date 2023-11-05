import { NavLink } from '@remix-run/react';

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About Me</NavLink>
    </nav>
  );
}
