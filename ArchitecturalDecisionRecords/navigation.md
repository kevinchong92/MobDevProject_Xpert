# Navigation Strategy

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

For a smooth and intuitive user journey throughout "Xpert You Can't Win", we need to determine the most suitable navigation strategy for our React Native application.

### Decision Drivers

- **User Experience:** Seamless navigation without lags or breaks.
  
- **Development Efficiency:** Easier integration and fewer bugs.

### Considered Options

1. React Navigation
2. React Native Navigation
3. Native Navigation

### Decision Outcome

**Chosen option:** React Navigation

### Positive Consequences

- Written purely in JavaScript, ensuring compatibility with React Native.
- Extensive documentation and community support.
- Flexible and customizable.

### Negative Consequences

- Might have performance issues for highly complex navigational structures.

### Pros and Cons of the Options

**React Navigation**
- **Good:** Highly compatible with React Native out of the box.
- **Good:** Boasts a robust community and detailed documentation.
- **Bad:** Can be less performant with extremely complex navigation structures.

**React Native Navigation**
- **Good:** Uses native modules to achieve navigation, potentially offering better performance.
- **Good:** Facilitates deep linking and other advanced features.
- **Bad:** Requires more native code, leading to a steeper learning curve for pure JavaScript developers.

**Native Navigation**
- **Good:** Leverages platform-specific navigation solutions ensuring the best performance.
- **Good:** Integrates natively with iOS and Android platforms.
- **Bad:** Demands familiarity with native development, which can be daunting for developers accustomed only to JavaScript.

### Links

- [React Navigation](https://reactnavigation.org/)
