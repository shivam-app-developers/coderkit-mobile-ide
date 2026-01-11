# Firestore Purchase Schema for Web Purchases Integration

This document describes the Firestore schema used by the CoderKit mobile app for storing purchases. **Web purchases must follow this exact schema** to ensure cross-platform sync.

---

## 📁 Firestore Collection Structure

```
users/
  └── {uid}/                          ← User document
        ├── purchases                  ← Map (not subcollection)
        │     ├── purchasedCourses     ← Array<String>
        │     ├── activeSubscription   ← String (nullable)
        │     └── lastSyncedAt         ← Timestamp
        ├── stats                      ← Map (user activity stats)
        └── languageStats              ← Map (language-specific progress)
```

> [!IMPORTANT]
> Purchases are stored as a **map field** inside the `users/{uid}` document, NOT as a subcollection.

---

## 📄 Document Schema: `users/{uid}`

### Full Document Structure

```json
{
  "displayName": "John Doe",
  "photoUrl": "https://...",
  "accountCreatedAt": "2026-01-15T10:30:00.000Z",
  
  "purchases": {
    "purchasedCourses": ["python_101", "java_101", "web_101"],
    "activeSubscription": "sub_workspace_fullstack",
    "lastSyncedAt": <Firestore Timestamp>
  },
  
  "stats": {
    "linesTyped": 1500,
    "errorsSolved": 42,
    "currentStreak": 7,
    "lastActivityDate": "2026-01-11T18:30:00.000Z",
    "bugSquasherCompleted": { "easy": 5, "medium": 3, "hard": 1 },
    "codeRefactorCompleted": { "easy": 4, "medium": 2, "hard": 0 },
    "codeScrambleCompleted": 12,
    "guidedPracticeCompleted": 25,
    "projectsCreated": 3,
    "capstoneCompleted": 2,
    "challengeAttempts": 50,
    "challengeFirstTryPasses": 35,
    "firstAttemptSuccessRate": 0.7,
    "lastSyncedAt": <Firestore Timestamp>
  },
  
  "languageStats": {
    "python": {
      "conceptsCompleted": 45,
      "coursesCompleted": 2,
      "timeMinutes": 360
    },
    "java": {
      "conceptsCompleted": 20,
      "coursesCompleted": 1,
      "timeMinutes": 180
    }
  }
}
```

---

## 🛒 Purchase-Specific Fields

### `purchases.purchasedCourses` (Array<String>)

Contains **course IDs** (not product IDs). The mobile app converts between them.

| Field | Type | Description |
|-------|------|-------------|
| `purchasedCourses` | `Array<String>` | List of purchased course IDs |

**Example values:**

```json
["python_101", "python_201", "java_101", "web_101", "go_101"]
```

### `purchases.activeSubscription` (String | null)

Stores the current active subscription product ID.

| Value | Description |
|-------|-------------|
| `null` | No active subscription |
| `"sub_workspace_web"` | Web + Scripting Workspace |
| `"sub_workspace_enterprise"` | Enterprise Workspace |
| `"sub_workspace_fullstack"` | Full Stack Pro |
| `"lifetime_power_pack"` | Lifetime unlock (one-time) |

### `purchases.lastSyncedAt` (Timestamp)

Firestore server timestamp of last sync.

---

## 🔗 Course ID ↔ Product ID Mapping

> [!NOTE]
> The mobile app uses **course IDs** internally (e.g., `python_101`) but Google Play uses **product IDs** (e.g., `course_python_101`).

### Conversion Functions

```dart
// Course ID → Product ID
String productId = 'course_${courseId}';  // e.g., python_101 → course_python_101

// Product ID → Course ID
String courseId = productId.replaceFirst('course_', '');  // e.g., course_python_101 → python_101
```

### Complete Product ID Mapping Table

