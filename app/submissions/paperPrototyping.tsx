import React from 'react';

const PaperPrototyping = () => (
  <div style={styles.container}>
    <h1 style={styles.heading1}>5. Paper Prototyping & Low-Fidelity Testing</h1>

    <h1 style={styles.heading1}>(1) Prototype Photos</h1>

    <div style={styles.imageContainer}>
      <p style={{ textAlign: 'left' }}>1. Welcome Page</p>
      <img 
        src="/prototyping_welcome_page.jpg" 
        alt="prototyping_welcome_page" 
        style={styles.image}
      />
    </div>
    
    <div style={styles.imageContainer}>
    <p style={{ textAlign: 'left' }}>2. Setting Profile</p>
      <img 
        src="/prototyping_profile_setting.jpg" 
        alt="prototyping_profile_setting" 
        style={styles.image}
      />
    </div>


    <div style={styles.imageContainer}>
    <p style={{ textAlign: 'left' }}>3. Main Page</p>
      <img 
        src="/prototyping_main_page.jpg" 
        alt="prototyping main_page" 
        style={styles.image}
      />
    </div>
    
    <div style={styles.imageContainer}>
    <p style={{ textAlign: 'left' }}>4. Advanced Search</p>
      <img 
        src="/prototyping_advanced_search.jpg" 
        alt="prototyping_advanced_search" 
        style={styles.image}
      />
    </div>

    <div style={styles.imageContainer}>
    <p style={{ textAlign: 'left' }}>5. Advanced Search Result</p>
      <img 
        src="/prototyping_search_results.jpg" 
        alt="prototyping_search_results" 
        style={styles.image}
      />
    </div>

    <div style={styles.imageContainer}>
    <p style={{ textAlign: 'left' }}>6. Detailed Profile</p>
      <img 
        src="/prototyping_detailed_profile.jpg" 
        alt="prototyping_detailed_profile" 
        style={styles.image}
      />
    </div>

    <div style={styles.imageContainer}>
    <p style={{ textAlign: 'left' }}>7. AI Powered Search</p>
      <img 
        src="/prototyping_ai_search.jpg" 
        alt="prototyping_ai_search" 
        style={styles.image}
      />
    </div>

    <div style={styles.imageContainer}>
    <p style={{ textAlign: 'left' }}>8. Comparison</p>
      <img 
        src="/prototyping_ai_compare.jpg" 
        alt="prototyping_ai_compare" 
        style={styles.image}
      />
    </div>

    <div style={styles.imageContainer}>
    <p style={{ textAlign: 'left' }}>9. Refine AI Search Query</p>
      <img 
        src="/prototyping_ai_search_refine.jpg" 
        alt="prototyping_ai_search_refine" 
        style={styles.image}
      />
    </div>

    <div style={styles.imageContainer}>
    <p style={{ textAlign: 'left' }}>10. Chat</p>
      <img 
        src="/prototyping_chat.jpg" 
        alt="prototyping_chat" 
        style={styles.image}
      />
    </div>

    <br></br>

    <h1 style={styles.heading1}>(2) Our Briefing</h1>
    <p style={styles.paragraph}>
      <b>Purpose of the Application</b>: The platform is called <b>AcademiaConnect</b>, and it is designed to help students and professors connect for research collaborations and academic opportunities. Students can use it to find professors and programs that match their interests, and professors can search for students with the right skills to join their labs. You will see both <b>natural language search</b> and <b>traditional keyword search</b> options throughout the interface.
    </p>
    <p style={styles.paragraph}>
      <b>Background Information</b>: Finding the right academic match can be challenging for both <b>students</b> and <b>professors</b>. Students often struggle to manually sift through professor profiles, research papers, and institutional information to find the right opportunities. Professors, in turn, have trouble identifying students whose interests and expertise align with their projects. Our platform allows both parties <b>to streamline the process</b> with personalized search features and built-in messaging tools.
    </p>
    <div style={styles.imageContainer}>
      <img 
        src="/prototyping_breifing.jpg" 
        alt="prototyping_breifing" 
        style={styles.image}
      />
    </div>

    <br></br>

    <h1 style={styles.heading1}>(3) Scenario Tasks</h1>
    <ul style={styles.list}>
      <li>
        <b>Task 1: Set Up a Student Profile</b> <br />
        Create a student profile by filling out your academic background, research interests, and skills.
      </li>
      <li>
        <b>Task 2: Find a Professor for Collaboration</b> <br />
        Search for a professor working in the field of AI and healthcare, and explore their research profile.
      </li>
      <li>
        <b>Task 3: Message a Matched Professor</b> <br />
        Find a professor whose research aligns with your interests and send them a message to introduce yourself and ask about collaboration opportunities.
      </li>
    </ul>

    <div style={styles.imageContainer}>
      <img 
        src="/prototyping_tasks.jpg" 
        alt="prototyping_tasks" 
        style={styles.image}
      />
    </div>

    <br></br>

    <h1 style={styles.heading1}>(4) Observations</h1>

    <p style={styles.paragraph}>
      <b>Task 1: Set Up a Student Profile</b> <br />
      (1) Testers navigated to the profile creation page easily and found the form fields intuitive.<br />
      (2) Testers were confused by the checkbox for selecting research interests on the profile settings page.<br />
      (3) A tester thought the professor promotion box was redundant and suggested it be placed on the main page instead.<br />
      (4) A tester suggested separating the profile settings into distinct pages for students and professors.
    </p>

    <p style={styles.paragraph}>
      <b>Task 2: Find a Professor for Collaboration</b> <br />
      (1) Testers quickly identified the search bar and entered keywords but were unclear on what type of input was expected.<br />
      (2) Testers found the Advanced Search option confusing and wanted more guidance on how to use it.<br />
      (3) A tester felt that there were too many separate search functions and suggested integrating them into a single interface.<br />
    </p>

    <p style={styles.paragraph}>
      <b>Task 3: Message a Matched Professor</b> <br />
      (1) Testers easily located the messaging feature on the professor profile page.<br />
      (2) A tester suggested the option to attach files to messages.<br />
      (3) Testers found the messaging interface simple and intuitive.<br />
    </p>

    <br></br>

    <h1 style={styles.heading1}>(5) Prototype Iteration</h1>
    <p style={styles.paragraph}>
      Based on the observations and feedback from testers, we made the following changes to our prototype:
    </p>
    <ul style={styles.list}>
      <li>
        <b>1. Improving Research Interest Selection:</b> 
        We updated the checkbox design for selecting research interests in profile setting page to make it clearer. Separating the profile settings into distinct pages for students and professors.
      </li>
      <br />
      <li>
        <b>2. Relocating the Professor Promotion Box:</b> 
        We moved the professor promotion box from the profile setup page to the main page to ensure it appears in a more relevant context.
      </li>
      <br />
      <li>
        <b>3. Integrating Search Functions:</b> 
        To avoid confusion, we merged the search options into a single interface with expandable filters, creating a seamless search experience.
      </li>
      <br />
      <li>
        <b>4. Enhancing Messaging Features:</b> 
        We introduced the option to attach files within messages, improving communication between users.
      </li>
      <br />
      <li>
        <b>5. Providing More Guidance:</b> 
        We added a brief description explaining how to effectively use the search bar and provide matching scores for the comparison feature.
      </li>
    </ul>
    <br />

    <div style={styles.imageContainer}>
    <p style={{ textAlign: 'left' }}>Main Page Refinement</p>
      <img 
        src="/prototype_refine_main_page.jpg" 
        alt="prototype_refine_main_page" 
        style={styles.image}
      />
    </div>

    <div style={styles.imageContainer}>
    <p style={{ textAlign: 'left' }}>Separating Profile Pages</p>
      <img 
        src="/prototype_refine_setting_profile_1.jpg" 
        alt="prototype_refine_setting_profile_1" 
        style={styles.image}
      />
    </div>

    <div style={styles.imageContainer}>
      <img 
        src="/prototype_refine_setting_profile_2.jpg" 
        alt="prototype_refine_setting_profile_2" 
        style={styles.image}
      />
    </div>

    <div style={styles.imageContainer}>
    <p style={{ textAlign: 'left' }}>Search Result Refinement</p>
      <img 
        src="/prototype_refine_search_result.jpg" 
        alt="prototype_refine_search_result" 
        style={styles.image}
      />
    </div>

    <div style={styles.imageContainer}>
    <p style={{ textAlign: 'left' }}>Comparison Feature Refinement</p>
      <img 
        src="/prototype_refine_comparison.jpg" 
        alt="prototype_refine_comparison" 
        style={styles.image}
      />
    </div>

    <div style={styles.imageContainer}>
    <p style={{ textAlign: 'left' }}>Chat Interface Refinement</p>
      <img 
        src="/prototype_refine_chat.jpg" 
        alt="prototype_refine_chat" 
        style={styles.image}
      />
    </div>

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