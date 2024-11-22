'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import toast from 'react-hot-toast';
import styles from './Search.module.css';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

interface Researcher {
  id: string;
  first_name: string;
  last_name: string;
  university: string;
  brief_description: string;
  profile_image_url: string;
}

const DEFAULT_AVATAR = 'implement/search_result/Placeholder Image.png';

export default function Search() {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [researchers, setResearchers] = useState<Researcher[]>([]);
  const [selectedProfiles, setSelectedProfiles] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  
  // Filter state management
  interface FilterState {
    [key: string]: {
      text: string;
      select: string;
    }
  }

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

  const toggleProfile = (id: string) => {
    setSelectedProfiles(prev => {
      if (prev.includes(id)) {
        return prev.filter(profileId => profileId !== id);
      }
      if (prev.length < 2) {
        return [...prev, id];
      }
      toast.error('Please select only 2 profiles for comparison');
      return prev;
    });
  };

  const handleCompare = () => {
    if (selectedProfiles.length === 2) {
      router.push('/comparison');
    }
  };

  const handleViewProfile = (id: string) => {
    router.push(`/profile/${id}`);
  };

  // Add useEffect to fetch researchers
  useEffect(() => {
    async function fetchResearchers() {
      const { data, error } = await supabase
        .from('profiles')
        .select('user_id, first_name, last_name, university, brief_description, profile_image_url');
      
      if (error) {
        console.error('Error fetching researchers:', error);
        return;
      }

      if (data) {
        const formattedData = data.map(profile => ({
          id: profile.user_id,
          first_name: profile.first_name,
          last_name: profile.last_name,
          university: profile.university,
          brief_description: profile.brief_description,
          profile_image_url: profile.profile_image_url,
        }));
        setResearchers(formattedData);
      }
    }

    fetchResearchers();
  }, [supabase]);

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
                        opacity: filterValues[filter.name][filter.type as keyof typeof filterValues[typeof filter.name]] ? 1 : 0.5,
                        cursor: filterValues[filter.name][filter.type as keyof typeof filterValues[typeof filter.name]] ? 'pointer' : 'default'
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
              <div className={styles.imageContainer}>
                <Image
                  src={researcher.profile_image_url || DEFAULT_AVATAR}
                  alt={`${researcher.first_name} ${researcher.last_name}`}
                  width={100}
                  height={100}
                  className={styles.profileImage}
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.src = DEFAULT_AVATAR;
                  }}
                />
              </div>
              <h3>{researcher.first_name} {researcher.last_name}</h3>
              <p className={styles.university}>{researcher.university}</p>
              <p className={styles.description}>{researcher.brief_description}</p>
              <button 
                className={styles.viewProfileButton}
                onClick={() => handleViewProfile(researcher.id)}
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