| Course ID | Product ID | Price |
|-----------|-----------|-------|
| **Python Track** |||
| `python_101` | `course_python_101` | $5.99 |
| `python_201` | `course_python_201` | $9.99 |
| `python_301` | `course_python_301` | $14.99 |
| `python_302` | `course_python_302` | $14.99 |
| `python_401` | `course_python_401` | $19.99 |
| `python_402` | `course_python_402` | $19.99 |
| **Java Track** |||
| `java_101` | `course_java_101` | $5.99 |
| `java_201` | `course_java_201` | $9.99 |
| `java_301` | `course_java_301` | $14.99 |
| **Go Track** |||
| `go_101` | `course_go_101` | $5.99 |
| `go_201` | `course_go_201` | $9.99 |
| `go_301` | `course_go_301` | $14.99 |
| **Web Track** |||
| `web_101` | `course_web_101` | $5.99 |
| `web_201` | `course_web_201` | $9.99 |
| `web_301` | `course_web_301` | $14.99 |
| `web_302` | `course_web_302` | $14.99 |
| **Groovy Track** |||
| `groovy_101` | `course_groovy_101` | $5.99 |
| `groovy_201` | `course_groovy_201` | $9.99 |
| **Clojure Track** |||
| `clojure_101` | `course_clojure_101` | $5.99 |
| `clojure_201` | `course_clojure_201` | $9.99 |
| **SQL Track** |||
| `sql_101` | `course_sql_101` | $5.99 |
| **C Language Track** |||
| `c_101` | `course_c_101` | $5.99 |
| `c_201` | `course_c_201` | $9.99 |

### Subscription Product IDs

| Product ID | Description | Monthly | Annual |
|------------|-------------|---------|--------|
| `sub_workspace_web` | Web + Scripting Workspace | $1.99 | $11.99 |
| `sub_workspace_enterprise` | Enterprise Workspace | $1.99 | $11.99 |
| `sub_workspace_fullstack` | Full Stack Pro | $4.99 | $29.99 |
| `lifetime_power_pack` | Lifetime Power Pack | - | $79.99 |

---

## ✅ How the Mobile App Verifies Purchases

### 1. Course Purchase Check

```dart
// user_progress_service.dart - Line 194
bool isCoursePurchased(String courseId) {
  return purchasedCourses.contains(courseId);
}
```

**The mobile app checks if `courseId` exists in `purchases.purchasedCourses` array.**

### 2. Subscription Check

```dart
// user_progress_service.dart - Line 217
bool hasWorkspaceAccess() {
  return activeSubscription.value != null;
}
```

**The mobile app checks if `purchases.activeSubscription` is not null.**

Additionally, in `purchase_service.dart`:

```dart
// purchase_service.dart - Line 249
bool hasWorkspaceAccess() {
  return isPurchased(ProductIds.subWebScripting) ||
      isPurchased(ProductIds.subEnterprise) ||
      isPurchased(ProductIds.subFullStack) ||
      isPurchased(ProductIds.lifetimePowerPack);
}
```

### 3. Sync on App Launch

The mobile app fetches purchases from Firestore on login:

```dart
// user_progress_service.dart - Line 279
Future<void> fetchPurchasesFromFirestore() async {
  final user = _auth.currentUser;
  if (user == null) return;

  final doc = await _firestore.collection('users').doc(user.uid).get();
  if (doc.exists && doc.data() != null) {
    final purchases = data['purchases'] as Map<String, dynamic>;
    
    // Restore courses
    final courses = purchases['purchasedCourses'] as List;
    purchasedCourses.addAll(courses);
    
    // Restore subscription
    final sub = purchases['activeSubscription'] as String?;
    activeSubscription.value = sub;
  }
}
```

---

## 🌐 Web Purchase Implementation Requirements

### Writing Purchases to Firestore

When a web purchase is completed (via Stripe, PayPal, etc.), the web app must:

```javascript
// Example: After successful payment
await setDoc(doc(db, 'users', userId), {
  purchases: {
    purchasedCourses: arrayUnion('python_101'),  // Add course ID
    lastSyncedAt: serverTimestamp()
  }
}, { merge: true });
```

For subscriptions:

