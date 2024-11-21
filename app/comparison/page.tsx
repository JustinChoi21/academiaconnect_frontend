'use client';

import { useRouter } from 'next/navigation';
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

const researcher1: ResearcherComparison = {
  name: "Dr. Emily Johnson",
  university: "ABC University",
  researchInterests: "Machine Learning, Deep Learning, Bio Chemistry",
  researchType: "Applied Research, Collaborative Projects, Theoretical",
  publications: "Machine Learning in Healthcare. IEEE (2021)",
  projects: "AI-based drug discovery for rare genetic disorders.",
  technologies: "Python, TensorFlow, PyTorch, Sci-Kit Learn, MATLAB",
  image: "/implement/search_result/profile1.png"
};

const researcher2: ResearcherComparison = {
  name: "Dr. Michael Thompson",
  university: "MMN University",
  researchInterests: "Black Hole Physics, Interstellar Medium, Gravitational",
  researchType: "Theoretical, Computational Modeling, International",
  publications: "Modeling Gravitational Wave Emissions. IEEE (2023)",
  projects: "Developing simulation models for black hole mergers.",
  technologies: "C++, Astropy, Wolfram Mathematica",
  image: "/implement/search_result/profile2.png"
};

export default function ComparisonPage() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comparison</h1>
      
      <div className={styles.comparisonGrid}>
        <div className={styles.researcherColumn}>
          <div className={styles.profileHeader}>
            <Image
              src={researcher1.image}
              alt={researcher1.name}
              width={100}
              height={100}
              className={styles.profileImage}
            />
            <div>
              <h2>{researcher1.name}</h2>
              <p>{researcher1.university}</p>
            </div>
          </div>

          <div className={styles.infoSection}>
            <h3>Research Interests</h3>
            <p>{researcher1.researchInterests}</p>
          </div>

          <div className={styles.infoSection}>
            <h3>Research Type</h3>
            <p>{researcher1.researchType}</p>
          </div>

          <div className={styles.infoSection}>
            <h3>Publications</h3>
            <p>{researcher1.publications}</p>
          </div>

          <div className={styles.infoSection}>
            <h3>Projects</h3>
            <p>{researcher1.projects}</p>
          </div>

          <div className={styles.infoSection}>
            <h3>Technologies</h3>
            <p>{researcher1.technologies}</p>
          </div>

          <button 
            className={styles.viewProfileButton}
            onClick={() => router.push('/detailed_profile')}
          >
            View Profile
          </button>
        </div>

        <div className={styles.researcherColumn}>
          <div className={styles.profileHeader}>
            <Image
              src={researcher2.image}
              alt={researcher2.name}
              width={100}
              height={100}
              className={styles.profileImage}
            />
            <div>
              <h2>{researcher2.name}</h2>
              <p>{researcher2.university}</p>
            </div>
          </div>

          <div className={styles.infoSection}>
            <h3>Research Interests</h3>
            <p>{researcher2.researchInterests}</p>
          </div>

          <div className={styles.infoSection}>
            <h3>Research Type</h3>
            <p>{researcher2.researchType}</p>
          </div>

          <div className={styles.infoSection}>
            <h3>Publications</h3>
            <p>{researcher2.publications}</p>
          </div>

          <div className={styles.infoSection}>
            <h3>Projects</h3>
            <p>{researcher2.projects}</p>
          </div>

          <div className={styles.infoSection}>
            <h3>Technologies</h3>
            <p>{researcher2.technologies}</p>
          </div>

          <button 
            className={styles.viewProfileButton}
            onClick={() => router.push('/detailed_profile')}
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
} 