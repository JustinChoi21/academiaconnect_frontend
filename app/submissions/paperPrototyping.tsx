import React from 'react';

const PaperPrototyping = () => (
  <div style={styles.container}>
    <h1 style={styles.heading1}>5. Paper Prototyping & Low-Fidelity Testing</h1>

    <h1 style={styles.heading1}>(1) Prototype Photos</h1>
    
    <div style={styles.imageContainer}>
      <img 
        src="/prototyping_main_page.jpg" 
        alt="prototyping main_page" 
        style={styles.image}
      />
    </div>
    
    <div style={styles.imageContainer}>
      <img 
        src="/prototyping_advanced_search.jpg" 
        alt="prototyping_advanced_search" 
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
      (1) Students can input interests using keywords or natural language (e.g., “AI research in healthcare”) to find suitable professors, programs, or labs.
      (2) Professors can create listings for open research positions and search for students whose skills match their projects.
      (3) Both can communicate through an integrated messaging tool to facilitate collaboration.
    </p>

    <br></br>

    <h1 style={styles.heading1}>(3) Scenario Tasks</h1>
    <ul style={styles.list}>
      <li>
        <b>Task 1: Find a Professor for Collaboration</b> <br />
        Search for a professor working in the field of AI and healthcare, and explore their research profile.
      </li>
      <li>
        <b>Task 2: Set Up a Student Profile</b> <br />
        Create a student profile by filling out your academic background, research interests, and skills.
      </li>
      <li>
        <b>Task 3: Message a Matched Professor</b> <br />
        Find a professor whose research aligns with your interests and send them a message to introduce yourself and ask about collaboration opportunities.
      </li>
    </ul>

    <br></br>

    <h1 style={styles.heading1}>(4) Observation</h1>

    <p style={styles.paragraph}>
      <b>Task 1: Find a Professor for Collaboration</b> <br />
      <b>Observations</b>: 
      (1) Users quickly identified the search bar and entered keywords related to their research interests.
      (2) Users expected the search results to be displayed in a list format with brief summaries.
      (3) Users appreciated the ability to filter results by relevance, location, and other criteria.
      (4) Users were confused by the “Advanced Search” option and expected more guidance on its use.
      (5) Users were satisfied with the level of detail provided in the professor profiles and found the information relevant.
    </p>
    <p style={styles.paragraph}>
      <b>Task 2: Set Up a Student Profile</b> <br />
      <b>Observations</b>: 
      (1) Users navigated to the profile creation page easily and found the form fields intuitive.
      (2) Users appreciated the option to import academic information from LinkedIn or other sources.
      (3) Users expected more guidance on how to optimize their profiles for better matching results.
      (4) Users found the process of adding research interests and skills straightforward and relevant.
      (5) Users were satisfied with the level of customization available for their profiles.
    </p>
    <p style={styles.paragraph}>
      <b>Task 3: Message a Matched Professor</b> <br />
      <b>Observations</b>: 
      (1) Users easily located the messaging feature on the professor’s profile page.
      (2) Users expected more guidance on how to craft an effective introductory message.
      (3) Users appreciated the ability to attach files or links to their messages.
      (4) Users found the messaging interface simple and user-friendly.
      (5) Users expected more features for tracking and managing their communication history.

    <br></br>

    <h1 style={styles.heading1}>(5) Prototype iteration</h1>
    <p style={styles.paragraph}>
      Based on the observations and feedback from users, we plan to make the following changes to our prototype:
    </p>
    <ul style={styles.list}>
      <li>
        Improve the guidance and instructions provided to users, especially for advanced features like the “Advanced Search” option.
      </li>
      <li>
        Enhance the messaging feature with tips for effective communication and tools for managing conversations.
      </li>
      <li>
        Optimize the profile creation process with more customization options and suggestions for improving matching results.
      </li>
      <li>
        Implement a feedback mechanism for users to report issues or suggest improvements during testing.
      </li>
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