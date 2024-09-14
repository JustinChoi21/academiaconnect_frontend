"use client";

import React, { useState } from 'react';
import ProposalContent from './proposalContent';
import TBD1Content from './tbd1Content';
import TBD2Content from './tbd2Content';
import TBD3Content from './tbd3Content';

const SubmissionPage = () => {
  const [currentMenu, setCurrentMenu] = useState('proposal');

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

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <div style={styles.header}>
          <h3 style={styles.headerTitle}>CS 615 User Interface Design</h3>
          <p style={styles.headerSubtitle}>Team Project</p>
          <h4 style={styles.headerSubtitle}>Academia Connect</h4>
        </div>

        <hr style={styles.separator} />

        <ul style={styles.menuList}>
          <li
            onClick={() => setCurrentMenu('proposal')}
            style={currentMenu === 'proposal' ? styles.activeMenuItem : styles.menuItem}
          >
            Proposal
          </li>
          <li
            onClick={() => setCurrentMenu('TBD1')}
            style={currentMenu === 'TBD1' ? styles.activeMenuItem : styles.menuItem}
          >
            TBD1
          </li>
          <li
            onClick={() => setCurrentMenu('TBD2')}
            style={currentMenu === 'TBD2' ? styles.activeMenuItem : styles.menuItem}
          >
            TBD2
          </li>
          <li
            onClick={() => setCurrentMenu('TBD3')}
            style={currentMenu === 'TBD3' ? styles.activeMenuItem : styles.menuItem}
          >
            TBD3
          </li>
          <li style={styles.menuItem}>
            <a href="/">Home</a>
          </li>
        </ul>
      </div>

      {/* Content Area */}
      <div style={styles.content}>
        {renderContent()}
      </div>
    </div>
  );
};

// Basic inline CSS for layout
const styles = {
  container: {
    display: 'flex',
    height: '100%',
  },
  sidebar: {
    width: '20%',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    borderRight: '1px solid #ccc',
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
    width: '80%',
    padding: '20px',
  },
};

export default SubmissionPage;