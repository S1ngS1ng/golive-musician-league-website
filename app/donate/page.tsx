import { Container, Box, Title, Text, Image, Anchor, Button, Stack } from '@mantine/core';

export default async function Donate() {
  return (
    <Container size={'lg'}>
      <Stack gap='xl'>
        <Box>
          <Title order={2} my={'md'}>
            Donate via Benevity
          </Title>
          <Text mb='sm'>
            If your company supports Benevity, you can donate directly through your corporate giving portal. Simply log in to your company’s Benevity page and search for: "GoLive Musician’s League"
          </Text>

          <Anchor
            href='https://benevity.com'
            target='_blank'
            rel='noopener noreferrer'>
            <Button variant='light'>Go to Benevity</Button>
          </Anchor>
        </Box>

        <Box>
          <Title order={3} mb='xs'>
            Donate via Venmo
          </Title>

          <Text mb='md'>
            You can also support us directly through Venmo. Scan the QR code below or tap the link.
          </Text>

          <Anchor
            href="https://venmo.com/Golive-musician"
            target="_blank"
            rel="noopener noreferrer">
            <Button color="blue" mb="md">Open Venmo</Button>
          </Anchor>

          <Box ta="center">
            <Image
              src="/donate-venmo.webp"   // <-- replace with your QR path
              alt="Venmo QR Code"
              radius="md"
              maw={220}
              mx="auto"/>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
}
