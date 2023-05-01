import Link from 'next/link';
import './globals.css';
import LoginBtn from './LoginBtn';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  let session = await getServerSession(authOptions);
  console.log(session);
  return (
    <html lang='en'>
      <body>
        <header>
          <div className='navbar'>
            <Link
              href='/'
              className='logo'>
              Appleforum
            </Link>
            <Link href='/list'>List</Link>
            <LoginBtn user={session && session.user} />
          </div>
        </header>

        {children}
        <footer></footer>
      </body>
    </html>
  );
}
