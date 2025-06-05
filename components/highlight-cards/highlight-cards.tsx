import {
  Badge,
  Card,
  Container,
  Group,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';
import classes from './highlight-cards.module.css';
import { CardContent } from './card-content.const';

export function HighlightCards() {
  const features = CardContent.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <Text fz={50}>
        {feature.icon}
      </Text>
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Group justify="center">
        <Badge variant="filled" size="lg">
          Amplifying Live Music since 2023
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        At a Glance
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        A nonprofit music collective born from Silicon Valley&apos;s grassroots scene, GoLive Musician’s League creates inclusive spaces for local talent to shine. Through weekly jam nights, original showcases, and community-powered events.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 4 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}