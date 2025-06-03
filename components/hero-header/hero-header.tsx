import { Button, Container, Text, Title } from '@mantine/core';
import classes from './hero-header.module.css';
import Link from "next/link";

export function HeroHeader() {
  return (
    <Container className={classes.wrapper} size={1400}>
      <div className={classes.inner}>
        <Title className={classes.title}>
          <Text component="span" className={classes.highlight} inherit>
            Live
          </Text>{' '}
          Music,{' '}
          <Text component="span" className={classes.highlight} inherit>
            Local
          </Text>{' '}
          Spirit.
        </Title>

        <Container p={0}>
          <Text size="lg" className={classes.description}>
            GoLive Musician’s League is a nonprofit building Silicon Valley’s live music culture.
          </Text>
          <Text size="lg" c="dimmed" className={classes.description}>
            We support local musicians, jam sessions, and emerging bands in Silicon Valley.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button component={Link} href="/about" className={classes.control} size="lg" variant="default" color="gray">
            About Us
          </Button>
          <Button component={Link} href="/events" className={classes.control} size="lg">
            Join the Jam
          </Button>
        </div>
      </div>
    </Container>
  );
}