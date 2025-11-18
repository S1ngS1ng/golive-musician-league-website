import { Anchor, Container, Space, Stack, Text, Title } from '@mantine/core';

export default async function Events() {
  return (
    <Container size={'lg'}>
      <Stack gap='xs'>
        <Title order={2} my={'md'}>Weekend Jam Year-End Party | Proudly Presents GoLive</Title>
        <Title order={3} my={'sm'}>About GoLive Musician’s League</Title>
        <Text>
          <b>GoLive Musician’s League</b> grew out of a spontaneous music community known as <b>Weekend Jam</b>. Founded in late 2023 by a group of friends who love singing, playing instruments, and sharing the joy of performing, GoLive has since become a registered <b>501(c)(3) nonprofit organization</b> in the United States.
        </Text>
        <Text>
          Our mission is to <b>promote live music culture, support original music, empower emerging bands</b>, and <b>create more opportunities for music lovers to perform on stage</b>.
        </Text>
        <Text>
          Through events like <b>Weekend Jam</b>, we provide open stages for musicians, encourage artistic exchange, and bring together community members who share a passion for music—offering a welcoming space to connect, share, and create.
        </Text>

        <Title order={3} my={'sm'}>Weekend Jam Year-End Party</Title>
        <Text>
          As its influence continues to grow, <b>Weekend Jam</b> has become a vital hub for grassroots music culture in Silicon Valley. Partnering with various restaurants and bars across the Bay Area, we host live sessions every Saturday night that attract musicians, singers, and music enthusiasts who gather to celebrate the freedom and passion of live music.
        </Text>
        <Text>
          To thank all the performers and supporters who have been part of <b>Weekend Jam</b>, we warmly invite you to join our <b>Year-End Music Party</b>!
        </Text>
        <Space h="sm" />

        <Text>📅 <b>Date:</b> Saturday, November 22, 2025, at 6:00 PM</Text>
        <Text>📍 <b>Venue:</b> HalalStreet Hotpot Restaurant</Text>
        <Text>5605 Mowry School Rd, Newark, CA 94560</Text>
        <Text>🎶 Live Performances | 🍷 Food & Drinks | 🎤 Open Mic</Text>
        <Text>👉 <b>Tickets:</b> $50 per person | Children under 12: $20</Text>

        <Space h="sm" />

        <Text>
          GoLive’s events are made possible entirely through the dedication of <b>volunteers</b> and the generosity of our <b>donors</b>. All contributions are <b>tax-deductible</b>, and you can donate through your company’s giving portal on{' '}
          <Anchor href="https://benevity.com" target="_blank" rel="noopener noreferrer">
            benevity.com
          </Anchor>{' '}
          by searching for <b>“GoLive Musician’s League.”</b>
        </Text>

        <Space h="sm" />

        <Text>
          🎁 <b>Special Appreciation:</b> Donors who contribute <b>$400 or more this year (including company match)</b> will receive <b>free admission</b> and a <b>special acknowledgment</b> at the event.
        </Text>
      </Stack>
    </Container>
  );
}
