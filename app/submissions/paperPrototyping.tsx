import React from 'react';

const PaperPrototyping = () => (
  <div style={styles.container}>
    <h1 style={styles.heading1}>5. Paper Prototyping & Low-Fidelity Testing</h1>

    <h1 style={styles.heading1}>(1) Prototype Photos</h1>
    
    <div style={styles.imageContainer}>
      <img 
        src="/task_1.jpg" 
        alt="Task1" 
        style={styles.image}
      />
    </div>
    
    <div style={styles.imageContainer}>
      <img 
        src="/task_2_1.jpg" 
        alt="Task2" 
        style={styles.image}
      />
    </div>

    <br></br>

    <h1 style={styles.heading1}>(2) Our Briefing</h1>
    <p style={styles.paragraph}>
      <b>Purpose of the Application</b>: AcademiaConnect is a platform designed to help students and professors connect more easily for research collaboration and academic opportunities. It aims to address the difficulties international students face in finding the right professors, programs, or research labs. Professors also benefit by discovering students with aligned research goals and skills. The platform provides both natural language search and keyword-based search options to simplify the process.
    </p>
    <p style={styles.paragraph}>
      <b>Background Information</b>: Finding the right academic match can be challenging for both students and professors. Students often struggle to manually sift through professor profiles, research papers, and institutional information to find the right opportunities. Professors, in turn, have trouble identifying students whose interests and expertise align with their projects. Our platform allows both parties to streamline this process with personalized search features and built-in messaging tools.
    </p>
    <p style={styles.paragraph}>
      <b>Use Case Summary</b>: 
      (1) Students Can input interests using keywords or natural language (e.g., “AI research in healthcare”) to find suitable professors, programs, or labs.
(2) Professors: Can create listings for open research positions and search for students whose skills match their projects.
(3) Both: Can communicate through an integrated messaging tool to facilitate collaboration.
    </p>
    
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

export default PaperPrototyping;