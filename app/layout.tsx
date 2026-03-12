import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Voting App',
  description: 'Frontend for the voting app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
