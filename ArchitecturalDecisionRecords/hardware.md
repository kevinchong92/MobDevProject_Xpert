# Hardware

**Status:** Proposed

**Deciders:** Kevin, Yuen Chong || Alex, Shek Yin Leung || Michael, Mo Chau Ngan

**Date:** 2023-10-19

Contents:

- [Context and Problem Statement](#context-and-problem-statement)
- [Decision Drivers](#decision-drivers)
- [Considered Options](#considered-options)
- [Decision Outcome](#decision-outcome)
- [Positive Consequences](#positive-consequences)
- [Negative Consequences](#negative-consequences)
- [Pros and Cons of the Options](#pros-and-cons-of-the-options)
- [Links](#links)

### Context and Problem Statement

To elevate the immersive experience in "Xpert You Can't Win," we're evaluating potential hardware integrations that align with gameplay requirements.

### Decision Drivers

- **User Experience:** Hardware integrations that will augment and deepen the gameplay.
  
- **Compatibility:** Features that are prevalent across a majority of devices to ensure a wider user reach, with a special focus on Android compatibility.

- **Develop Time:** Balancing integration complexity with developmental timelines.

### Considered Options

1. GPS
2. Speaker
3. Fingerprint scanner
4. Camera
5. Bluetooth

### Decision Outcome

**Chosen option:** Speaker Only
- Consider the development timeline is short and as the game is a single player game, other options were deemed superfluous.

### Positive Consequences

- Enriched game ambiance through auditory feedback.
- Potential for immersive soundtracks and audio cues.

### Negative Consequences

- Necessitates careful handling of device volume settings to avoid disruptions.
- Possibility of sound disturbances in certain settings or scenarios.

### Pros and Cons of the Options

**GPS**
- **Good:** Good for potential multi-player modes to locate nearby opponents.
- **Bad:** May be redundant for primarily single-player experiences.

**Speaker**
- **Good:** Enhances user experience by offering an auditory dimension to gameplay.
- **Bad:** Might be intrusive in quiet settings or where loud volumes are not suitable.

**Fingerprint scanner**
- **Good:** Can offer a secure and personalized game start.
- **Bad:** Limited to devices with this hardware feature.

**Camera**
- **Good:** Potential for augmented reality (AR) game modes or photo-based challenges.
- **Bad:** Privacy concerns and need for user permissions.

**Bluetooth**
- **Good:** Allows connectivity with external devices for expanded gameplay (e.g., game controllers).
- **Bad:** Increased battery consumption and compatibility concerns with various Bluetooth versions.

### Links

- [React Native Audio Toolkit](https://www.npmjs.com/package/@react-native-community/audio-toolkit)
