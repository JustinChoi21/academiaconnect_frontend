'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './DetailedProfile.module.css';

interface ResearcherProfile {
  name: string;
  username: string;
  connections: number;
  image: string;
  researchInfo: {
    interests: string[];
    expertise: string[];
    ongoingProjects: string[];
  };
  accomplishments: {
    publications: string[];
    awards: string[];
    previousProjects: string[];
  };
  contact: {
    preferredCommunication: string[];
    availableForMeetings: string[];
    latestActivities: string[];
  };
}

const researcherProfile: ResearcherProfile = {
  name: "Dr. Emily Johnson",
  username: "@Johnson_123",
  connections: 15,
  image: "/implement/search_result/profile1.png",
  researchInfo: {
    interests: ["Machine Learning", "Deep Learning", "Bio Chemistry"],
    expertise: ["Python", "TensorFlow", "PyTorch", "Sci-Kit Learn", "MATLAB"],
    ongoingProjects: ["AI-based drug discovery for rare genetic disorders."]
  },
  accomplishments: {
    publications: ["Machine Learning in Healthcare. IEEE (2021)"],
    awards: [
      "Best Paper Awards - AI conference",
      "Research Excellence Award, ABC University"
    ],
    previousProjects: [
      "Predictive analytics in personalized medicine",
      "Developing a neural network for protein structure prediction"
    ]
  },
  contact: {
    preferredCommunication: ["Email", "Real-time Chat", "Zoom", "Direct Messaging"],
    availableForMeetings: [
      "Open for new research collaborations",
      "Available Tuesdays and Thursdays, 2-5 PM"
    ],
    latestActivities: [
      "Participated in \"AI in Healthcare\" symposium",
      "Presented at \"International Conference on Genomics\""
    ]
  }
};

export default function DetailedProfile() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.profileHeader}>
        <div className={styles.profileInfo}>
          <Image
            src={researcherProfile.image}
            alt={researcherProfile.name}
            width={150}
            height={150}
            className={styles.profileImage}
          />
          <div className={styles.nameSection}>
            <h1>{researcherProfile.name}</h1>
            <p>{researcherProfile.username}</p>
            <p>{researcherProfile.connections} Connections</p>
          </div>
        </div>
        <div className={styles.actionButtons}>
          <button className={styles.connectButton}>Connect</button>
          <button 
            className={styles.chatButton}
            onClick={() => router.push('/chat')}
          >
            Chat
          </button>
        </div>
      </div>

      <section>
        <h2 className={styles.sectionTitle}>Academic Research Information</h2>
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <h3>Research Interests</h3>
            <p>{researcherProfile.researchInfo.interests.join(', ')}</p>
          </div>
          <div className={styles.infoCard}>
            <h3>Expertise</h3>
            <p>{researcherProfile.researchInfo.expertise.join(', ')}</p>
          </div>
          <div className={styles.infoCard}>
            <h3>Ongoing Projects</h3>
            <p>{researcherProfile.researchInfo.ongoingProjects.join(', ')}</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Accomplishment</h2>
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <h3>Publications</h3>
            <p>{researcherProfile.accomplishments.publications.join(', ')}</p>
          </div>
          <div className={styles.infoCard}>
            <h3>Awards</h3>
            <p>{researcherProfile.accomplishments.awards.join(', ')}</p>
          </div>
          <div className={styles.infoCard}>
            <h3>Previous Projects</h3>
            <p>{researcherProfile.accomplishments.previousProjects.join(', ')}</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Contact & Collaboration</h2>
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <h3>Preferred Communication</h3>
            <p>{researcherProfile.contact.preferredCommunication.join(', ')}</p>
          </div>
          <div className={styles.infoCard}>
            <h3>Available for Meetings</h3>
            <p>{researcherProfile.contact.availableForMeetings.join(', ')}</p>
          </div>
          <div className={styles.infoCard}>
            <h3>Latest Activities</h3>
            <p>{researcherProfile.contact.latestActivities.join(', ')}</p>
          </div>
        </div>
      </section>
    </div>
  );
} 