```javascript
await setDoc(doc(db, 'users', userId), {
  purchases: {
    activeSubscription: 'sub_workspace_fullstack',
    lastSyncedAt: serverTimestamp()
  }
}, { merge: true });
```

### Reading Purchases

```javascript
const userDoc = await getDoc(doc(db, 'users', userId));
const data = userDoc.data();

const purchasedCourses = data?.purchases?.purchasedCourses || [];
const activeSubscription = data?.purchases?.activeSubscription || null;

// Check if user owns a course
const ownssPython101 = purchasedCourses.includes('python_101');

// Check if user has workspace access
const hasWorkspaceAccess = activeSubscription !== null;
```

---

## ⚠️ Critical Notes for Web Implementation

> [!CAUTION]
>
> 1. **Always use course IDs, not product IDs** when storing in Firestore
> 2. **Use `arrayUnion`** to avoid race conditions when adding courses
> 3. **Always use `merge: true`** to preserve other user data
> 4. **Set `lastSyncedAt`** with `serverTimestamp()` for auditing

### Subscription Expiry Handling

> [!WARNING]
> The current mobile implementation does **NOT** check subscription expiry dates. It simply trusts that `activeSubscription` being non-null means the user has access.
>
> For web purchases with subscriptions:
>
> - Consider adding an `expiresAt` field
> - Implement a Cloud Function to clear expired subscriptions
> - Or use Firebase Authentication custom claims for subscription status

### Suggested Enhanced Schema (Future)

```json
{
  "purchases": {
    "purchasedCourses": ["python_101", "java_101"],
    "activeSubscription": "sub_workspace_fullstack",
    "subscriptionExpiresAt": "2027-01-11T00:00:00.000Z",  // NEW
    "purchaseHistory": [  // NEW - for auditing
      {
        "productId": "course_python_101",
        "platform": "web",
        "paymentProvider": "stripe",
        "transactionId": "ch_xxx",
        "purchasedAt": "2026-01-11T18:45:00.000Z",
        "amount": 599,
        "currency": "USD"
      }
    ],
    "lastSyncedAt": <Timestamp>
  }
}
```

---

## 📱 Mobile App Source Files Reference

| File | Purpose |
|------|---------|
| [purchase_service.dart](file:///c:/Users/Software/DevelopementFlutter/project5/code_lab/lib/app/core/services/purchase_service.dart) | Google Play IAP integration, product ID mappings |
| [user_progress_service.dart](file:///c:/Users/Software/DevelopementFlutter/project5/code_lab/lib/app/core/services/user_progress_service.dart) | Firestore sync, purchase verification |
| [user_stats_service.dart](file:///c:/Users/Software/DevelopementFlutter/project5/code_lab/lib/app/core/services/user_stats_service.dart) | User activity stats sync |

---

## 🔐 Firebase Security Rules (Required)

Ensure your Firestore rules allow authenticated users to read/write their own purchase data:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      // Users can read/write their own data
      allow read, write: if request.auth != null && request.auth.uid == userId;
      
      // Purchases field validation
      allow update: if request.auth.uid == userId
        && request.resource.data.purchases.purchasedCourses is list
        && (request.resource.data.purchases.activeSubscription == null 
            || request.resource.data.purchases.activeSubscription is string);
    }
  }
}
```

> [!TIP]
> For production, consider using Cloud Functions to validate purchases server-side before writing to Firestore. This prevents users from manually adding courses they didn't pay for.

---

## Summary

| What | Where | Format |
|------|-------|--------|
| Purchased courses | `users/{uid}.purchases.purchasedCourses` | Array of course IDs (e.g., `["python_101"]`) |
| Active subscription | `users/{uid}.purchases.activeSubscription` | Product ID string or `null` |
| Last sync timestamp | `users/{uid}.purchases.lastSyncedAt` | Firestore Timestamp |
| User stats | `users/{uid}.stats` | Map with activity metrics |
| Language progress | `users/{uid}.languageStats` | Map keyed by language |

---

*Last updated: 2026-01-11*
