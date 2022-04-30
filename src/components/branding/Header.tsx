import React from 'react';
import Link from 'next/link';

const Header = () => (
  <div className="h-16 bg-slate-200">
    <nav className="container flex h-full items-center justify-between text-gray-700">
      <Link href="/">
        <p className="font-bold">Website Name</p>
      </Link>
      {/* Right Menu */}
      <ul className="flex divide-x divide-slate-400 text-sm">
        {links.map(({name, link}) => (
          <Link key={name} href={link}>
            <li className="cursor-pointer px-4 font-semibold first:pl-0">
              {name}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  </div>
);

const links = [
  {
    name: 'About',
    link: '/',
  },
  {
    name: 'Market',
    link: '/',
  },
  {
    name: 'Contact Us',
    link: '/',
  },
  {
    name: 'Sign in',
    link: '/',
  },
];

export default Header;
