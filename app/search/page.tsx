'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Search.module.css';
import Image from 'next/image';

interface Researcher {
  id: number;
  name: string;
  university: string;
  description: string;
  image: string;
}

const researchers: Researcher[] = [
  {
    id: 1,
    name: "Dr. Emily Johnson",
    university: "ABC University",
    description: "Marine Biologist passionate about ocean conservation and biodiversity research.",
    image: "/implement/search_result/profile1.png"
  },
  {
    id: 2,
    name: "Dr. Michael Thompson",
    university: "MMN University",
    description: "Astrophysicist specializing in black hole physics and interstellar phenomena.",
    image: "/implement/search_result/profile2.png"
  },
  {
    id: 3,
    name: "Dr. Sarah Johnson",
    university: "SOS University",
    description: "Renowned biologist with expertise in marine ecosystems.",
    image: "/implement/search_result/profile3.png"
  },
  {
    id: 4,
    name: "Dr. Laura Patel",
    university: "LQL University",
    description: "Marine ecologist with a focus on coral reef ecosystems and climate resilience",
    image: "/implement/search_result/profile4.png"
  },
  {
    id: 5,
    name: "Dr. Robert Chang",
    university: "KQR University",
    description: "Physicist specializing in quantum computing for secure communication.",
    image: "/implement/search_result/profile5.png"
  },
  {
    id: 6,
    name: "Dr. Maria Torres",
    university: "XYZ University",
    description: "Plant biologist dedicated to sustainable agriculture and genetic crop.",
    image: "/implement/search_result/profile6.png"
  }
];

export default function SearchPage() {
  const router = useRouter();
  const [selectedProfiles, setSelectedProfiles] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleProfile = (id: number) => {
    setSelectedProfiles(prev => 
      prev.includes(id) 
        ? prev.filter(profileId => profileId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchHeader}>
        <input
          type="text"
          placeholder="Search interest and skills or ask using natural language"
          className={styles.searchInput}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className={styles.findButton}>Find</button>
        <button 
          className={styles.compareButton}
          disabled={selectedProfiles.length === 0}
        >
          Compare {selectedProfiles.length > 0 ? `(${selectedProfiles.length})` : ''}
        </button>
        <button className={styles.filtersButton}>
          Filters
          <span className={styles.arrow}>▼</span>
        </button>
      </div>

      <div className={styles.researcherGrid}>
        {researchers.map((researcher) => (
          <div key={researcher.id} className={styles.researcherCard}>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                checked={selectedProfiles.includes(researcher.id)}
                onChange={() => toggleProfile(researcher.id)}
              />
            </div>
            <Image
              src={researcher.image}
              alt={researcher.name}
              width={100}
              height={100}
              className={styles.profileImage}
            />
            <h3>{researcher.name}</h3>
            <p className={styles.university}>{researcher.university}</p>
            <p className={styles.description}>{researcher.description}</p>
            <button 
              className={styles.viewProfileButton}
              onClick={() => router.push('/detailed_profile')}
            >
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
} 