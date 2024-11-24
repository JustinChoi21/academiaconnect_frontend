'use client';
import { useState, useEffect } from 'react';
import styles from './Profile.module.css';
import { supabase } from '../lib/supabase';
import { v4 as uuidv4 } from 'uuid';

export default function Profile() {
  // role의 초기값을 null로 설정하여 실제 데이터가 로드되기 전까지는 미선택 상태로 유지
  const [role, setRole] = useState<string | null>(null);
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    university: '',
    researchInterests: '',
    expertise: '',
    ongoingProjects: '',
    previousProjects: '',
    publications: '',
    awards: '',
    availableMeetings: '',
    latestActivities: '',
    briefDescription: '',
    profileImageUrl: '',
    communications: {
      email: false,
      realTimeChat: false,
      directMessaging: false,
      zoom: false
    }
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) {
          throw new Error('No user logged in');
        }

        const { data: profile, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (error) throw error;

        if (profile) {
          setProfileData({
            ...profileData,
            firstName: profile.first_name || '',
            lastName: profile.last_name || '',
            email: profile.email || '',
            researchInterests: profile.research_interests || '',
            expertise: profile.expertise || '',
            ongoingProjects: profile.ongoing_projects || '',
            previousProjects: profile.previous_projects || '',
            publications: profile.publications || '',
            awards: profile.awards || '',
            availableMeetings: profile.available_meetings || '',
            latestActivities: profile.latest_activities || '',
            profileImageUrl: profile.profile_image_url || '',
            communications: {
              email: profile.preferred_communication?.includes('email') || false,
              realTimeChat: profile.preferred_communication?.includes('realTimeChat') || false,
              directMessaging: profile.preferred_communication?.includes('directMessaging') || false,
              zoom: profile.preferred_communication?.includes('zoom') || false
            }
          });
          // role이 없는 경우에만 'student'를 기본값으로 설정
          setRole(profile.role || 'student');
          console.log("role", profile.role);
          console.log("profileData", profileData);
          console.log("email", profileData.communications.email);
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
        // 에러 발생 시 기본값 'student' 설정
        setRole('student');
      }
    };

    fetchProfile();
  }, []);

  // 프로필 저장 함수
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const updateProfile = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) {
          throw new Error('No user logged in');
        }

        const { data: existingProfile, error: fetchError } = await supabase
          .from('profiles')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (fetchError && fetchError.code !== 'PGRST116') {
          throw fetchError;
        }

        const profilePayload = {
          user_id: user.id,
          first_name: profileData.firstName,
          last_name: profileData.lastName,
          email: profileData.email,
          role: role,
          research_interests: profileData.researchInterests,
          expertise: profileData.expertise,
          ongoing_projects: profileData.ongoingProjects,
          previous_projects: profileData.previousProjects,
          publications: profileData.publications,
          awards: profileData.awards,
          available_meetings: profileData.availableMeetings,
          latest_activities: profileData.latestActivities,
          preferred_communication: Object.entries(profileData.communications)
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .filter(([_, enabled]) => enabled)
            .map(([method]) => method)
        };

        if (existingProfile) {
          const { error: updateError } = await supabase
            .from('profiles')
            .update(profilePayload)
            .eq('user_id', user.id);

          if (updateError) throw updateError;
        } else {
          const { error: insertError } = await supabase
            .from('profiles')
            .insert([profilePayload]);

          if (insertError) throw insertError;
        }

        alert('Profile saved successfully!');
      } catch (error) {
        console.error('Error saving profile:', error);
        alert('Failed to save profile. Please try again.');
      }
    };

    updateProfile();

    console.log(profileData);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (!e.target.files || e.target.files.length === 0) {
        return;
      }

      const file = e.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${uuidv4()}.${fileExt}`;
      const filePath = `${fileName}`;

      console.log("filePath", filePath);
      console.log("file", file);

      // Supabase storage에 파일 업로드
      const { error: uploadError } = await supabase.storage
        .from('profile-images')
        .upload('profile-images/' + filePath, file);

      console.log("uploadError", uploadError);
      if (uploadError) throw uploadError;

      // 업로드된 이미지의 공개 URL 가져오기
      const { data: { publicUrl } } = supabase.storage
        .from('profile-images')
        .getPublicUrl('profile-images/' + filePath);

      console.log("publicUrl", publicUrl);

      // 프로필 데이터 업데이트
      setProfileData({
        ...profileData,
        profileImageUrl: publicUrl
      });

      // 프로필 DB 업데이트
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('No user logged in');

      const { error: updateError } = await supabase
        .from('profiles')
        .update({ profile_image_url: publicUrl })
        .eq('user_id', user.id);

      if (updateError) throw updateError;

    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image. Please try again.');
    }
  };

  return (
    <div className="mainContent">
      <div className={styles.profileContainer}>
        <div className={styles.profileContent}>
          <div className={styles.photoSection}>
            <div className={styles.photoPlaceholder}>
              <img 
                src={profileData.profileImageUrl || "/implement/setting_profile/Placeholder Image.png"} 
                alt="Profile" 
              />
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
              id="imageUpload"
            />
            <label htmlFor="imageUpload" className={styles.uploadButton}>
              Upload Photo
            </label>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.userTypeSelection}>
              <span>Please Select :</span>
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="student"
                  checked={role === 'student'}
                  onChange={(e) => setRole(e.target.value)}
                />
                Student
              </label>
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="professor"
                  checked={role === 'professor'}
                  onChange={(e) => setRole(e.target.value)}
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
    </div>
  );
} 