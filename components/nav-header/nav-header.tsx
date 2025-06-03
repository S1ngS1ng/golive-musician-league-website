"use client"

import { type ReactElement } from "react";
import Image from 'next/image';
import { Burger, Group, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import logo from '../../public/instruments.svg';
import classes from './nav-header.module.css';
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/events', label: 'Events' },
];

export function NavHeader(props: { children: ReactElement }) {
  const [opened, { toggle }] = useDisclosure(false);
  const pathname = usePathname()

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      data-active={pathname === link.link || undefined}
      className={classes.link}>
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group wrap="nowrap">
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm"/>
          <Image src={logo} alt={"logo"} className={classes.logo}/>
          <Title order={2}>GoLive Musician&#39;s League</Title>
        </Group>

        <Group className={classes.navigation}>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
          </Group>
        </Group>

        <Group>
          {props.children}
        </Group>
      </div>
    </header>
  );
}