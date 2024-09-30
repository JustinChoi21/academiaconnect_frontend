import React from "react";

const TaskAnalysis = () => (
  <div style={styles.container}>
    <h1 style={styles.heading1}>Task Analysis</h1>

    <h2 style={styles.heading2}>1. Traditional Keyword Search</h2>
    <p style={styles.paragraph}><strong>Goal:</strong> Allow users to find research collaborators through a keyword-based search system.</p>
    <p style={styles.paragraph}><strong>Subtasks:</strong></p>
    <ol style={styles.list}>
      <li>- Enter relevant keywords related to research interests (e.g., &quot;machine learning,&quot; &quot;organic chemistry&quot;).</li>
      <li>- Apply filters to refine the search (e.g., by location, university, or publication count).</li>
      <li>- Browse the search results, including collaborator profiles that match the keywords.</li>
      <li>- Review detailed profiles to assess their research background, projects, and publications.</li>
    </ol>

    <br />
    <h2 style={styles.heading2}>2. AI-Powered Chat / Natural Language Communication</h2>
    <p style={styles.paragraph}><strong>Goal:</strong> Enable users to find research collaborators by interacting with an AI-based system that understands natural language inputs.</p>
    <p style={styles.paragraph}><strong>Subtasks:</strong></p>
    <ol style={styles.list}>
      <li>- Open the AI-powered chat interface.</li>
      <li>- Input natural language queries (e.g., &quot;I&apos;m looking for a professor specializing in AI and healthcare applications, particularly someone with experience in clinical data analysis and machine learning algorithms for medical diagnostics. Can you show me profiles of professors who have published papers in these areas in the last 5 years?&quot; or &quot;I want to find students interested in computer science, particularly those working on machine learning and artificial intelligence for healthcare solutions. It would be helpful if they had experience with coding and are familiar with techniques for data analysis, neural networks, or deep learning. Additionally, knowledge in Python, TensorFlow, or PyTorch would be valuable.&quot;).</li>
      <li>- The AI processes the request and provides personalized results based on the user&apos;s criteria and research interests.</li>
      <li>- The AI offers suggestions, including profiles and relevant details, which the user can review.</li>
      <li>- If needed, refine the search through follow-up natural language questions.</li>
    </ol>

    <br />
    <h2 style={styles.heading2}>3. Setting Up a Profile</h2>
    <p style={styles.paragraph}><strong>Goal:</strong> Create a profile with detailed academic and research information.</p>
    <p style={styles.paragraph}><strong>Subtasks:</strong></p>
    <ol style={styles.list}>
      <li>- Fill out personal information (name, education, current position).</li>
      <li>- Add research interests, skills, and publications.</li>
      <li>- Upload a CV and other supporting documents.</li>
      <li>- Save and publish the profile to make it visible to others.</li>
    </ol>

    <br />
    <h2 style={styles.heading2}>4. Facilitating Communication Between Matched Professors and Students</h2>
    <p style={styles.paragraph}><strong>Goal:</strong> Allow matched professors and students to communicate efficiently through the platform.</p>
    <p style={styles.paragraph}><strong>Subtasks:</strong></p>
    <ol style={styles.list}>
      <li>- Professors and students can send and receive messages directly within the platform.</li>
      <li>- Users can set up meetings or call through an integrated scheduling tool.</li>
      <li>- The platform supports real-time chat for quicker communication when needed.</li>
      <li>- Users can share files, such as research papers or documents, through the messaging system.</li>
    </ol>
  </div>
);

const styles = {
  container: {
    lineHeight: "1.6",
    padding: "20px",
    backgroundColor: "#fff",
    color: "#000",
  },
  heading1: {
    fontSize: "24px",
    marginBottom: "10px",
    color: "#000",
  },
  heading2: {
    fontSize: "20px",
    marginTop: "20px",
    marginBottom: "10px",
    color: "#000",
  },
  paragraph: {
    fontSize: "16px",
    marginBottom: "15px",
    color: "#000",
  },
  list: {
    marginBottom: "15px",
    paddingLeft: "20px",
    color: "#000",
  },
};

export default TaskAnalysis;