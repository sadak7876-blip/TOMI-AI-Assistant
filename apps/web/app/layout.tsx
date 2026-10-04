import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TOMI AI',
  description: 'Personal AI assistant for chat, memory, and tasks',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
