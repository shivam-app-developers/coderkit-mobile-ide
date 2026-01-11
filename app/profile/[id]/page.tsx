'use client';

import { use, useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

interface UserStats {
  displayName: string;
  coursesCompleted: number;
  xp: number;
  linesTyped: number;
  streak: number;
  badges: string[];
}

export default function ProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [stats, setStats] = useState<UserStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      // In a real app, we would fetch from Firestore using the decoded ID
      // const decodedId = atob(id);
      // const docRef = doc(db, "users", decodedId);
      // const docSnap = await getDoc(docRef);

      // For now, using dummy data
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay

      setStats({
        displayName: "CoderKit User",
        coursesCompleted: 5,
        xp: 12500,
        linesTyped: 3420,
        streak: 12,
        badges: ["Bug Hunter", "Week Warrior", "Python Basics"]
      });
      setLoading(false);
    }

    if (id) {
      fetchStats();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Profile Not Found</h2>
            <p className="text-gray-600 mt-2">The requested profile could not be loaded.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">

        {/* Header */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full gradient-bg flex items-center justify-center text-white text-3xl font-bold">
              {stats.displayName.charAt(0)}
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl font-bold text-gray-900">{stats.displayName}</h1>
              <p className="text-gray-500 text-sm mt-1">CoderKit Learner</p>
            </div>
            <div className="flex gap-4">
               <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
                 Share Profile
               </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
            <div className="text-gray-500 text-sm mb-1">Courses Completed</div>
            <div className="text-3xl font-bold text-brand-primary">{stats.coursesCompleted}</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
            <div className="text-gray-500 text-sm mb-1">Total XP</div>
            <div className="text-3xl font-bold text-brand-secondary">{stats.xp.toLocaleString()}</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
             <div className="text-gray-500 text-sm mb-1">Lines Typed</div>
             <div className="text-3xl font-bold text-brand-accent">{stats.linesTyped.toLocaleString()}</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
             <div className="text-gray-500 text-sm mb-1">Day Streak</div>
             <div className="text-3xl font-bold text-orange-500">{stats.streak} 🔥</div>
          </div>
        </div>

        {/* Badges */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
           <h3 className="text-xl font-bold text-gray-900 mb-6">Achievements</h3>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {stats.badges.map((badge, index) => (
               <div key={index} className="flex flex-col items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-100 to-amber-100 flex items-center justify-center text-2xl mb-3">
                   🏆
                 </div>
                 <span className="font-semibold text-gray-900 text-sm text-center">{badge}</span>
               </div>
             ))}
           </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
