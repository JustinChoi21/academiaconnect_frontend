import React from "react";

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

    <br />
    <h2 style={styles.heading2}>2. Interview Results</h2>

    <h3 style={styles.heading3}>(1) Professor, Brandeis University</h3>
    <p style={styles.paragraph}><strong>Q: How do you typically find students to work in your lab or collaborate on research projects?</strong></p>
    <p style={styles.paragraph}>A: I usually find students through a combination of direct applications, recommendations from colleagues, and my involvement in various academic events, such as conferences and seminars. Graduate students often approach me after learning about my research during class or through my publications. Additionally, I sometimes receive inquiries from students who come across my lab&apos;s work online.</p>

    <p style={styles.paragraph}><strong>Q: Are there specific platforms or networks you rely on when searching for potential students?</strong></p>
    <p style={styles.paragraph}>A: There isn&apos;t one specific platform that I rely on, but I do use academic platforms like ResearchGate and Google Scholar to identify potential collaborators. For student recruitment, the university&apos;s internal system and LinkedIn are helpful in connecting with students who share similar research interests.</p>

    <p style={styles.paragraph}><strong>Q: What are some challenges you face when trying to find students with aligned research interests?</strong></p>
    <p style={styles.paragraph}>A: One of the biggest challenges is ensuring that students not only have the necessary academic background but also have a genuine passion for the type of research we do in my lab. Sometimes students are eager to join but might not fully grasp the specifics of our research focus, leading to mismatched expectations. Additionally, balancing the time to properly assess applicants with my other responsibilities can be difficult.</p>

    <p style={styles.paragraph}><strong>Q: Given your busy schedule with research, teaching, and administrative duties, how much time do you typically have to dedicate to finding and mentoring students?</strong></p>
    <p style={styles.paragraph}>A: Unfortunately, the time I have for actively seeking out new students is limited. Between teaching, research, and administrative duties, I often rely on the students who directly reach out to me or on recommendations from colleagues. Once students join my lab, I dedicate a significant portion of my time to mentoring them, as it&apos;s one of the most rewarding parts of my job.</p>

    <p style={styles.paragraph}><strong>Q: Is there anything else you&apos;d like to share regarding your experiences with student collaboration that you think would be helpful for our project?</strong></p>
    <p style={styles.paragraph}>A: I think collaboration is most effective when there is clear communication from the start. Students should feel comfortable asking questions and professors need to provide the right mentorship. A platform that facilitates not only the matching but also smooth, ongoing communication would be highly beneficial for both parties.</p>

    <br />
    <h3 style={styles.heading3}>(2) Professor, Department of Computer Science, UMass Boston</h3>
    <p style={styles.paragraph}><strong>Q: How do you typically find students to work in your lab or collaborate on research projects?</strong></p>
    <p style={styles.paragraph}>A: Usually, most students I get have been in a course that I teach. They get exposed to the research I do that way. I tend to talk about research in one lecture each semester, and that sometimes is enough to get students. The other way is word of mouth, so a student talks to another student about me, and then that other student might contact me. That&apos;s why I don&apos;t search for students outside of the school.</p>

    <p style={styles.paragraph}><strong>Q: What are some challenges you face while trying to find students with aligned research interests?</strong></p>
    <p style={styles.paragraph}>A: The problem is usually finding students who are motivated and have the time available to dedicate to research. They have to have interest and availability, and they don&apos;t have that often.</p>

    <p style={styles.paragraph}><strong>Q: How much time do you typically have to dedicate to finding and mentoring students?</strong></p>
    <p style={styles.paragraph}>A: I would say about 20% of my time per week is probably mentoring students. Finding students is much less, about 0.1%. I&apos;m not actively looking for students as I have three students currently. If I had a grant and was looking for a student, then I would probably be looking outside, which is different.</p>

    <p style={styles.paragraph}><strong>Q: Is there anything else you&apos;d like to share regarding your experience with student collaboration that you think would be helpful for our project?</strong></p>
    <p style={styles.paragraph}>A: I think having clear roles and expectations would be very useful for all the intervenients. For the faculty, are they looking for people they just want to mentor, or do they need help with something specific? That kind of expectation sets a good relationship. Also, it would be cool to have concrete examples of what you would do if you were to do X or Y, like read papers, or expectations about meeting frequency. The main message is that expectations need to be very clear.</p>

    <br />
    <h3 style={styles.heading3}>(3) Student (Research Assistant), Department of Computer Science, University of Maryland, Baltimore County</h3>
    <p style={styles.paragraph}><strong>Q: How do you typically go about finding professors whose research aligns with your interests?</strong></p>
    <p style={styles.paragraph}>A: I initially went to my department&apos;s website, where I went through all the profiles of my professors who were currently working on various research topics. Then I shortlisted the research topics that aligned with my interests. Finally, I tried to get in touch with the professors through email.</p>

    <p style={styles.paragraph}><strong>Q: Which platforms or resources did you use?</strong></p>
    <p style={styles.paragraph}>A: I mainly used our university website to find out which professor was working on what research topic. I also used LinkedIn, which helped me a lot in finding different professors from various departments and their research topics.</p>

    <p style={styles.paragraph}><strong>Q: What difficulties did you encounter while contacting the professors?</strong></p>
    <p style={styles.paragraph}>A: The main difficulty was that professors receive a lot of emails from students regarding research assistantships, where most of the applications are irrelevant. It&apos;s really complicated for the professors to shortlist the RA. I wasn&apos;t aware of this fact, which made me a bit impatient as I wasn&apos;t receiving any response from the professors, even after sending them multiple emails.</p>

    <br />
    <h3 style={styles.heading3}>(4) Student (Research Assistant), Department of Robotics, Northeastern University, Boston</h3>
    <p style={styles.paragraph}><strong>Q: How do you find out about the different research that are going on in your University?</strong></p>
    <p style={styles.paragraph}>A: I stay informed about the different research projects by following faculty updates, checking the university website regularly, talking with senior students and RAs, and attending departmental seminars.</p>

    <p style={styles.paragraph}><strong>Q: Is there a specific platform where you look for research opportunities?</strong></p>
    <p style={styles.paragraph}>A: I don&apos;t use a specific platform, but I go through different sites and applications. I check the university&apos;s website, the university&apos;s LinkedIn page, and individual professors&apos; accounts. Additionally, I email professors in my areas of interest to inquire about ongoing research.</p>

    <p style={styles.paragraph}><strong>Q: What features would you want in an app or website to help you find your perfect area of research?</strong></p>
    <p style={styles.paragraph}>A: I would want to see all the different domains where research is being conducted so that I can select according to my interest. After selecting any domain, I should get all the ongoing research in it. I should get a small description about the research and the professor and research assistant contact details. If all this data will be present in a single platform, it will help a lot of students and professors.</p>

    <br />
    <h2 style={styles.heading2}>3. Conclusions from User Analysis</h2>
      <p>- Most users value intuitive and streamlined platforms that reduce the time spent searching for the right collaborators. They want a system that easily connects professors and students, providing simple and efficient ways to communicate and collaborate without unnecessary complications.</p>
      <p>- Some users emphasized the need for setting clear expectations for successful collaborations. They expressed a desire for a single platform where they can find up-to-date information on research topics, professor profiles, ongoing projects, and similar resources.</p>
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
  heading3: {
    fontSize: "18px",
    marginTop: "15px",
    marginBottom: "8px",
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

export default UserAnalysis;