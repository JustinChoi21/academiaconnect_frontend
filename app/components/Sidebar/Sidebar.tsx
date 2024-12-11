'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/app/lib/supabase';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    {
      icon: '🔍',
      label: 'Search',
      path: '/search',
    },
    {
      icon: '💬',
      label: 'Communication',
      path: '/chat'
    },
    {
      icon: '👤',
      label: 'Profile',
      path: '/profile',
    },
  ];

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      router.push('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const bottomMenuItems = [
    {
      icon: '⚙️',
      label: 'Settings',
      path: '/settings',
    },
    {
      icon: '🚪',
      label: 'Sign Out',
      onClick: handleSignOut,
    },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <Link href="/home" className="text-lg font-bold text-[#5e5e5e] hover:text-gray-300">
          AcademiaConnect
        </Link>
      </div>
      <div className={styles.menuItems}>
        {menuItems.map((item, index) => (
          <Link 
            href={item.path} 
            key={index}
            className={`${styles.menuItem} ${pathname === item.path ? styles.active : ''}`}
          >
            <span className={styles.icon}>{item.icon}</span>
            <span className={styles.label}>{item.label}</span>
          </Link>
        ))}
      </div>

      <div className={styles.bottomMenu}>
        {bottomMenuItems.map((item, index) => (
          item.onClick ? (
            <button 
              key={index}
              onClick={item.onClick}
              className={`${styles.menuItem} ${styles.menuItemButton}`}
              type="button"
            >
              <span className={styles.icon}>{item.icon}</span>
              <span className={styles.label}>{item.label}</span>
            </button>
          ) : (
            <Link 
              href={item.path} 
              key={index}
              className={`${styles.menuItem} ${pathname === item.path ? styles.active : ''}`}
            >
              <span className={styles.icon}>{item.icon}</span>
              <span className={styles.label}>{item.label}</span>
            </Link>
          )
        ))}
      </div>
    </div>
  );
} 