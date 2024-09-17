import React from 'react';

const ProposalContent = () => (
  <div style={styles.container}>
    <h1 style={styles.heading1}>Group Name: AcademiaConnect</h1>
    <p style={styles.paragraph}>
      <strong>Group Members:</strong> Abdul Saif Mohammed, Eshanth Kumar Lal Das, Heechul Choi, Paul Maynard
    </p>

    <h2 style={styles.heading2}>1. Problem Statement</h2>
    <p style={styles.paragraph}>
      International students often struggle to find the right professors and universities for pursuing their Master&apos;s and Ph.D. studies in the U.S. They face difficulties in identifying professors whose research aligns with their interests, understanding professor personalities, and finding academic environments that suit their learning style and goals. The process is time-consuming, as students must manually review numerous profiles, publications, and institutional information. A system that allows students to input their preferences in natural language could simplify and personalize the search process, making it easier to find the right fit.
    </p>
    <p style={styles.paragraph}>
      Not only students seeking a professor but also professors looking for research collaborators, face challenges in finding suitable academic matches. Sometimes professors struggle to identify students with the right skills and goals to contribute to their labs. Professors also need an efficient way to post research lab openings or recruitment information. A platform that enables both natural language and traditional keyword-based searches could provide a solution, allowing students and professors to connect more easily and find appropriate research opportunities or collaborators.
    </p>

    <h2 style={styles.heading2}>2. User&apos;s Goals, Actions, and Potential Obstacles</h2>

    <h3 style={styles.heading3}>User&apos;s Goals:</h3>
    <ul style={styles.list}>
      <li><strong>Students:</strong>
        <ul style={styles.innerList}>
          <li>- Find professors whose research areas match the student&apos;s interests.</li>
          <li>- Identify professors who align with the student&apos;s preferred teaching and mentoring style.</li>
          <li>- Discover Master&apos;s and Ph.D. programs that offer strong research opportunities in the student&apos;s field of interest.</li>
        </ul>
      </li>
      <li><strong>Professors:</strong>
        <ul style={styles.innerList}>
          <li>- Identify students, both Master&apos;s and Ph.D., whose research goals and skills align with their lab&apos;s current projects.</li>
          <li>- Post recruitment listings for open research positions in their labs or programs.</li>
          <li>- Save time in the search process by receiving personalized recommendations based on their input.</li>
        </ul>
      </li>
    </ul>

    <h3 style={styles.heading3}>User&apos;s Actions:</h3>
    <ul style={styles.list}>
      <li><strong>Students:</strong>
        <ul style={styles.innerList}>
          <li>- Input research interests, desired professor traits, and academic goals using natural language (e.g., &quot;I want a professor who works on AI and is collaborative and approachable&quot;) or keywords (e.g., &quot;machine learning, data science&quot;).</li>
          <li>- Review recommended professors, available research positions, and programs.</li>
          <li>- Filter or refine the recommendations based on additional criteria, such as location, ranking, or program size.</li>
          <li>- Communicate with professors that match their needs.</li>
        </ul>
      </li>
      <li><strong>Professors:</strong>
        <ul style={styles.innerList}>
          <li>- Post detailed recruitment listings specifying the types of students they are looking for (e.g., Master&apos;s or Ph.D., specific research areas, experience, skills).</li>
          <li>- Search for students using either natural language or keyword-based inputs (e.g., &quot;Master&apos;s student with experience in machine learning&quot;).</li>
          <li>- Browse through student profiles that fit their lab&apos;s research needs.</li>
          <li>- Communicate with students that match their needs.</li>
        </ul>
      </li>
    </ul>

    <h3 style={styles.heading3}>Potential Obstacles:</h3>
    <ul style={styles.list}>
      <li>- Information on certain professors or universities may be outdated or incomplete.</li>
      <li>- The system might not fully understand the user&apos;s input due to variations in phrasing or terminology.</li>
      <li>- Limited availability of detailed professor data (e.g., professor&apos;s mentoring style) may reduce the quality of recommendations.</li>
    </ul>
  </div>
);

const styles = {
  container: {
    lineHeight: '1.6',
    padding: '20px',
    backgroundColor: '#fff', // White background
    color: '#000', // Black text color
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
  innerList: {
    paddingLeft: '20px',
    color: '#000',
  },
};

export default ProposalContent;
