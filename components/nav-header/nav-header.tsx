'use client'

import { type ReactElement, useEffect } from 'react';
import Image from 'next/image';
import { Burger, Divider, Drawer, Group, ScrollArea, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import logo from '../../public/instruments.svg';
import classes from './nav-header.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/events', label: 'Events' },
];

export function NavHeader(props: { children: ReactElement }) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const pathname = usePathname()

  useEffect(() => {
    closeDrawer();
  }, [pathname, closeDrawer]);

  const navigationItems = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      data-active={pathname === link.link || undefined}
      className={classes.link}>
      {link.label}
    </Link>
  ));

  return (
    <>
      <header className={classes.header}>
        <div className={classes.inner}>
          <Group wrap="nowrap">
            <Burger opened={drawerOpened} onClick={toggleDrawer} size="sm" hiddenFrom="sm"/>
            <Image src={logo} alt="logo" className={classes.logo}/>
            <Title order={2} fz={{ base: '1rem', xs: '1.5rem' }} className={classes.title}>GoLive Musician&#39;s League</Title>
          </Group>

          <Group className={classes.navigation}>
            <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
              {navigationItems}
            </Group>
          </Group>

          <Group>
            {props.children}
          </Group>
        </div>
      </header>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />
          {navigationItems}
          <Divider my="sm" />
        </ScrollArea>
      </Drawer>
    </>
  );
}