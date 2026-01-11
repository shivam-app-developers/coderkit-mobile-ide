# CoderKit Web App - Public Profile Page

## Overview

Public shareable profile page displaying verified user stats from Firebase. This page is designed to showcase a user's coding skills to recruiters, employers, and peers.

---

## URL Structure

```
https://coderkit.app/profile/{encoded_user_id}
```

### Encoding

- Base64 encoded Firebase UID
- Example: `dXNlcklkMTIzNDU2` → decodes to `userId123456`

### Generating Share URL (Mobile App)

```dart
import 'dart:convert';
import 'package:firebase_auth/firebase_auth.dart';

String getShareableProfileUrl() {
  final uid = FirebaseAuth.instance.currentUser?.uid;
  if (uid == null) return '';
  final encoded = base64Encode(utf8.encode(uid));
  return 'https://coderkit.app/profile/$encoded';
}
```

---

## Page Routes

| Route | Description |
|-------|-------------|
| `/profile/{id}` | Public profile page |
| `/stats-explained` | Stats documentation (links to PROFILE_STATS_EXPLAINED.md) |

---

## Firestore Data Source

### Collection: `users/{userId}`

```javascript
{
  // Identity
  displayName: "Jane Doe",
  photoUrl: "https://...",
  accountCreatedAt: Timestamp,
  
  // Stats
  stats: {
    // Coding Activity
    linesTyped: 1234,
    errorsSolved: 156,
    currentStreak: 23,
    
    // Challenges (with difficulty breakdown)
    bugSquasherCompleted: { easy: 40, medium: 35, hard: 12 },
    codeRefactorCompleted: { easy: 10, medium: 8, hard: 5 },
    guidedPracticeCompleted: 15,
    codeScrambleCompleted: 42,
    
    // Code Quality
    challengeAttempts: 120,
    challengeFirstTryPasses: 86,
    firstAttemptSuccessRate: 0.72,
    
    // Projects
    projectsCreated: 6,
    capstoneCompleted: 2,
    
    // Sync
    lastSyncedAt: Timestamp
  },
  
  // Learning (per-language)
  languageStats: {
    "python": { conceptsCompleted: 45, coursesCompleted: 2, timeMinutes: 3600 },
    "javascript": { conceptsCompleted: 30, coursesCompleted: 1, timeMinutes: 1800 },
    "sql": { conceptsCompleted: 15, coursesCompleted: 1, timeMinutes: 600 }
  },
  
  // Achievements earned
  achievements: ["bug_hunter", "week_warrior", "puzzle_starter", "refactor_rookie"]
}
```

---

## Profile Page Layout

```
┌─────────────────────────────────────────────────────┐
│  [Photo]  Jane Doe                                  │
│           Member since Dec 2024                     │
│           ✓ Verified by CoderKit                    │
│                                                     │
│  [Learn More About Stats]  [Share]                  │
├─────────────────────────────────────────────────────┤
│ 🏆 LEARNING                                         │
│ ┌──────────┬──────────┬──────────┐                  │
│ │ Python   │ JS       │ SQL      │                  │
│ │ 45       │ 30       │ 15       │                  │
│ │ concepts │ concepts │ concepts │                  │
│ └──────────┴──────────┴──────────┘                  │
│ 📚 4 Courses Completed | ⏱️ 124 hours invested     │
├─────────────────────────────────────────────────────┤
│ 🔧 PROBLEM SOLVING                                  │
│                                                     │
│ Bug Squasher    ████████████░░░ 87 (12 Hard)        │
│ Code Refactor   █████░░░░░░░░░░ 23 (5 Hard)         │
│ Errors Fixed    156                                 │
├─────────────────────────────────────────────────────┤
│ 📁 BUILDING                                         │
│                                                     │
│ 6 Projects Created  |  2 Capstones Completed        │
│ 42 Code Scrambles Solved                            │
├─────────────────────────────────────────────────────┤
│ 🔥 CONSISTENCY                                      │
│                                                     │
│ 🔥 23 day streak                                    │
│ ✓ 72% first-try pass rate                          │
│ 📝 15 Guided Practice sessions                      │
├─────────────────────────────────────────────────────┤
│ 🏅 ACHIEVEMENTS                                     │
│                                                     │
│ [🐛 Bug Hunter] [📅 Week Warrior] [🧹 Refactor     │
│  Rookie] [🧩 Puzzle Starter]                        │
└─────────────────────────────────────────────────────┘
```

---

## Achievement Definitions

### Bug Squasher Achievements

| ID | Title | Icon | Condition |
|----|-------|------|-----------|
| `bug_hunter` | Bug Hunter | 🐛 | 10 Bug Squashers |
| `bug_slayer` | Bug Slayer | 🗡️ | 50 Bug Squashers |
| `bug_exterminator` | Bug Exterminator | 💀 | 100 Bug Squashers |
| `bug_legend` | Bug Legend | 👑 | 200 Bug Squashers |

