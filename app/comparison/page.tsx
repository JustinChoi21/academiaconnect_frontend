'use client';

import Image from 'next/image';
import styles from './Comparison.module.css';
import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';

interface ResearcherComparison {
  user_id: string;
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
        .select('user_id, first_name, last_name, university, research_interests, expertise, ongoing_projects, publications, profile_image_url')
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
              <div className={styles.profileHeader}>
                <Image
                  src={researcher.profile_image_url}
                  alt={`${researcher.first_name} ${researcher.last_name}`}
                  width={80}
                  height={80}
                  className={styles.profileImage}
                />
                <div>
                  <h2>Dr. {researcher.first_name} {researcher.last_name}</h2>
                  <p>{researcher.university}</p>
                </div>
              </div>
              
              <div className={styles.infoSection}>
                <div className={styles.infoItem}>
                  <h3>Research Interests</h3>
                  <p>{researcher.research_interests}</p>
                </div>

                <div className={styles.infoItem}>
                  <h3>Research Type</h3>
                  <p>{researcher.expertise}</p>
                </div>

                <div className={styles.infoItem}>
                  <h3>Publications</h3>
                  <p>{researcher.publications}</p>
                </div>

                <div className={styles.infoItem}>
                  <h3>Projects</h3>
                  <p>{researcher.ongoing_projects}</p>
                </div>

                <div className={styles.infoItem}>
                  <h3>Technologies</h3>
                  <p>{researcher.expertise}</p>
                </div>

                <Link 
                  href={`/profile/${researcher.user_id}`} 
                  className={styles.viewProfileButton}
                  onClick={() => console.log('Navigating to profile:', researcher.user_id)}
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 