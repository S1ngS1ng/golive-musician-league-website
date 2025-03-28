"use client"

import Image from 'next/image';
import { Burger, Group, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import logo from '../../public/go-live.svg';
import classes from './nav-header.module.css';

const links = [
  { link: '/Home', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/events', label: 'Events' },
];

export function NavHeader() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <Image src={logo} alt={"logo"} className={classes.logo} />
          <Title order={2}>GoLive Musician&#39;s League</Title>
        </Group>

        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
          </Group>
        </Group>
      </div>
    </header>
  );
}