### Code Refactor Achievements

| ID | Title | Icon | Condition |
|----|-------|------|-----------|
| `refactor_rookie` | Refactor Rookie | 🧹 | 10 Refactors |
| `clean_coder` | Clean Coder | 🧼 | 50 Refactors |
| `refactor_master` | Refactor Master | 🔮 | 100 Refactors |

### Code Scramble Achievements

| ID | Title | Icon | Condition |
|----|-------|------|-----------|
| `puzzle_starter` | Puzzle Starter | 🧩 | 10 Scrambles |
| `puzzle_pro` | Puzzle Pro | 🎯 | 50 Scrambles |
| `puzzle_master` | Puzzle Master | 🏆 | 100 Scrambles |

### Streak Achievements

| ID | Title | Icon | Condition |
|----|-------|------|-----------|
| `week_warrior` | Week Warrior | 📅 | 7-day streak |
| `month_master` | Month Master | 🗓️ | 30-day streak |

### Error Fixing Achievements

| ID | Title | Icon | Condition |
|----|-------|------|-----------|
| `error_fixer` | Error Fixer | ✅ | 50 errors solved |
| `error_annihilator` | Error Annihilator | ⚡ | 200 errors solved |

---

## Implementation

### Fetching Profile Data

```javascript
// Firebase Web SDK v9+
import { getFirestore, doc, getDoc } from 'firebase/firestore';

async function getProfile(encodedId) {
  const userId = atob(encodedId); // Decode Base64
  const db = getFirestore();
  const docRef = doc(db, 'users', userId);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    throw new Error('Profile not found');
  }
}
```

### Calculating Totals

```javascript
function calculateTotals(stats) {
  // Total Bug Squashers
  const bugSquasher = stats.bugSquasherCompleted;
  const totalBugs = bugSquasher.easy + bugSquasher.medium + bugSquasher.hard;
  
  // Total Code Refactors
  const refactor = stats.codeRefactorCompleted;
  const totalRefactors = refactor.easy + refactor.medium + refactor.hard;
  
  // First-try rate
  const firstTryRate = stats.challengeAttempts > 0 
    ? (stats.challengeFirstTryPasses / stats.challengeAttempts * 100).toFixed(0)
    : 0;
  
  return { totalBugs, totalRefactors, firstTryRate };
}
```

### Language Stats Display

```javascript
function formatLearningTime(minutes) {
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  return `${hours} hours`;
}

function getLanguageSkills(languageStats) {
  return Object.entries(languageStats)
    .map(([lang, data]) => ({
      language: lang.charAt(0).toUpperCase() + lang.slice(1),
      concepts: data.conceptsCompleted,
      courses: data.coursesCompleted,
      time: formatLearningTime(data.timeMinutes)
    }))
    .sort((a, b) => b.concepts - a.concepts);
}
```

---

## UI Components

### Verified Badge

Display "✓ Verified by CoderKit" badge prominently. This indicates:

- Stats are tracked via anti-cheat measures
- No copy-paste in challenges
- Activity is genuine

### "Learn More" Button

Link to `/stats-explained` route which renders the `PROFILE_STATS_EXPLAINED.md` content.

### Progress Bars

For Bug Squasher and Code Refactor, show visual progress bars:

- Calculate width based on total / milestone (e.g., 87/200 for next achievement)
- Highlight difficulty breakdown on hover

### Share Button

```javascript
function shareProfile(encodedId) {
  const url = `https://coderkit.app/profile/${encodedId}`;
  navigator.clipboard.writeText(url);
  // Show toast: "Profile link copied!"
}
```

---

## Responsive Design

### Desktop (>1024px)

- Full layout as shown above
- Side-by-side stat categories

### Tablet (768px - 1024px)  

- 2-column grid for stats
- Achievements wrap to 2 rows

### Mobile (<768px)

- Single column layout
- Stats stack vertically
- Collapsible sections

---

## Security

### Firestore Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      // Anyone can read (for public profile)
      allow read: if true;
      // Only owner can write
      allow write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### Data Validation

- All stats are non-negative integers
- First-try rate is calculated, not user-provided
- Achievement IDs are validated against known list

---

## SEO Metadata

```html
<title>{displayName}'s Coding Profile | CoderKit</title>
<meta name="description" content="{displayName} has completed {bugTotal} debugging challenges, fixed {errorsFixed} errors, and maintained a {streak}-day coding streak. View verified coding stats on CoderKit.">
<meta property="og:title" content="{displayName}'s Verified Coding Profile">
<meta property="og:description" content="87 Bug Squashers | 72% First-Try Rate | 23 Day Streak">
<meta property="og:image" content="{photoUrl}">
```

---

## Related Documentation

- [PROFILE_STATS_EXPLAINED.md](./PROFILE_STATS_EXPLAINED.md) - Detailed explanation of each stat
- [APP_CAPABILITIES.md](./APP_CAPABILITIES.md) - Full app features documentation
