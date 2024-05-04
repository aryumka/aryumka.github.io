import React from 'react';
import DefaultTemplate from '@templates/default';
import SEO from '@components/SEO';

interface LinkProps {
  children: React.ReactNode;
  href: string;
}

const Link = ({ children, href }: LinkProps) => {
  return (
    <a href={href} style={{ textDecoration: 'none', color: '#5c6ac4' }} target="_blank">
      {children}
    </a>
  );
};

const About = () => {
  const opensources = [
    {
      href: 'https://github.com/aryumka/kontainer',
      text: 'kontainer'
    },
    {
      href: 'https://github.com/aryumka/BigInteger.kt',
      text: 'BigInteger.kt'
    },
    {
      href: 'https://github.com/aryumka/tdd-practice',
      text: 'tdd-practice'
    },
    {
      href: 'https://github.com/aryumka/rabbitmq-tutorial',
      text: 'rabbitmq-tutorial'
    }
  ];

  return (
    <DefaultTemplate>
      <SEO title="About" />

      <h2>💼 Currently working on</h2>
      <ul>
        <li>
          <strong>Venture Capital Projects</strong> 2022. 02 ~ <br />
        </li>
      </ul>

      <h2>❤️ Open Source</h2>
      <ul>
        {opensources.map(item => (
          <li key={item.href}>
            <Link href={item.href}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </DefaultTemplate>
  );
};

export default About;
