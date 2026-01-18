import ProfileClient from './ProfileClient';
import { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { getUserStats } from '@/lib/userStats';

// Mark as dynamic since profiles are user-specific
export const dynamic = 'force-dynamic';

// Generate a placeholder for dynamic profiles
export function generateStaticParams() {
  return [];
}

export const dynamicParams = true;

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  // During build time, Firebase may not be available
  // Return a generic metadata for dynamic profiles
  try {
    // Only attempt to fetch stats if we have a valid base64 id
    if (!params.id || params.id.length < 5) {
      throw new Error('Invalid ID');
    }
    
    const userId = atob(params.id);
    const stats = await Promise.race([
      getUserStats(userId),
      new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 2000))
    ]) as any;
    
    const profileName = stats?.displayName || 'CoderKit Profile';
    
    return createMetadata({
      title: `${profileName}'s Profile`,
      description: `Verified coding profile. ${stats?.coursesCompleted || 0} courses completed, ${stats?.linesTyped || 0} lines typed.`,
      path: `/profile/${params.id}`,
      type: 'profile',
    });
  } catch {
    // Return default metadata if Firebase is unavailable (e.g., during build)
    return createMetadata({
      title: 'Verified Coding Profile',
      description: 'View verified CoderKit coding profile with stats and achievements.',
      path: `/profile/${params.id}`,
      type: 'profile',
    });
  }
}

export default function ProfilePage({ params }: { params: { id: string } }) {
  return <ProfileClient id={params.id} />;
}
