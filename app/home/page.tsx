'use client';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './home.module.css';
import toast from 'react-hot-toast';

export default function HomePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

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

  const filters = [
    { name: 'Region', type: 'text' },
    { name: 'State', type: 'select' },
    { name: 'Language', type: 'select' },
    { name: 'Skill set', type: 'select' },
    { name: 'University', type: 'text' },
    { name: 'Institution', type: 'select' },
    { name: 'Research Type', type: 'select' },
    { name: 'Search Scope', type: 'select' },
  ];

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

  return (
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
          <button className={styles.expandButton}>Expand</button>
        </div>
        
        <div className={styles.filtersGrid}>
          {filters.map((filter, index) => (
            <div key={index} className={styles.filterItem}>
              <div className={styles.filterLabel}>
                <span>{filter.name}</span>
                <button className={styles.clearButton}>Clear</button>
              </div>
              {filter.type === 'text' ? (
                <div className={styles.searchInputWrapper}>
                  <input type="text" placeholder="Keyword" className={styles.filterInput} />
                </div>
              ) : (
                <select className={styles.filterSelect}>
                  <option value="">Select</option>
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
            <div key={index} className={styles.contentCard}>
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
  );
} 