'use client';

import Image from 'next/image';
import styles from './Comparison.module.css';
import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

interface ResearcherComparison {
  first_name: string;
  last_name: string;
  university: string;
  research_interests: string;
  expertise: string;
  ongoing_projects: string;
  publications: string;
  profile_image_url: string;
}

export default function Comparison() {
  const [researchers, setResearchers] = useState<ResearcherComparison[]>([]);
  const supabase = createClientComponentClient();

  useEffect(() => {
    async function fetchResearchers() {
      const { data, error } = await supabase
        .from('profiles')
        .select('first_name, last_name, university, research_interests, expertise, ongoing_projects, publications, profile_image_url')
        .limit(2);

      if (error) {
        console.error('Error fetching researchers:', error);
        return;
      }

      if (data) {
        setResearchers(data);
      }
    }

    fetchResearchers();
  }, [supabase]);

  if (researchers.length < 2) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mainContent">
      <div className={styles.comparisonContainer}>
        <h1>Comparison</h1>
        
        <div className={styles.profilesGrid}>
          {researchers.map((researcher, index) => (
            <div key={index} className={styles.profileCard}>
              <Image
                src={researcher.profile_image_url}
                alt={`${researcher.first_name} ${researcher.last_name}`}
                width={100}
                height={100}
                className={styles.profileImage}
              />
              <h2>{researcher.first_name} {researcher.last_name}</h2>
              <p className={styles.university}>{researcher.university}</p>
              
              <div className={styles.infoSection}>
                <h3>Research Interests</h3>
                <p>{researcher.research_interests}</p>
                <h3>Technologies & Expertise</h3>
                <p>{researcher.expertise}</p>
                <h3>Publications</h3>
                <p>{researcher.publications}</p>
                <h3>Projects</h3>
                <p>{researcher.ongoing_projects}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 