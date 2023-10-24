# Database Storage

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

### Context and Problem Statement

The mobile app "Xpert You Can't Win" needs a reliable method to store data. We must decide on a data storage solution that prioritizes data integrity, security, and performance.

### Decision Drivers

- **Data Integrity:** Ensuring accuracy of stored data.
  
- **Security:** Protection against unauthorized access.

- **Performance:** Efficient data retrieval and storage.

- **Is database needed:** Is the database a must in this project.

### Considered Options

1. Local Storage (Encrypted)
2. Local Storage (Unencrypted)
3. Remote Database
4. No Storage

### Decision Outcome

**Chosen option:** No Storage

### Positive Consequences

- **Simplicity:** Bypasses challenges associated with data management and storage.
- **Security:** Eliminates potential risks linked to data storage, enhancing user trust.

### Negative Consequences

- **User Experience:** Players might anticipate their in-game progress or preferences to be saved for future sessions, which would not be possible without storage.
- **Flexibility:** The absence of storage could restrict potential features or game mechanics that might require data persistence in the future.

### Pros and Cons of the Options

**Local Storage (Encrypted)**

- Good, for safeguarding user data at the device level.
- Bad, as data won't be easily accessible across multiple devices.

**Local Storage (Unencrypted)**

- Good, for swift data read/write processes.
- Bad, due to potential vulnerabilities and security threats.

**Remote Database**

- Good, as it allows for data centralization and multi-device accessibility.
- Bad, due to dependency on internet connectivity for most data-related functions.

**No Storage**

- Good, as it offers a streamlined development process without data management complexities.
- Bad, since it denies users the continuity of saved game states or preferences across sessions.
