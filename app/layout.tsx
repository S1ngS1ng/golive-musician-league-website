import { type ReactNode } from 'react';
import '@mantine/core/styles.css';
import {
  MantineProvider,
  ColorSchemeScript,
  mantineHtmlProps,
} from '@mantine/core';
import { theme } from '../theme';
import { NavHeader } from '../components/nav-header/nav-header';

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <title>GoLive Musician&#39;s League</title>
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          <NavHeader />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
