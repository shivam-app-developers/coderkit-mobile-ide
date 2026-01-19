# Frequently Asked Questions (FAQ)

Got questions? Here are answers to the most common ones.

---

## 📱 Installation & Setup

### Q: What are the system requirements?
**A:** 
- **Android:** 10+ (API 29+)
- **iOS:** 14+ (in beta, launching soon)
- **Storage:** ~200MB free (base app is 50MB)
- **RAM:** 4GB minimum (6GB+ recommended)

### Q: How much storage do I need?
**A:**
- **Base app:** 50MB
- **Per language runtime:** 150-300MB (download once, use offline)
- **Courses:** 20-50MB bundled, more available as downloads

**Tip:** Delete unused language runtimes to free space (Settings → Languages → Manage).

### Q: Does CoderKit work offline?
**A:**
- ✅ **Offline:** Code editor, running Python/Java/C, integrated courses, visualizers
- ❌ **Requires internet:** Downloading runtimes, syncing progress, premium course access, GitHub features

**Recommendation:** Download your language runtime on WiFi, then use offline.

### Q: Can I use CoderKit on iPad/Tablet?
**A:**
- ✅ Yes! iPad is supported
- ✅ Larger screen = larger keyboard (more comfortable)
- ⚠️ Not optimized for landscape yet (coming Q1 2026)

---

## 💻 Coding & IDE

### Q: The keyboard is too small. How do I make it bigger?
**A:**
1. **Use landscape mode** - Rotate phone sideways for more space
2. **Use iPad/larger device** - Naturally larger screen
3. **Settings → Keyboard → Increase size** (option available in settings)
4. **Connect Bluetooth keyboard** - For full desktop experience

