import React from "react";

const ComputerPrototyping = () => (
  <div style={styles.container}>
    <h1 style={styles.heading1}>Computer Prototyping</h1>

    <h2 style={styles.heading2}>1. Link to Prototype</h2>
    <p style={styles.paragraph}>
      Our high-fidelity prototype was created in Figma to showcase the detailed design and functionality of the AcademiaConnect platform. This prototype reflects insights from our task analysis and paper prototyping stage.
    </p>
    <p style={styles.paragraph}>
      <b>Link to Prototype: </b>
      <a href="https://www.figma.com/proto/4tKEWkik7aURfOwXfAu6oa/Step-5---Computer-Prototyping?page-id=0%3A1&node-id=72-523&node-type=canvas&viewport=213%2C-355%2C0.38&t=vW0NhxSXxeT3ymov-1&scaling=contain&content-scaling=fixed&starting-point-node-id=72%3A523&share=1" target="_blank" rel="noopener noreferrer" style={{ color: "blue", textDecoration: "underline" }}>
        https://www.figma.com/proto/4tKEWkik7aURfOwXfAu6oa/Step-5---Computer-Prototyping?page-id=0%3A1&node-id=72-523&node-type=canvas&viewport=213%2C-355%2C0.38&t=vW0NhxSXxeT3ymov-1&scaling=contain&content-scaling=fixed&starting-point-node-id=72%3A523&share=1
      </a>
    </p>

    <h2 style={styles.heading2}>2. Instructions to Run the Prototype</h2>
    <ul style={styles.list}>
      <li>
        <b>1) Access the Prototype:</b> Click the link above to open the Figma prototype.
      </li>
      <br></br>
      <li>
        <b>2) Navigate the Prototype:</b> Use the navigation bar on the left to switch between different screens (e.g., Home, Search, Communication, Profile).
      </li>
      <br></br>
      <li>
        <b>3) Key Features to Explore:</b> <br />
        <br></br>
        <ul>
          <li><b>- Login Page:</b> Click on &quot;Sign Up&quot; to proceed to the registration page.</li>
          <li><b>- Sign-Up Page:</b> Click &quot;Sign Up&quot; to go to the profile setup page.</li>
          <li><b>- Profile Setup:</b> Click &quot;Save and Continue&quot; to access the home screen.</li>
          <li><b>- Home Screen:</b> Click &quot;Find&quot; to view search results.</li>
          <li><b>- Search Results:</b> Use the &quot;Compare&quot; button to go to the comparison page.</li>
          <li><b>- Compare Page:</b> Select &quot;View Profile&quot; to see detailed profile information.</li>
          <li><b>- Detailed Profile:</b> Click &quot;Chat&quot; to initiate a conversation on the chat screen.</li>
          <li><b>- Chat Screen:</b> Navigate to other sections using the sidebar.</li>
        </ul>
      </li>
    </ul>
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

export default ComputerPrototyping;