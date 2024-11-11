import React from "react";

const ComputerPrototyping = () => (
  <div style={styles.container}>
    <h1 style={styles.heading1}>Computer Prototyping</h1>

    <h2 style={styles.heading2}>1. Link to Prototype</h2>
    <p style={styles.paragraph}>
      Explore our high-fidelity prototype created in Figma to see the detailed design and functionality of the AcademiaConnect platform. This prototype reflects our task analysis and insights from the paper prototyping stage.
    </p>
    <p style={styles.paragraph}>
      <b>Link to Prototype:</b> <br />
      <a href="your_figma_prototype_link_here" target="_blank" rel="noopener noreferrer">
        View the AcademiaConnect Prototype on Figma
      </a>
    </p>

    <h2 style={styles.heading2}>2. Instructions to Run the Prototype</h2>
    <ul style={styles.list}>
      <li>
        <b>Accessing the Prototype:</b> Click the link above to open the Figma prototype. Ensure you are logged into Figma, ideally with an education account for full access.
      </li>
      <li>
        <b>Navigating the Prototype:</b> Use the navigation bar on the left to switch between screens (e.g., Home, Profile, Advanced Search). You can interact with elements like buttons, links, and form fields by clicking on them within the prototype view.
      </li>
      <li>
        <b>Key Features to Explore:</b> <br />
        <ul>
          <li><b>Home Screen:</b> Discover your perfect academic match by exploring search options.</li>
          <li><b>Profile Setup:</b> Create or view detailed student/professor profiles.</li>
          <li><b>Search Functions:</b> Use both keyword-based and AI-powered search to find relevant collaborators or mentors.</li>
          <li><b>Messaging System:</b> Initiate direct communication with matched users.</li>
        </ul>
      </li>
      <li>
        <b>Prototype Controls:</b> Use the right and left arrow keys on your keyboard to move between screens in sequence. If you get lost, click on the navigation sidebar to go back to a specific page.
      </li>
      <li>
        <b>Feedback:</b> This is still an evolving prototype, and any feedback is welcome! Please feel free to share comments directly within the Figma file or through our designated feedback form (link if applicable).
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