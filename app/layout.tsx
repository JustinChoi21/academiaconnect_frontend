'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/config';
import Sidebar from './components/Sidebar/Sidebar';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const isAuthPage = pathname === '/login' || pathname === '/signup';

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return null; // 또는 로딩 스피너 표시
  }

  return (
    <html lang="en" className={inter.className}>
      <body>
        <div style={{ display: 'flex' }}>
          {!isAuthPage && user && <Sidebar />}
          <main style={{ flex: 1, marginLeft: !isAuthPage && user ? '280px' : '0' }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
