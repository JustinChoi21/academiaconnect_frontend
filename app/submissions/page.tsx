"use client";

import React, { useState, useEffect, CSSProperties } from 'react';
import ProposalContent from './proposalContent';
import UserAnalysis from './userAnalysis';
import TaskAnalysis from './taskAnalysis';
import DomainAnalysis from './domainAnalysis';
import Storyboards from './storyboards';
import PaperPrototyping from './paperPrototyping';
import ComputerPrototyping from './computerPrototyping';
import FinalImplement from './finalImplement';

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
      case 'UserAnalysis':
        return <UserAnalysis />;
      case 'TaskAnalysis':
        return <TaskAnalysis />;
      case 'DomainAnalysis':
        return <DomainAnalysis />;
      case 'Storyboards':
        return <Storyboards />;
      case 'PaperPrototyping':
        return <PaperPrototyping />;
      case 'ComputerPrototyping':
        return <ComputerPrototyping />;
      case 'FinalImplement':
        return <FinalImplement />;
      default:
        return <p>Select a menu item to see its content.</p>;
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu visibility
  };

  return (
    <div style={styles.container as CSSProperties}>
      {/* Hamburger Menu for mobile */}
      {isMobile && (
        <button style={styles.hamburger as CSSProperties} onClick={toggleMenu}>
          ☰
        </button>
      )}

      {/* Sidebar */}
      <div
        style={{
          ...styles.sidebar,
          transform: menuOpen || !isMobile ? 'translateX(0)' : 'translateX(-110%)', // Ensure sidebar is fully off-screen on mobile
        } as CSSProperties}
      >
        <div style={styles.header as CSSProperties}>
          <h3 style={styles.headerTitle as CSSProperties}>CS 615 User Interface Design</h3>
          <p style={styles.headerSubtitle as CSSProperties}>Team Project</p>
          <h4 style={styles.headerSubtitle as CSSProperties}>Academia Connect</h4>
        </div>

        <hr style={styles.separator as CSSProperties} />

        <ul style={styles.menuList as CSSProperties}>
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
              setCurrentMenu('UserAnalysis');
              setMenuOpen(false);
            }}
            style={currentMenu === 'UserAnalysis' ? styles.activeMenuItem : styles.menuItem}
          >
            User Analysis
          </li>
          <li
            onClick={() => {
              setCurrentMenu('TaskAnalysis');
              setMenuOpen(false);
            }}
            style={currentMenu === 'TaskAnalysis' ? styles.activeMenuItem : styles.menuItem}
          >
            Task Analysis
          </li>
          <li
            onClick={() => {
              setCurrentMenu('DomainAnalysis');
              setMenuOpen(false);
            }}
            style={currentMenu === 'DomainAnalysis' ? styles.activeMenuItem : styles.menuItem}
          >
            Domain Analysis
          </li>
          <li
            onClick={() => {
              setCurrentMenu('Storyboards');
              setMenuOpen(false);
            }}
            style={currentMenu === 'Storyboards' ? styles.activeMenuItem : styles.menuItem}
          >
            Storyboards
          </li>
          <li
            onClick={() => {
              setCurrentMenu('PaperPrototyping');
              setMenuOpen(false);
            }}
            style={currentMenu === 'PaperPrototyping' ? styles.activeMenuItem : styles.menuItem}
          >
            PaperPrototyping
          </li>
          <li
            onClick={() => {
              setCurrentMenu('ComputerPrototyping');
              setMenuOpen(false);
            }}
            style={currentMenu === 'ComputerPrototyping' ? styles.activeMenuItem : styles.menuItem}
          >
            ComputerPrototyping
          </li>
          <li
            onClick={() => {
              setCurrentMenu('FinalImplement');
              setMenuOpen(false);
            }}
            style={currentMenu === 'FinalImplement' ? styles.activeMenuItem : styles.menuItem}
          >
            Final Implementation
          </li>
        </ul>

        {/* Home Link */}
        <a href="/" style={styles.homeButton as CSSProperties}>
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
        } as CSSProperties}
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
