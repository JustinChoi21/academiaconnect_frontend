'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import toast from 'react-hot-toast';
import styles from './Search.module.css';

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

interface FilterValue {
  text: string;
  select: string;
}

interface FilterState {
  [key: string]: FilterValue;
}

export default function Search() {
  const router = useRouter();
  const [selectedProfiles, setSelectedProfiles] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  // 필터 상태 관리
  const [filterValues, setFilterValues] = useState<FilterState>({
    Region: { text: '', select: '' },
    State: { text: '', select: '' },
    Language: { text: '', select: '' },
    'Skill set': { text: '', select: '' },
    University: { text: '', select: '' },
    Institution: { text: '', select: '' },
    'Research Type': { text: '', select: '' },
    'Search Scope': { text: '', select: '' },
  });

  const filters = [
    { name: 'Region', type: 'text' },
    { 
      name: 'State', 
      type: 'select',
      options: ['California', 'New York', 'Texas', 'Florida', 'Illinois']
    },
    { 
      name: 'Language', 
      type: 'select',
      options: ['English', 'Spanish', 'Chinese', 'Korean', 'Japanese']
    },
    { name: 'Skill set', type: 'text' },
    { name: 'University', type: 'text' },
    { name: 'Institution', type: 'text' },
    { 
      name: 'Research Type', 
      type: 'select',
      options: ['Academic', 'Industry', 'Government', 'Clinical', 'Applied']
    },
    { 
      name: 'Search Scope', 
      type: 'select',
      options: ['All', 'Professors', 'Research Labs', 'Projects', 'Papers']
    },
  ];

  const handleFilterChange = (filterName: string, value: string, type: 'text' | 'select') => {
    setFilterValues(prev => ({
      ...prev,
      [filterName]: {
        ...prev[filterName],
        [type]: value
      }
    }));
  };

  const handleClear = (filterName: string) => {
    setFilterValues(prev => ({
      ...prev,
      [filterName]: { text: '', select: '' }
    }));
  };

  const toggleProfile = (id: number) => {
    setSelectedProfiles(prev => {
      if (prev.includes(id)) {
        return prev.filter(profileId => profileId !== id);
      }
      if (prev.length < 2) {
        return [...prev, id];
      }
      toast.dismiss();
      toast.error('Please select only 2 profiles for comparison', {
        id: 'profile-limit',
        duration: 2000,
        position: 'top-center',
        style: {
          background: '#333',
          color: '#fff',
          borderRadius: '8px',
        },
      });
      return prev;
    });
  };

  const handleCompare = () => {
    if (selectedProfiles.length === 2) {
      router.push('/comparison');
    }
  };

  return (
    <div className="mainContent">
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
            disabled={selectedProfiles.length !== 2}
            onClick={handleCompare}
          >
            Compare {selectedProfiles.length > 0 ? `(${selectedProfiles.length})` : ''}
          </button>
          <button 
            className={`${styles.filtersButton} ${isFiltersVisible ? styles.active : ''}`}
            onClick={() => setIsFiltersVisible(!isFiltersVisible)}
          >
            Filters
            <span className={styles.arrow}>▼</span>
          </button>
        </div>

        {isFiltersVisible && (
          <div className={styles.filtersSection}>
            <div className={styles.filterHeader}>
              <h2>Filters</h2>
              <button 
                className={`${styles.expandButton} ${!isExpanded ? styles.collapsed : ''}`}
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? 'Collapse' : 'Expand'}
              </button>
            </div>
            
            <div className={`${styles.filtersGrid} ${!isExpanded ? styles.collapsed : ''}`}>
              {isExpanded && filters.map((filter, index) => (
                <div key={index} className={styles.filterItem}>
                  <div className={styles.filterLabel}>
                    <span>{filter.name}</span>
                    <button 
                      className={styles.clearButton}
                      onClick={() => handleClear(filter.name)}
                      style={{ 
                        opacity: filterValues[filter.name][filter.type as keyof FilterValue] ? 1 : 0.5,
                        cursor: filterValues[filter.name][filter.type as keyof FilterValue] ? 'pointer' : 'default'
                      }}
                    >
                      Clear
                    </button>
                  </div>
                  {filter.type === 'text' ? (
                    <input 
                      type="text" 
                      placeholder="Keyword" 
                      className={styles.filterInput}
                      value={filterValues[filter.name].text}
                      onChange={(e) => handleFilterChange(filter.name, e.target.value, 'text')}
                    />
                  ) : (
                    <select 
                      className={styles.filterSelect}
                      value={filterValues[filter.name].select}
                      onChange={(e) => handleFilterChange(filter.name, e.target.value, 'select')}
                    >
                      <option value="">Select</option>
                      {filter.options?.map((option, optionIndex) => (
                        <option key={optionIndex} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

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
    </div>
  );
} 