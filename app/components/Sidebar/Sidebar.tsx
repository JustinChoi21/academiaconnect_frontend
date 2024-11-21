'use client';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { auth } from '@/app/firebase/config';
import { signOut } from 'firebase/auth';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { 
      icon: '🏠',
      label: 'Home',
      path: '/home',
    },
    {
      icon: '🔍',
      label: 'Search',
      path: '/search',
    },
    {
      icon: '💬',
      label: 'Communication',
      path: '/chat',
    },
    {
      icon: '👤',
      label: 'My Profile',
      path: '/profile',
    },
  ];

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      console.error('Error occurred during sign out:', error);
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
              href={item.path!} 
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