'use client';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './home.module.css';
import toast from 'react-hot-toast';
import { supabase } from '../lib/supabase';

interface FilterValue {
  text: string;
  select: string;
}

interface FilterState {
  [key: string]: FilterValue;
}

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  // Filter state management
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
    { 
      name: 'Region', 
      type: 'text' 
    },
    { 
      name: 'State', 
      type: 'select',
      options: [
        'California',
        'New York',
        'Texas',
        'Florida',
        'Illinois',
        'Pennsylvania',
        'Ohio',
        'Michigan',
        'Georgia',
        'North Carolina'
      ]
    },
    { 
      name: 'Language', 
      type: 'select',
      options: [
        'English',
        'Spanish',
        'Chinese',
        'Korean',
        'Japanese',
        'French',
        'German',
        'Italian',
        'Portuguese',
        'Russian'
      ]
    },
    { 
      name: 'Skill set', 
      type: 'text'
    },
    { 
      name: 'University', 
      type: 'text' 
    },
    { 
      name: 'Institution', 
      type: 'text'
    },
    { 
      name: 'Research Type', 
      type: 'select',
      options: [
        'Academic Research',
        'Industry Research',
        'Government Research',
        'Clinical Research',
        'Applied Research',
        'Basic Research',
        'Experimental Research',
        'Theoretical Research',
        'Quantitative Research',
        'Qualitative Research'
      ]
    },
    { 
      name: 'Search Scope', 
      type: 'select',
      options: [
        'All',
        'Professors',
        'Research Labs',
        'Research Projects',
        'Research Papers',
        'Conferences',
        'Journals',
        'Patents',
        'Funding Opportunities',
        'Collaborations'
      ]
    },
  ];

  const [isExpanded, setIsExpanded] = useState(true);

  // Filter value change handler
  const handleFilterChange = (filterName: string, value: string, type: 'text' | 'select') => {
    setFilterValues(prev => ({
      ...prev,
      [filterName]: {
        ...prev[filterName],
        [type]: value
      }
    }));
  };

  // Filter initialization handler
  const handleClear = (filterName: string) => {
    setFilterValues(prev => ({
      ...prev,
      [filterName]: { text: '', select: '' }
    }));
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      searchInputRef.current?.focus();
      toast.error('Please enter your search query');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const suggestedContents = [
    {
      image: '/implement/home/content1.png',
      title: 'How to Find the Right Research Advisor'
    },
    {
      image: '/implement/home/content2.png',
      title: 'Top Skills for Graduate Students in 2024'
    },
    {
      image: '/implement/home/content3.png',
      title: 'Exploring Research Opportunities in Marine'
    },
    {
      image: '/implement/home/content4.png',
      title: 'Networking Tips for International Students'
    }
  ];

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/login');
      }
    };

    checkAuth();
  }, [router]);

  return (
    <div className="mainContent">
      <div className={styles.container}>
        <h1 className={styles.title}>Discover Your Perfect Match</h1>
        
        <div className={styles.searchSection}>
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search your interest or skills or ask using natural language"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className={styles.searchInput}
          />
          <button 
            className={styles.findButton}
            onClick={handleSearch}
          >
            Find
          </button>
        </div>

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
                      opacity: filterValues[filter.name as keyof typeof filterValues][filter.type as keyof FilterValue] ? 1 : 0.5,
                      cursor: filterValues[filter.name as keyof typeof filterValues][filter.type as keyof FilterValue] ? 'pointer' : 'default'
                    }}
                  >
                    Clear
                  </button>
                </div>
                {filter.type === 'text' ? (
                  <div className={styles.searchInputWrapper}>
                    <input 
                      type="text" 
                      placeholder="Keyword" 
                      className={styles.filterInput}
                      value={filterValues[filter.name].text}
                      onChange={(e) => handleFilterChange(filter.name, e.target.value, 'text')}
                    />
                  </div>
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

        <div className={styles.suggestedSection}>
          <h2>Suggested Contents</h2>
          <div className={styles.suggestedGrid}>
            {suggestedContents.map((content, index) => (
              <div 
                key={index} 
                className={styles.contentCard}
                onClick={() => toast.success('This is mock content for demonstration purposes only.')}
                style={{ cursor: 'pointer' }}
              >
                <Image
                  src={content.image}
                  alt={content.title}
                  width={300}
                  height={200}
                  className={styles.contentImage}
                />
                <h3 className={styles.contentTitle}>{content.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 