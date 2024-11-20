'use client';
import { useState } from 'react';
import styles from './Profile.module.css';

export default function ProfilePage() {
  const [userType, setUserType] = useState('student');
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    researchInterests: '',
    expertise: '',
    ongoingProjects: '',
    previousProjects: '',
    publications: '',
    awards: '',
    availableMeetings: '',
    latestActivities: '',
    communications: {
      email: false,
      realTimeChat: false,
      directMessaging: false,
      zoom: false
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement profile update logic
    console.log(profileData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.profileContent}>
        <div className={styles.photoSection}>
          <div className={styles.photoPlaceholder}>
            <img src="/implement/setting_profile/Placeholder Image.png" alt="Profile" />
          </div>
          <button className={styles.uploadButton}>Upload Photo</button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.userTypeSelection}>
            <span>Please Select :</span>
            <label>
              <input
                type="radio"
                name="userType"
                value="student"
                checked={userType === 'student'}
                onChange={(e) => setUserType(e.target.value)}
              />
              Student
            </label>
            <label>
              <input
                type="radio"
                name="userType"
                value="professor"
                checked={userType === 'professor'}
                onChange={(e) => setUserType(e.target.value)}
              />
              Professor
            </label>
          </div>

          <div className={styles.inputGroup}>
            <label>First Name:</label>
            <input
              type="text"
              value={profileData.firstName}
              onChange={(e) => setProfileData({...profileData, firstName: e.target.value})}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Last Name:</label>
            <input
              type="text"
              value={profileData.lastName}
              onChange={(e) => setProfileData({...profileData, lastName: e.target.value})}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Email:</label>
            <input
              type="email"
              value={profileData.email}
              onChange={(e) => setProfileData({...profileData, email: e.target.value})}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Research Interests:</label>
            <input
              type="text"
              value={profileData.researchInterests}
              onChange={(e) => setProfileData({...profileData, researchInterests: e.target.value})}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Expertise:</label>
            <input
              type="text"
              value={profileData.expertise}
              onChange={(e) => setProfileData({...profileData, expertise: e.target.value})}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Ongoing Projects:</label>
            <input
              type="text"
              value={profileData.ongoingProjects}
              onChange={(e) => setProfileData({...profileData, ongoingProjects: e.target.value})}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Previous Projects:</label>
            <input
              type="text"
              value={profileData.previousProjects}
              onChange={(e) => setProfileData({...profileData, previousProjects: e.target.value})}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Publications:</label>
            <input
              type="text"
              value={profileData.publications}
              onChange={(e) => setProfileData({...profileData, publications: e.target.value})}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Awards:</label>
            <input
              type="text"
              value={profileData.awards}
              onChange={(e) => setProfileData({...profileData, awards: e.target.value})}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Available Meetings:</label>
            <input
              type="text"
              value={profileData.availableMeetings}
              onChange={(e) => setProfileData({...profileData, availableMeetings: e.target.value})}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Latest Activities:</label>
            <input
              type="text"
              value={profileData.latestActivities}
              onChange={(e) => setProfileData({...profileData, latestActivities: e.target.value})}
            />
          </div>

          <div className={styles.communicationPreferences}>
            <label>Preferred Communications:</label>
            <div className={styles.checkboxGroup}>
              <label>
                <input
                  type="checkbox"
                  checked={profileData.communications.email || false}
                  onChange={(e) => setProfileData({
                    ...profileData,
                    communications: {...profileData.communications, email: e.target.checked}
                  })}
                />
                Email
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={profileData.communications.realTimeChat || false}
                  onChange={(e) => setProfileData({
                    ...profileData,
                    communications: {...profileData.communications, realTimeChat: e.target.checked}
                  })}
                />
                Real-time Chat
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={profileData.communications.directMessaging || false}
                  onChange={(e) => setProfileData({
                    ...profileData,
                    communications: {...profileData.communications, directMessaging: e.target.checked}
                  })}
                />
                Direct Messaging
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={profileData.communications.zoom || false}
                  onChange={(e) => setProfileData({
                    ...profileData,
                    communications: {...profileData.communications, zoom: e.target.checked}
                  })}
                />
                Zoom
              </label>
            </div>
          </div>

          <button type="submit" className={styles.submitButton}>
            Save And Continue
          </button>
        </form>
      </div>
    </div>
  );
} 