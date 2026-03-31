import '@/app/ui/global.css';
import { adamina } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${adamina.className} antialiased`}> 
        {children}
        <footer className='py-10 flex justify-center item-center'>Hecho con ❤️ por Vercel</footer>
      </body>
    </html>
  );
}