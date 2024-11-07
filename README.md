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
- **Node.js** (v18 or later)
- **Docker** (optional but recommended for consistent environment setup)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd realtime-colab
   ```
1. Install dependencies:
  ```npm install
  ```
1. Set up environment variables by creating an `.env.local` file.

### Running the Application
To start the app in development mode:
```npm run dev
```
The app will be available at http://localhost:3000 (or whatever adress will appear to you :D).



