# Implementation Plan: Favicon and Social Meta (favicon.md)

This plan outlines the steps to implement a professional branding identity and social media preview support for Northway Immigration Counsel.

## Objective
Enhance the website's professional appearance in browser tabs and ensure it looks premium when shared on social platforms (LinkedIn, Twitter, Facebook).

## Proposed Changes

### 1. Asset Generation
- **Favicon**: Create a minimalist 'N' gold logo for browser tabs.
- **Icon (32x32, 192x192)**: Standard web icons.
- **Apple Touch Icon (180x180)**: For iOS devices.
- **OG Image (1200x630)**: A high-end branded preview image featuring the firm's name and premium legal aesthetics.

### 2. Metadata Implementation (`app/layout.tsx`)
- [x] Update the `metadata` object to include:
  - [x] `title` (refined for SEO).
  - [x] `description` (compelling summary).
  - [x] `icons` (linking to favicon and apple-touch-icon).
  - [x] `openGraph` (title, description, url, siteName, images, locale, type).
  - [x] `twitter` (card, title, description, images).

### 3. File Structure
- [ ] `public/favicon.ico`
- [ ] `public/icon.png`
- [ ] `public/apple-icon.png`
- [ ] `public/og-image.jpg`

## Verification Plan
1. **Visual Check**: Verify favicon appears in the browser tab.
2. **Meta Check**: Inspect the HTML source to ensure all `<meta property="og:...">` and `<meta name="twitter:...">` tags are present and correct.
3. **Responsive**: Test the appearance on mobile to ensure the touch icon would be used.
