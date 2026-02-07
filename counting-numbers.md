# Implementation Plan: Counting Numbers Animation

This plan outlines the implementation of smooth counting animations for the figures on the Northway Immigration website, specifically within the Hero section.

## Tech Stack & Approach
- **Animation Library**: `framer-motion` (will be added as a dependency)
- **Component**: Create a reusable `Counter.tsx` component that uses the `useInView` and `useMotionValue` hooks from `framer-motion`.
- **Logic**: 
  - The counter will start from 0 and animate to the target value (e.g., 15, 2500, 98) once the element becomes visible in the viewport.
  - Duration: ~2 seconds for a premium feel.
  - Easing: `easeOut` for a smooth finish.

## Proposed Changes

### 1. Installation
- Run `npm install framer-motion` to add the required animation library.

### 2. Component Creation: `components/ui/counter.tsx`
- Implement a component that takes `target`, `duration`, and optional `suffix` (e.g., "+", "%").
- Use `animate` function from `framer-motion` to update a state variable.

### 3. Hero Section Update: `components/sections/hero.tsx`
- Replace the static numbers in the "Trust indicators" section with the `<Counter />` component.
- Example: Replace `15+` with `<Counter target={15} suffix="+" />`.

## Automated Tests
- Since this is a UI-heavy update, I will perform visual verification using the browser subagent.
- Check console for any `framer-motion` errors.

## Manual Verification
- **Counting Animation**: Scroll to the Hero section and verify figures count up smoothly to their target values.
- **Sticky Header**: Scroll down the page and verify the header remains visible with a blur effect and the CTA is easily accessible.
- **Floating CTA**: Verify the "Free Case Evaluation" button follows the user and triggers the consultation section.
- **Mobile Responsiveness**: Verify these new animations and CTAs look great on mobile.

---
**Note**: We are currently building the frontend only. No backend integration is required for this phase.
