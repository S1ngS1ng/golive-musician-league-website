import { ActionIcon, Container, Group, Text } from '@mantine/core';
import { IconAt, IconBrandInstagram, IconBrandYoutube } from '@tabler/icons-react';
import classes from './footer.module.css';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const AccountLinks = [{
    // 小红书
    component: IconAt,
    href: 'https://www.xiaohongshu.com/user/profile/64dffda30000000001012498',
  }, {
    component: IconBrandYoutube,
    href: 'https://www.youtube.com/@WeekendJam-BayArea',
  }, {
    component: IconBrandInstagram,
    href: 'https://www.instagram.com/weekendjambayarea',
  }];

  return (
    <Container className={classes.inner}>
      <Text c="dimmed" size="sm">
        © {currentYear} GoLive Musician&#39;s League. All rights reserved.
      </Text>

      <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
        {AccountLinks.map((AccountLink, index) => (
          <ActionIcon
            key={index}
            size="lg"
            color="gray"
            variant="subtle"
            component={Link}
            target="_blank"
            href={AccountLink.href}>
            <AccountLink.component size={18} stroke={1.5} />
          </ActionIcon>
        ))}
      </Group>
    </Container>
  );
}
