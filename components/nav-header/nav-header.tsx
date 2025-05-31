"use client"

import Image from 'next/image';
import { Burger, Group, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import logo from '../../public/instruments.svg';
import classes from './nav-header.module.css';
import Link from "next/link";

const links = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/events', label: 'Events' },
];

export function NavHeader() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}>
      {link.label}
    </Link>
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