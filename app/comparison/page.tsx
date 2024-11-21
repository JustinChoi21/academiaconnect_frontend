'use client';

import Image from 'next/image';
import styles from './Comparison.module.css';

interface ResearcherComparison {
  name: string;
  university: string;
  researchInterests: string;
  researchType: string;
  publications: string;
  projects: string;
  technologies: string;
  image: string;
}

const _researcher1: ResearcherComparison = {
  name: "Dr. Emily Johnson",
  university: "ABC University",
  researchInterests: "Machine Learning, Deep Learning, Bio Chemistry",
  researchType: "Applied Research, Collaborative Projects, Theoretical",
  publications: "Machine Learning in Healthcare. IEEE (2021)",
  projects: "AI-based drug discovery for rare genetic disorders.",
  technologies: "Python, TensorFlow, PyTorch, Sci-Kit Learn, MATLAB",
  image: "/implement/search_result/profile1.png"
};

const _researcher2: ResearcherComparison = {
  name: "Dr. Michael Thompson",
  university: "MMN University",
  researchInterests: "Black Hole Physics, Interstellar Medium, Gravitational",
  researchType: "Theoretical, Computational Modeling, International",
  publications: "Modeling Gravitational Wave Emissions. IEEE (2023)",
  projects: "Developing simulation models for black hole mergers.",
  technologies: "C++, Astropy, Wolfram Mathematica",
  image: "/implement/search_result/profile2.png"
};

export default function Comparison() {
  return (
    <div className="mainContent">
      <div className={styles.comparisonContainer}>
        <h1>Comparison</h1>
        
        <div className={styles.profilesGrid}>
          <div className={styles.profileCard}>
            <Image
              src={_researcher1.image}
              alt={_researcher1.name}
              width={100}
              height={100}
              className={styles.profileImage}
            />
            <h2>{_researcher1.name}</h2>
            <p className={styles.university}>{_researcher1.university}</p>
            
            <div className={styles.infoSection}>
              <h3>Research Interests</h3>
              <p>{_researcher1.researchInterests}</p>
              <h3>Research Type</h3>
              <p>{_researcher1.researchType}</p>
              <h3>Publications</h3>
              <p>{_researcher1.publications}</p>
              <h3>Projects</h3>
              <p>{_researcher1.projects}</p>
              <h3>Technologies</h3>
              <p>{_researcher1.technologies}</p>
            </div>
          </div>

          <div className={styles.profileCard}>
            <Image
              src={_researcher2.image}
              alt={_researcher2.name}
              width={100}
              height={100}
              className={styles.profileImage}
            />
            <h2>{_researcher2.name}</h2>
            <p className={styles.university}>{_researcher2.university}</p>
            
            <div className={styles.infoSection}>
              <h3>Research Interests</h3>
              <p>{_researcher2.researchInterests}</p>
              <h3>Research Type</h3>
              <p>{_researcher2.researchType}</p>
              <h3>Publications</h3>
              <p>{_researcher2.publications}</p>
              <h3>Projects</h3>
              <p>{_researcher2.projects}</p>
              <h3>Technologies</h3>
              <p>{_researcher2.technologies}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 