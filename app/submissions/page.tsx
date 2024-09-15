"use client";

import React, { useState, useEffect } from 'react';
import ProposalContent from './proposalContent';
import TBD1Content from './tbd1Content';
import TBD2Content from './tbd2Content';
import TBD3Content from './tbd3Content';

const SubmissionPage = () => {
  const [currentMenu, setCurrentMenu] = useState('proposal');
  const [menuOpen, setMenuOpen] = useState(false); // State to control menu visibility on mobile
  const [isMobile, setIsMobile] = useState(false); // To detect mobile screen size

  // Effect to detect mobile screen size and adjust layout accordingly
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Call it once to set the initial state
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderContent = () => {
    switch (currentMenu) {
      case 'proposal':
        return <ProposalContent />;
      case 'TBD1':
        return <TBD1Content />;
      case 'TBD2':
        return <TBD2Content />;
      case 'TBD3':
        return <TBD3Content />;
      default:
        return <p>Select a menu item to see its content.</p>;
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu visibility
  };

  return (
    <div style={styles.container}>
      {/* Hamburger Menu for mobile */}
      {isMobile && (
        <button style={styles.hamburger} onClick={toggleMenu}>
          ☰
        </button>
      )}

      {/* Sidebar */}
      <div
        style={{
          ...styles.sidebar,
          transform: menuOpen || !isMobile ? 'translateX(0)' : 'translateX(-110%)', // Ensure sidebar is fully off-screen on mobile
        }}
      >
        <div style={styles.header}>
          <h3 style={styles.headerTitle}>CS 615 User Interface Design</h3>
          <p style={styles.headerSubtitle}>Team Project</p>
          <h4 style={styles.headerSubtitle}>Academia Connect</h4>
        </div>

        <hr style={styles.separator} />

        <ul style={styles.menuList}>
          <li
            onClick={() => {
              setCurrentMenu('proposal');
              setMenuOpen(false); // Close menu when an item is clicked on mobile
            }}
            style={currentMenu === 'proposal' ? styles.activeMenuItem : styles.menuItem}
          >
            Proposal
          </li>
          <li
            onClick={() => {
              setCurrentMenu('TBD1');
              setMenuOpen(false);
            }}
            style={currentMenu === 'TBD1' ? styles.activeMenuItem : styles.menuItem}
          >
            TBD1
          </li>
          <li
            onClick={() => {
              setCurrentMenu('TBD2');
              setMenuOpen(false);
            }}
            style={currentMenu === 'TBD2' ? styles.activeMenuItem : styles.menuItem}
          >
            TBD2
          </li>
          <li
            onClick={() => {
              setCurrentMenu('TBD3');
              setMenuOpen(false);
            }}
            style={currentMenu === 'TBD3' ? styles.activeMenuItem : styles.menuItem}
          >
            TBD3
          </li>
        </ul>

        {/* Home Link */}
        <a href="/" style={styles.homeButton}>
          Home
        </a>
      </div>

      {/* Content Area */}
      <div
        style={{
          ...styles.content,
          width: isMobile ? '100%' : 'calc(100% - 250px)', // Full width on mobile, adjust for sidebar on desktop
          marginLeft: isMobile ? '0' : '250px', // Align content with sidebar on desktop
          marginTop: isMobile ? '60px' : '0', // Add margin on mobile to avoid overlap with hamburger button
        }}
      >
        {renderContent()}
      </div>
    </div>
  );
};

// Responsive CSS with media queries for mobile
const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    flexDirection: 'row',
  },
  hamburger: {
    display: 'block',
    position: 'absolute',
    top: '10px',
    left: '10px',
    fontSize: '24px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    zIndex: 1000, // Ensure the hamburger is on top
  },
  sidebar: {
    width: '250px', // Fixed width for sidebar on desktop
    backgroundColor: '#f4f4f4',
    padding: '20px',
    paddingTop: '60px', // Push content down to avoid overlap with the hamburger button
    borderRight: '1px solid #ccc',
    position: 'fixed',
    top: '0',
    left: '0',
    height: '100%',
    zIndex: 999, // Ensure sidebar overlays content
    transition: 'transform 0.3s ease-in-out',
  },
  header: {
    paddingBottom: '10px',
  },
  headerTitle: {
    color: '#333',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  headerSubtitle: {
    color: '#333',
    marginBottom: '5px',
  },
  separator: {
    marginTop: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
  },
  menuList: {
    listStyleType: 'none',
    padding: 0,
  },
  menuItem: {
    padding: '10px 0',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: '#333',
    textDecoration: 'none',
  },
  activeMenuItem: {
    padding: '10px 0',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: '#0070f3',
    textDecoration: 'underline',
  },
  content: {
    padding: '20px',
  },
  homeButton: {
    marginTop: '20px',
    padding: '10px 15px',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    textAlign: 'center',
    fontSize: '16px',
    display: 'block',
    textDecoration: 'none', // Ensure it's a proper link
  },
};

export default SubmissionPage;
