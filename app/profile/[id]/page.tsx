'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Image from 'next/image'
import styles from './Profile.module.css'

interface ProfileData {
  id: string
  first_name: string
  last_name: string
  username: string
  university: string
  profile_image_url: string
  research_interests: string
  expertise: string
  ongoing_projects: string
  publications: string
  awards: string
  previous_projects: string
  preferred_communication: string[]
  available_meetings: string
  latest_activities: string
  connections_count: number
}

const DEFAULT_AVATAR = '/implement/detailed_profile/Placeholder Image.png'

export default function DetailedProfile() {
  const { id } = useParams()
  const router = useRouter()
  const [profile, setProfile] = useState<ProfileData | null>(null)
  const [loading, setLoading] = useState(true)
  const supabase = createClientComponentClient()

  useEffect(() => {
    async function fetchProfile() {
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('user_id', id)
          .single()

        if (error) throw error
        setProfile(data)
      } catch (error) {
        console.error('Error fetching profile:', error)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchProfile()
    }
  }, [id, supabase])

  if (loading) return <div className={styles.loading}>Loading...</div>
  if (!profile) return <div className={styles.error}>Profile not found</div>

  return (
    <div className={`mainContent ${styles.container}`}>
      <div className={styles.profileHeader}>
        <div className={styles.profileInfo}>
          {profile.profile_image_url ? (
            <Image
              src={profile.profile_image_url}
              alt={`${profile.first_name} ${profile.last_name}`}
              width={120}
              height={120}
              className={styles.profileImage}
              onError={(e) => {
                const imgElement = e.target as HTMLImageElement;
                if (imgElement) {
                  imgElement.onerror = null;
                  imgElement.src = DEFAULT_AVATAR;
                }
              }}
            />
          ) : (
            <Image
              src={DEFAULT_AVATAR}
              alt="Default profile"
              width={120}
              height={120}
              className={styles.profileImage}
            />
          )}
          <div className={styles.nameSection}>
            <h1>Dr. {profile.first_name} {profile.last_name}</h1>
            <p className={styles.username}>@{profile.username}</p>
            <p className={styles.connections}>{profile.connections_count} Connections</p>
          </div>
        </div>
        <div className={styles.actionButtons}>
          <button 
            className={styles.connectButton}
            onClick={() => alert('This is a mock profile. Connection feature is not available in the demo version.')}
          >
            Connect
          </button>
          <button 
            className={styles.chatButton}
            onClick={() => router.push(`/chat?userId=${id}`)}
          >
            Chat
          </button>
        </div>
      </div>

      <div className={styles.mainContent}>
        <section>
          <h2>Academic Research Information</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h3>Research Interests</h3>
              <p>{profile.research_interests}</p>
            </div>
            <div className={styles.infoCard}>
              <h3>Expertise</h3>
              <p>{profile.expertise}</p>
            </div>
            <div className={styles.infoCard}>
              <h3>Ongoing Projects</h3>
              <p>{profile.ongoing_projects}</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Accomplishment</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h3>Publications</h3>
              <p>{profile.publications}</p>
            </div>
            <div className={styles.infoCard}>
              <h3>Awards</h3>
              <p>{profile.awards}</p>
            </div>
            <div className={styles.infoCard}>
              <h3>Previous Projects</h3>
              <p>{profile.previous_projects}</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Contact & Collaboration</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h3>Preferred Communication</h3>
              <p>{profile.preferred_communication.join(', ')}</p>
            </div>
            <div className={styles.infoCard}>
              <h3>Available for Meetings</h3>
              <p>{profile.available_meetings}</p>
            </div>
            <div className={styles.infoCard}>
              <h3>Latest Activities</h3>
              <p>{profile.latest_activities}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 