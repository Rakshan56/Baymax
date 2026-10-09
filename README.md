# Baymax

> A gentle digital space for checking in, learning about wellbeing, and taking one small step at a time.

Baymax is a pastel, journal-inspired mental-wellness website with a friendly penguin companion. It is designed to feel calm, welcoming, and easy to use — never overwhelming.

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
</p>

## Product showcase

Baymax is organised as a calm, guided experience rather than a crowded dashboard. Each area has one clear purpose:

| Experience | What users can do | What makes it useful |
| --- | --- | --- |
| **Welcome space** | Understand Baymax and choose where to begin | Friendly copy and simple entry points reduce decision fatigue |
| **Mood check-in** | Select a feeling and add an optional reflection | Turns an overwhelming moment into a small, concrete action |
| **Companion** | Start with a prompt or write what is on their mind | Offers a conversational starting point without demanding a perfect explanation |
| **Toolkit** | Open breathing, grounding, and journaling activities | Provides practical steps that can be tried immediately |
| **Learning centre** | Search accessible wellbeing articles | Helps users learn at their own pace without presenting general information as a diagnosis |
| **Progress** | Review saved reflections over time | Encourages gentle noticing instead of scores, pressure, or comparison |
| **Support** | Find guidance for trusted people and professional care | Makes the limits of a digital companion clear and keeps urgent support visible |

### The visual language

- Pastel blue, mint, lavender, and cream tones create a softer atmosphere.
- The original penguin mascot gives the experience a warm and recognisable identity.
- Journal-inspired cards make information feel approachable and easy to scan.
- Short labels and focused actions keep each screen understandable.
- Responsive layouts allow the same experience to work on desktop and mobile.

## What the website does

Baymax gives users a quiet place to:

- Notice and save how they are feeling
- Write short private reflections
- Try breathing, grounding, and journaling activities
- Explore friendly educational articles
- Talk through thoughts with the companion experience
- Review gentle reflection history
- Find guidance for professional or urgent support
- Manage communication preferences and local data

The experience is intentionally low-pressure. Users can start with a mood, a small activity, an article, or a conversation.

## How it works

```text
Open Baymax
    ↓
Choose a gentle starting point
    ↓
Check in, reflect, learn, or try an activity
    ↓
Save useful moments when you want to
    ↓
Return later and notice your own patterns
```

### 1. Start

The landing page introduces Baymax and offers simple entry points without requiring users to understand the whole product first.

### 2. Check in

The mood screen lets a user choose a feeling and optionally add a note. In the current demo experience, these reflections are saved in the browser so the interface can be explored without an online account.

### 3. Take a small step

The toolkit presents short activities such as breathing, grounding, and reflection. Activities can be opened, read, and marked complete.

### 4. Learn and reflect

The learning area provides searchable, general wellbeing information. The progress area shows saved reflections in a gentle, non-clinical format.

### 5. Get support

The support screen explains when to contact a trusted person, professional, or local emergency service. Baymax does not present itself as an emergency response service or a replacement for care.

## Companion and AI direction

Baymax includes the user experience for a conversational companion: starter prompts, message display, and a chat composer.

The companion is designed to work like this:

```text
User writes a message
        ↓
Baymax receives the conversation securely
        ↓
Safety and wellbeing rules are checked
        ↓
An AI provider generates a supportive response
        ↓
The response is shown as one optional next step
```

The current project includes the conversation interface and backend foundation. A live AI provider is not enabled yet, so the application does not expose an API key or pretend that simulated replies are professional care.

When connected in the future, the AI should:

- Run through the server, never directly from the browser
- Keep provider credentials private
- Avoid diagnosis and medical certainty
- Recognise urgent or crisis language
- Encourage professional or emergency support when appropriate
- Use clear timeouts, rate limits, and error messages
- Keep the user in control of what they share

## Feature status

| Feature | Current state |
| --- | --- |
| Responsive landing page | Working |
| Login and signup experience | Working |
| Mood check-ins | Working in local demo mode |
| Reflection history | Working in local demo mode |
| Coping toolkit | Working |
| Learning centre | Working with educational demo content |
| Support guidance | Working |
| Settings and local data controls | Working |
| Companion chat interface | Available as a product surface |
| Connected account persistence | Backend foundation available |
| Live AI responses | Planned |
| Verified assessment scoring | Not enabled yet |

## Try it locally

```powershell
cd frontend
npm install
npm run dev
```

Then open `http://localhost:5173`.

Create a production build with:

```powershell
npm run build
```

The website also has an optional server-backed mode for development. Server configuration is intentionally kept outside this showcase README and should be supplied through local environment files.

## Design principles

- **Gentle:** calm colours, friendly language, and small actions
- **Clear:** honest labels when a feature is a demo or not yet connected
- **Private:** no credentials or provider keys are placed in the browser interface
- **Accessible:** responsive layouts, visible focus states, and readable content
- **Responsible:** no diagnosis claims and no invented crisis contacts

## Important note

Baymax is an educational software project, not a medical service or emergency response system. If someone may be in immediate danger, contact local emergency services or go to the nearest emergency department.
