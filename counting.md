# Implementation Plan: Counting Numbers Animation (counting.md)

This plan outlines the implementation of smooth counting animations for the figures on the Northway Immigration website.

## Tech Stack & Approach
- **Animation Library**: `framer-motion`
- **Component**: `components/ui/counter.tsx`
- **Logic**: Use `useMotionValue`, `useTransform`, and `animate` from `framer-motion` to create a smooth counting effect that triggers when the component enters the viewport.

## Proposed Changes

### 1. Installation
- [x] Run `npm install framer-motion`

### 2. Create Reusable Counter Component
- [x] Create `components/ui/counter.tsx`
- [x] Implement the counting logic with intersection observer.

### 3. Update Hero Section
- [x] Import `Counter` in `components/sections/hero.tsx`.
- [x] Replace static figures with `<Counter target={...} />`.

### 4. Polish Branding & CR0
- [x] Enhance Header glassmorphism.
- [x] Add Floating CTA button.
- [ ] Add scroll-reveal animations to other sections.

## Verification Plan

### Automated Tests
- Since this is a UI-heavy update, I will perform visual verification using the browser subagent.
- Check console for any framer-motion errors.

### Manual Verification
- **Counting Animation**: Scroll to the Hero section and verify figures count up smoothly to their target values.
- **Sticky Header**: Scroll down the page and verify the header remains visible with a blur effect and the CTA is easily accessible.
- **Floating CTA**: Verify the "Free Case Evaluation" button follows the user and triggers the consultation section.
- **Mobile Responsiveness**: Verify these new animations and CTAs look great on mobile.
