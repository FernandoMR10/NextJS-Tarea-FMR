import '@/app/ui/global.css';
import { adamina } from '@/app/ui/fonts'; // Asegúrate de que la ruta sea correcta

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${adamina.className} antialiased`}> 
        {children}
      </body>
    </html>
  );
}