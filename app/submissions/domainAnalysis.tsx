import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: blue;
  text-decoration: none;
`;

const DomainAnalysis = () => (
  <div style={styles.container}>
    <h1 style={styles.heading1}>3. Domain Analysis</h1>

    <h2 style={styles.heading2}>Entity-Relationship Diagram (ERD)</h2>
    
    <div style={styles.imageContainer}>
      <img 
        src="/AcademiaConnect ER Diagram.drawio.png" 
        alt="Entity-Relationship Diagram" 
        style={styles.image}
      />
    </div>

    <p style={styles.paragraph}>
      We’ve drawn the ER Diagram using <StyledLink href='https://www.drawio.com/'>drawio.com</StyledLink>. The Entity-Relationship Diagram (ERD) above illustrates the key entities and their relationships in our system:
    </p>

    <h3 style={styles.heading3}>Key Entities:</h3>
    <ul style={styles.list}>
      <li><strong>Professors and Students:</strong> These are the main user types in our system. Both can create profiles and have research areas.</li>
      <li><strong>Profile:</strong> Both Professors and Students create profiles containing their information.</li>
      <li><strong>Research Areas:</strong> This entity represents the various fields of study or research topics. Both Professors and Students are associated with Research Areas.</li>
      <li><strong>Messages:</strong> This entity represents the communication between Professors and Students. Both can send and receive messages.</li>
    </ul>

    <h3 style={styles.heading3}>Key Relationships:</h3>
    <ul style={styles.list}>
      <li><strong>Professors and Students</strong> both create one <strong>Profile</strong> each.</li>
      <li><strong>Professors and Students</strong> can have multiple <strong>Research Areas</strong>, and each <strong>Research Area</strong> can be associated with multiple <strong>Professors and Students</strong>.</li>
      <li><strong>Professors and Students</strong> can send and receive multiple <strong>Messages</strong>.</li>
    </ul>

  </div>
);

const styles = {
  container: {
    lineHeight: '1.6',
    padding: '20px',
    backgroundColor: '#fff',
    color: '#000',
  },
  heading1: {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#000',
  },
  heading2: {
    fontSize: '20px',
    marginTop: '20px',
    marginBottom: '10px',
    color: '#000',
  },
  heading3: {
    fontSize: '18px',
    marginTop: '15px',
    marginBottom: '8px',
    color: '#000',
  },
  paragraph: {
    fontSize: '16px',
    marginBottom: '15px',
    color: '#000',
  },
  list: {
    marginBottom: '15px',
    paddingLeft: '20px',
    color: '#000',
  },
  imageContainer: {
    width: '100%',
    marginBottom: '20px',
    textAlign: 'center' as const,
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    border: '1px solid #ddd',
    borderRadius: '4px',
    padding: '5px',
  },
};

export default DomainAnalysis;