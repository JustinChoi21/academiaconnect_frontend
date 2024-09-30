import React from 'react';

const UserAnalysis = () => (
  <div style={styles.container}>
    <h1 style={styles.heading1}>User Analysis</h1>

    <h2 style={styles.heading2}>1. Personas</h2>

    <h3 style={styles.heading3}>Persona 1: Student (Alex Johnson)</h3>
    <ul style={styles.list}>
      <li><strong>Age:</strong> 26</li>
      <li><strong>Gender:</strong> Male</li>
      <li><strong>Education:</strong> PhD candidate in Computer Science</li>
      <li><strong>Computer Experience:</strong> Advanced; highly proficient in programming and research tools</li>
      <li><strong>Motivation:</strong> Seeking opportunities and resources to advance his research</li>
      <li><strong>Domain Experience:</strong> Extensive experience in AI and machine learning research</li>
      <li><strong>Environment:</strong> Primarily uses the software on his laptop</li>
      <li><strong>Distractions:</strong> Interruptions from assignments and project meetings</li>
      <li><strong>Relationships/Communication:</strong> Frequently communicates with advisors via email and with peers through messaging platforms like Discord and WhatsApp</li>
      <li><strong>Goals:</strong> To find professors aligned with his research interests</li>
      <li><strong>Challenges:</strong> Time constraints due to academic workload and balancing research and collaboration</li>
    </ul>

    <h3 style={styles.heading3}>Persona 2: Professor (Dr. Emily Carter)</h3>
    <ul style={styles.list}>
      <li><strong>Age:</strong> 41</li>
      <li><strong>Gender:</strong> Female</li>
      <li><strong>Education:</strong> PhD in Cognitive Science</li>
      <li><strong>Computer Experience:</strong> Intermediate; uses software for research, student supervision, and academic publications</li>
      <li><strong>Motivation:</strong> Finding students who align with her research interests to mentor and collaborate with on research projects</li>
      <li><strong>Domain Experience:</strong> 15 years of experience in psychology and human-computer interaction research</li>
      <li><strong>Environment:</strong> Primarily uses the software in her office, occasionally during conferences or at home</li>
      <li><strong>Distractions:</strong> Administrative work and student supervision</li>
      <li><strong>Relationships/Communication:</strong> Frequent communication with students, department heads, and academic collaborators via email and research platforms</li>
      <li><strong>Goals:</strong> To recruit students who can contribute to her research projects and collaborate on publications</li>
      <li><strong>Challenges:</strong> Limited time due to administrative responsibilities and teaching duties</li>
    </ul>

    <br></br>
    <h2 style={styles.heading2}>2. Interview Results</h2>

    <h3 style={styles.heading3}>(1) Professor, Department of Chemistry, Brandeis University</h3>
    <p style={styles.paragraph}><strong>Q: How do you typically find students to work in your lab or collaborate on research projects?</strong></p>
    <p style={styles.paragraph}>A: I usually find students through a combination of direct applications, recommendations from colleagues, and my involvement in various academic events, such as conferences and seminars. Graduate students often approach me after learning about my research during class or through my publications. Additionally, I sometimes receive inquiries from students who come across my lab's work online.</p>

    <p style={styles.paragraph}><strong>Q: Are there specific platforms or networks you rely on when searching for potential students?</strong></p>
    <p style={styles.paragraph}>A: There isn't one specific platform that I rely on, but I do use academic platforms like ResearchGate and Google Scholar to identify potential collaborators. For student recruitment, the university's internal system and LinkedIn are helpful in connecting with students who share similar research interests.</p>

    <p style={styles.paragraph}><strong>Q: What are some challenges you face when trying to find students with aligned research interests?</strong></p>
    <p style={styles.paragraph}>A: One of the biggest challenges is ensuring that students not only have the necessary academic background but also have a genuine passion for the type of research we do in my lab. Sometimes students are eager to join but might not fully grasp the specifics of our research focus, leading to mismatched expectations. Additionally, balancing the time to properly assess applicants with my other responsibilities can be difficult.</p>

    <p style={styles.paragraph}><strong>Q: Given your busy schedule with research, teaching, and administrative duties, how much time do you typically have to dedicate to finding and mentoring students?</strong></p>
    <p style={styles.paragraph}>A: Unfortunately, the time I have for actively seeking out new students is limited. Between teaching, research, and administrative duties, I often rely on the students who directly reach out to me or on recommendations from colleagues. Once students join my lab, I dedicate a significant portion of my time to mentoring them, as it's one of the most rewarding parts of my job.</p>

    <p style={styles.paragraph}><strong>Q: Is there anything else you'd like to share regarding your experiences with student collaboration that you think would be helpful for our project?</strong></p>
    <p style={styles.paragraph}>A: I think collaboration is most effective when there is clear communication from the start. Students should feel comfortable asking questions and professors need to provide the right mentorship. A platform that facilitates not only the matching but also smooth, ongoing communication would be highly beneficial for both parties.</p>

    <br></br>
    <h3 style={styles.heading3}>(2) Student Interviews</h3>
    <p style={styles.paragraph}>Student interviews need to be completed.</p>

    <br></br>
    <h3 style={styles.heading3}>(2) Student Interviews</h3>
    <p style={styles.paragraph}>Student interviews need to be completed.</p>

    <br></br>
    <h2 style={styles.heading2}>3. Conclusions from User Analysis</h2>
    <p style={styles.paragraph}>This section needs to be completed after conducting all interviews and analyzing the results.</p>
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
};

export default UserAnalysis;