### Q: Can I use my own Bluetooth keyboard?
**A:**
- ✅ Yes! Full support for external keyboards
- ✅ Keyboard shortcuts work (Ctrl+C, Ctrl+Z, etc.)
- ⚠️ Custom CoderKit keyboard disables (you'll use system keyboard)

### Q: How do I run code?
**A:**
1. Write code in editor
2. Tap **▶ Run** button (top-right)
3. See output in terminal
4. If code needs input, terminal shows input field
5. Tap **⏹ Stop** to kill running process

### Q: My code is stuck in an infinite loop. How do I stop it?
**A:**
- Tap **⏹ Stop** button
- Process terminates immediately
- Fix your code and run again

### Q: Can I create multiple projects?
**A:**
- ✅ Yes! Create as many as you want
- **Home screen** → **➕** → Create New Project
- Each project has its own folder with files

### Q: Can I import files from my computer?
**A:**
1. **IDE** → **Files sidebar** → **Import**
2. Choose file from device
3. Select project folder
4. File added to your project

### Q: Can I export/download my code?
**A:**
1. **Files sidebar** → Select file
2. Tap **⋯ More** → **Export**
3. File saved to device storage
4. Share via email, cloud drive, etc.

### Q: How do I switch between files?
**A:**
- **Tap file tab** at top of editor (main.py, utils.py, etc.)
- Or use **Files sidebar** → tap file name

### Q: Can I undo my changes?
**A:**
- ✅ Yes! Unlimited undo history
- Tap **UNDO** button on keyboard (or Ctrl+Z on Bluetooth keyboard)
- Redo with **REDO** button (Ctrl+Y)

---

## 🐍 Language & Execution

### Q: Which languages are supported?
**A:**
- 🐍 Python 3.10
- ☕ Java 8+
- 🌐 JavaScript, HTML, CSS
- 🔧 C, C++
- 🎯 Go
- 💎 Groovy, Clojure, SQL, Bash
- (PHP, Ruby coming Q2 2026)

See [supported-languages.md](./supported-languages.md) for details on each.

### Q: How big are language downloads?
**A:**
- **Python:** ~250MB (includes NumPy, Pandas, Scikit-learn)
- **Java:** ~150MB (includes Eclipse Compiler + Android SDK)
- **C/C++:** ~200MB (Clang compiler + NDK headers)
- **Go:** ~100MB (Go compiler)

### Q: Can I run Python scripts with external libraries?
**A:**
- ✅ Yes! Pre-installed: NumPy, Pandas, Requests, BeautifulSoup, Flask, Django, etc.
- ❌ Custom packages require specific versions (limited to Chaquopy mirror)

### Q: Does CoderKit support Jupyter Notebooks?
**A:**
- ❌ Not yet
- ✅ Alternative: Interactive Python console (REPL mode) coming Q2 2026
- 💡 For now: Use CoderKit's Python IDE + visualizers for learning

### Q: Can I use NumPy, Pandas, TensorFlow?
**A:**
- ✅ **NumPy, Pandas, Scikit-learn:** Pre-installed, fully supported
- ⚠️ **TensorFlow, PyTorch:** Not yet (heavy dependencies, large download)
- 🔄 **Coming:** Lighter ML libraries in Q2 2026

### Q: Why is my Java compilation slow?
**A:**
- Normal behavior (Eclipse Compiler processes code)
- ~2-5 seconds on first run, faster afterward (caching)
- Expected on mobile (desktop is still faster)

### Q: Can I use Java Swing or JavaFX?
**A:**
- ❌ No (requires full GUI framework)
- ✅ Alternative: Print output to terminal, use web preview for UI

### Q: Does CoderKit support async/await in Python?
**A:**
- ✅ Yes! Full asyncio support
- Works for network requests, concurrent tasks
- Example courses included

---

## 📚 Learn Mode

### Q: Can I take courses for free?
**A:**
- ✅ **Free courses:** Python 101, Web 101, CS Fundamentals
- 💰 **Premium courses:** $5.99–$19.99 per course
- 📦 **Subscriptions:** $1.99–$4.99/month for unlimited access

### Q: What's the difference between courses and challenges?
**A:**
- **Courses:** Structured learning (explanation → visualizer → practice → challenge)
- **Challenges:** Quick problems to test knowledge
- **Recommended:** Do courses first, challenges for practice

### Q: What happens if I get stuck on a lesson?
**A:**
1. **Rewatch visualizer** - Second viewing often helps
2. **Reread explanation** - Look for details you missed
3. **Try easier challenge** - Build confidence, come back
4. **Join Discord** - Ask the community
5. **Take a break** - Sometimes sleep helps you learn better

### Q: Can I download courses for offline use?
**A:**
- ✅ **With subscription:** Settings → Courses → Download for Offline
- ❌ **Without subscription:** Stream only (requires internet)

### Q: How do I track my progress?
**A:**
1. **Dashboard** → See all stats
2. **Per course** → Progress bar shows completion %
3. **Streak counter** → Days you've coded consecutively
4. **Stats** → Total lines typed, problems solved, time spent

### Q: Can I sync progress across devices?
**A:**
- ✅ **Yes!** With Full Stack Pro subscription
- Progress syncs between mobile + VS Code extension
- Works instantly when connected

### Q: What does "Mastery Check" mean?
**A:**
- Quiz at end of course to confirm you understand
- Not graded, just verification
- Can retake unlimited times

---

## 🎁 Pricing & Subscriptions

### Q: Is there a free plan?
**A:**
- ✅ **Absolutely!** CoderKit is free forever
- Limited features: Python + Web + free courses
- **Free plan includes:** IDE, limited courses, 1 visualizer

### Q: What's included in each subscription?
**A:**

| Plan | Cost | What's Included |
|------|------|-----------------|
| **Free** | $0 | Python + Web IDE, free courses |
| **Workspace Web** | $1.99/mo | Web + JS IDE, all visualizers |
| **Workspace Enterprise** | $3.99/mo | Java, C++, Go, enterprise courses |
| **Full Stack Pro** | $4.99/mo | EVERYTHING, desktop sync |

**Note:** Annual plans are cheaper (pay 10 months, get 12).

### Q: Can I buy individual courses instead of subscribing?
**A:**
- ✅ Yes! $5.99–$19.99 per course
- **Lifetime access** after purchase
- **No subscription needed** for that course

### Q: Is there a free trial?
**A:**
- ✅ **7-day free trial** for all subscriptions
- No credit card required
- Cancel anytime before trial ends

### Q: What's the refund policy?
**A:**
- ✅ **30-day money-back guarantee** on courses
- ✅ **7-day refund** on subscriptions (during trial)
- Email support@coderkit.app to request refund

### Q: Do prices vary by country?
**A:**
- ✅ Yes, adjusted for local purchasing power (Play Store pricing)
- India: ₹50/mo for Workspace Web
- Brazil: R$9.90/mo
- See Play Store for your region

---

## 🚨 Troubleshooting

### Q: My code won't run. What should I check?
**A:**
1. **Syntax errors?** Look for red underlines
2. **Language installed?** Settings → Languages → Check if downloaded
3. **Correct runtime?** Running Python code? Make sure Python is selected
4. **Try simpler code?** Start with Hello World to test
5. **Restart app?** Close completely, reopen

### Q: Language download keeps failing. What's wrong?
**A:**
1. **Internet connection?** Use WiFi, not cellular
2. **Storage?** Check if you have 200MB+ free space
3. **Server down?** Rare, but try again later (1 hour)
4. **Try manual download:** Settings → Languages → Retry

### Q: App crashes when I run code. Why?
**A:**
1. **Memory limit?** Close other apps
2. **Infinite loop?** Tap Stop before it crashes
3. **Large file?** Split input into smaller chunks
4. **Corrupted runtime?** Reinstall language (Settings → Languages → Uninstall → Reinstall)

### Q: My progress isn't syncing. How do I fix?
**A:**
1. **Internet connected?** Check WiFi/cellular
2. **Logged in?** Make sure you're signed in
3. **Manual sync:** Settings → Profile → Sync Now
4. **Clear cache:** Settings → Storage → Clear Cache → Restart app

### Q: I forgot my password. How do I reset it?
**A:**
1. Tap **Sign In** on home screen
2. Tap **Forgot Password?**
3. Enter email
4. Click link in email
5. Set new password

### Q: How do I delete my account?
**A:**
1. **Settings** → **Profile** → **Account Settings**
2. Scroll to **Danger Zone**
3. Tap **Delete Account**
4. Confirm (irreversible!)

### Q: The custom keyboard is annoying me. Can I use the system keyboard?
**A:**
- ❌ Custom keyboard is core feature
- ✅ Alternative: Use Bluetooth keyboard (disables custom keyboard)
- 💡 Pro tip: Keyboard gets easier after 30 minutes of use

### Q: Can I use CoderKit on a Chromebook?
**A:**
- ✅ **Android app** on Chrome OS (Google Play Store)
- ✅ **VS Code extension** on Chromebook (full desktop experience)
- Recommend: VS Code extension for better experience

---

## 🔒 Privacy & Security

### Q: Is my code private?
**A:**
- ✅ **Yes!** Only you can see your code
- ✅ Server-side encryption
- ✅ We don't analyze or resell your code

### Q: What data do you collect?
**A:**
- ✅ **Stored:** Email, username, progress stats
- ❌ **Never:** Password (Firebase hashes it), payment info
- ❌ **Never:** Code content (unless you explicitly share)

### Q: Can I see CoderKit's privacy policy?
**A:**
- [privacy.coderkit.app](https://privacy.coderkit.app)
- [terms.coderkit.app](https://terms.coderkit.app)

---

## 👥 Community & Support

### Q: How do I join the community Discord?
**A:**
- [discord.gg/codelab](https://discord.gg/codelab)
- Ask questions, share projects, make friends
- Mods available to help

### Q: How do I report a bug?
**A:**
1. **In-app:** Settings → Help → Report Bug
2. **Email:** [bugs@coderkit.app](mailto:bugs@coderkit.app)
3. **GitHub:** [github.com/codelab/issues](https://github.com/shivam-app-developers/code_lab/issues)

### Q: How do I request a feature?
**A:**
1. **Discord:** #feature-requests channel
2. **Email:** [feedback@coderkit.app](mailto:feedback@coderkit.app)
3. **In-app:** Settings → Help → Suggest Feature

### Q: Who do I contact for urgent issues?
**A:**
- **Email:** [support@coderkit.app](mailto:support@coderkit.app)
- **Response time:** 24-48 hours
- **Include:** Device model, app version, error screenshot

---

## 🌟 Tips & Tricks

### Q: How do I type faster on the custom keyboard?
**A:**
- **Swipe letters** instead of tapping (gesture typing)
- **Long-press** for variants (a → á, à, ä)
- **Double-tap SPACE** for period (.)
- **Double-tap SHIFT** for CAPS LOCK

### Q: How do I make the editor text larger?
**A:**
1. **Settings** → **Appearance** → **Font Size**
2. Slide to increase
3. Changes apply immediately

### Q: Can I use custom themes?
**A:**
- ✅ **Light Mode** (white background)
- ✅ **Dark Mode** (black background, better for eyes)
- 🔄 **Custom themes coming Q2 2026** (user-created themes)

### Q: How do I see the error in my code?
**A:**
1. **Red underline** = error location
2. Tap red underline → see error message
3. Read message carefully (usually tells you the fix)
4. Fix and run again

### Q: Can I use emojis in my code?
**A:**
- ✅ **Python:** Yes, variable names can have emojis
- ❌ **Java:** No (not valid Java syntax)
- ✅ **JavaScript:** Strings can include emojis
- ℹ️ Note: Not recommended (sticks to ASCII for compatibility)

---

## 📞 Still Have Questions?

- **Email:** [support@coderkit.app](mailto:support@coderkit.app)
- **Discord:** [discord.gg/codelab](https://discord.gg/codelab)
- **Twitter:** [@CoderKitApp](https://twitter.com/CoderKitApp)
- **Live chat:** Available in Settings → Help

**We're here to help!** Don't hesitate to reach out. 💬

