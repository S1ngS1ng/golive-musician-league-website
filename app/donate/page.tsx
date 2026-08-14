import { Container, Box, Title, Text, Image, Anchor, Button, Stack } from '@mantine/core';
import Script from 'next/script';

export default async function Donate() {
  return (
    <Container size="lg">
      <Script
        src="https://www.paypal.com/sdk/js?client-id=BAAnG0DPDcIULStChtLN1d_CLPY_ZrRvybgVmde9Ptq_KhYEthtmZTkvo3dr0pv9btjH_ljgVJL3MBTFgM&components=hosted-buttons&enable-funding=venmo&currency=USD"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <Script id="paypal-hosted-button-KP6G4QB99UCEC" strategy="afterInteractive">
        {`
          (function renderPayPalHostedButton(retries) {
            var container = document.getElementById('paypal-container-KP6G4QB99UCEC');

            if (!container) {
              return;
            }

            if (container.hasChildNodes()) {
              return;
            }

            if (window.paypal && window.paypal.HostedButtons) {
              window.paypal.HostedButtons({
                hostedButtonId: 'KP6G4QB99UCEC'
              }).render('#paypal-container-KP6G4QB99UCEC');
              return;
            }

            if (retries > 0) {
              window.setTimeout(function () {
                renderPayPalHostedButton(retries - 1);
              }, 250);
            }
          })(20);
        `}
      </Script>

      <Stack gap="xl">
        <Box>
          <Title order={2} my="md">
            Donate via PayPal or Venmo
          </Title>
          <Text mb="md">
            Use the secure PayPal checkout below to donate with PayPal or Venmo.
          </Text>
          <Box
            id="paypal-container-KP6G4QB99UCEC"
            style={{
              display: 'block',
              width: '100%',
              maxWidth: 420,
              minWidth: 280,
              minHeight: 120,
              overflow: 'visible',
            }}
          />
        </Box>

        <Box>
          <Title order={2} my="md">
            Donate via Benevity
          </Title>
          <Text mb="sm">
            If your company supports Benevity, you can donate directly through your corporate giving portal. Simply log in to your company’s Benevity page and search for: &quot;GoLive Musician’s League&quot;
          </Text>

          <Anchor
            href="https://benevity.com"
            target="_blank"
            rel="noopener noreferrer">
            <Button variant="light">Go to Benevity</Button>
          </Anchor>
        </Box>

        <Box>
          <Title order={3} mb="xs">
            Donate via Venmo
          </Title>

          <Text mb="md">
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
