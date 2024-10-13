import React from 'react';

const Storyboards = () => (
  <div style={styles.container}>
    <h1 style={styles.heading1}>4. Storyboards</h1>

    <h2 style={styles.heading2}>Task #1 Traditional Keyword Search</h2>
    
    <div style={styles.imageContainer}>
      <img 
        src="/task_1.jpg" 
        alt="Task1" 
        style={styles.image}
      />
    </div>

    <p style={styles.paragraph}>
      <strong>Why this sketch?</strong> This sketch clearly outlines a scenario where a student and a professor use a keyword-based search system to find relevant collaborators.
    </p>

    <h2 style={styles.heading2}>Task #2 AI-Powered Chat / Natural Language Communication</h2>
    
    <div style={styles.imageContainer}>
      <img 
        src="/task_2.jpg" 
        alt="Task1" 
        style={styles.image}
      />
    </div>

    <p style={styles.paragraph}>
      <strong>Why this sketch?</strong> This sketch focuses on the process of interacting with an AI-based system using natural language input. The user journey is depicted from the start of inputting a query through the AI processing it and returning relevant profiles based on the specific needs of the user. Additionally, the sketch shows how the system can provide valuable information by comparing the profile of the potential collaboartors.
    </p>

    <h2 style={styles.heading2}>Task #3 Setting Up a Profile</h2>
    
    <div style={styles.imageContainer}>
      <img 
        src="/task_3.jpg" 
        alt="Task1" 
        style={styles.image}
      />
    </div>

    <p style={styles.paragraph}>
      <strong>Why this sketch?</strong> The sketch for this task illustrates the step-by-step process of creating a profile for both students and professors.
    </p>

    <h2 style={styles.heading2}>Task #4 Facilitating Communication Between Matched Professors and Students</h2>
    
    <div style={styles.imageContainer}>
      <img 
        src="/task_4.jpg" 
        alt="Task1" 
        style={styles.image}
      />
    </div>

    <p style={styles.paragraph}>
      <strong>Why this sketch?</strong> This sketch highlights how the platform enables communication between matched professors and students.
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

export default Storyboards;