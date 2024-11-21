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

export default function Comparison() {
  return (
    <div className="mainContent">
      <div className={styles.comparisonContainer}>
        <h1>Comparison</h1>
        
        <div className={styles.profilesGrid}>
          <div className={styles.profileCard}>
            <Image
              src="/implement/search_result/profile1.png"
              alt="Dr. Emily Johnson"
              width={100}
              height={100}
              className={styles.profileImage}
            />
            <h2>Dr. Emily Johnson</h2>
            <p className={styles.university}>ABC University</p>
            
            <div className={styles.infoSection}>
              <h3>Research Interests</h3>
              <p>Machine Learning, Deep Learning, Bio Chemistry</p>
              {/* 나머지 내용... */}
            </div>
          </div>

          <div className={styles.profileCard}>
            <Image
              src="/implement/search_result/profile2.png"
              alt="Dr. Michael Thompson"
              width={100}
              height={100}
              className={styles.profileImage}
            />
            <h2>Dr. Michael Thompson</h2>
            <p className={styles.university}>MMN University</p>
            
            <div className={styles.infoSection}>
              <h3>Research Interests</h3>
              <p>Black Hole Physics, Interstellar Medium, Gravitational</p>
              {/* 나머지 내용... */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 