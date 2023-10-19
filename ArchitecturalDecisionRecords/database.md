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
- [Links](#links)

### Context and Problem Statement

The mobile app "Xpert You Can't Win" needs a reliable method to store data. We must decide on a data storage solution that prioritizes data integrity, security, and performance.

### Decision Drivers

- **Data Integrity:** Ensuring accuracy of stored data.
  
- **Security:** Protection against unauthorized access.

- **Performance:** Efficient data retrieval and storage.

### Considered Options

1. Local Storage (Encrypted)
2. Local Storage (Unencrypted)
3. Remote Database
4. No Storage

### Decision Outcome

**Chosen option:** Local Storage (Encrypted)

### Positive Consequences

- Secure storage of data on the device.
- Quick data retrieval without the need for internet access.

### Negative Consequences

- Data is restricted to the device, which means it won't be available if the user switches devices.
- Encryption might add a slight overhead to read/write operations.

### Pros and Cons of the Options

**Local Storage (Encrypted)**

- Good, due to data security on the device.
- Bad, because data isn't automatically backed up or accessible on other devices.

**Local Storage (Unencrypted)**

- Good, for quick data read/write operations.
- Bad, because of potential security risks.

**Remote Database**

- Good, for centralized data storage and accessibility from multiple devices.
- Bad, because it requires internet connectivity for data operations.

**No Storage**

- Good, for apps that don't need persistent data storage.
- Bad, because user data or preferences can't be saved across sessions.

### Links

- [React Native Secure Storage](https://github.com/talut/react-native-secure-storage)
