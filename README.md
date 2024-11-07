# RealTime Colab 

Welcome to the Real-Time Document Collaboration Platform 'RealTime Colab'! This project is part of a skills assessment for a Frontend/Full-Stack Engineer position at **Bigmama Technology**. The platform enables collaborative editing in real time, designed to be scalable, responsive, and user-friendly.

you'll find the deployed app at [https://realtime-colab-liveblocks1-git-main-souhaaissous-projects.vercel.app/](https://realtime-colab-liveblocks1-git-main-souhaaissous-projects.vercel.app/)

---

## Project Overview

This project uses a robust stack to provide real-time document collaboration capabilities, allowing multiple users to edit the same document simultaneously with live feedback. The key technologies used include:

- **Liveblocks** for live updates and real-time synchronization.
- **Next.js** as the frontend framework for fast, server-side rendered pages.
- **Supabase** for user authentication, database, and real-time data handling.
- **Shadcn UI** for high-quality, customizable components.

## Key Features

### Shared Document Editing
- Real-time document editing powered by **Liveblocks**.
- Collaborative cursor tracking for an enhanced user experience.

### User Presence Indicators
- Real-time indicators display active users in the document, making it easy to track collaborators.

### User Authentication and Ownership
- **Supabase** handles user authentication and document ownership, securing access to each document.


---

## Project Structure

The project is organized into the following key directories:
- **components/**: Reusable UI components.
- **lib/**: Application logic, including hooks and utility functions.
- **pages/**: Next.js page routes for different views (e.g., login, document editing).
- **primitives/**: Basic UI primitives (buttons, avatars, etc.).
- **styles/**: Global CSS and component-specific styles.
- **utils/**: Helper functions and utilities.
  

## Getting Started

### Prerequisites

To run this project, ensure the following prerequisites are met:

1. **Node.js**: Version 18 or later is recommended for compatibility with Next.js and TypeScript.
2. **npm**: The project relies on npm for managing dependencies, so make sure it’s installed alongside Node.js.

### Key Dependencies

This project uses the following primary dependencies:

- **@liveblocks** (`client`, `node`, `react`, `react-tiptap`, `react-ui`): Powers real-time collaboration.
- **Next.js (v14.1.4)**: The main framework for building the frontend, leveraging server-side rendering and static generation.
- **React (v18.2.0)** and **React DOM (v18.2.0)**: The UI library used for building interactive user interfaces.
- **Supabase** (`ssr` and `supabase-js`): Provides backend support for authentication and real-time database functionality.
- **Shadcn UI**: For customizable and responsive UI components.
- **Tailwind CSS**: Utility-first CSS framework for efficient styling.

### Dev Dependencies

For development, this project uses:

- **TypeScript**: Strongly-typed JavaScript for maintaining code quality.
- **ESLint** and **Prettier**: For code linting and formatting.
- **Tailwind CSS and PostCSS**: For managing styles with custom configurations.


### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd realtime-colab
   ```
1. Install dependencies:
  ```bash
  npm install
  ```
1. Set up environment variables by creating an `.env.local` file.

### Running the Application

To start the app in development mode:
  ```bash
  npm run dev
  ```
The app will be available at http://localhost:3000 (or whatever adress will appear to you :D).



