import '@/app/(ui)/global.css';
// 폰트 불러오기
import { inter } from '@/app/(ui)/fonts';


export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      {/* body 태그에 폰트 적용 */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
