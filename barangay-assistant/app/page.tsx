import React from 'react';
import styles from './HomePage.module.css'; // Import the styles
import Link from 'next/link'; // Use Next.js Link for navigation

export default function HomePage() {
  const userName = "Guest";

  return (
    // Use the container class for overall structure
    <div className={styles.container}>
      {/* Use header and nav classes */}
      <header className={styles.header}>
        <nav className={styles.nav}>
          {/* Use Next.js Link component */}
          <Link href="/">Home</Link>
          <Link href="/login">Login</Link>
          <Link href="/signup">Sign Up</Link>
          {/* Add other navigation links here */}
        </nav>
      </header>

      {/* Use main class */}
      <main className={styles.main}>
        {/* Apply heading and message styles */}
        <h1 className={styles.welcomeHeading}>Welcome to the Homepage!</h1>
        <p className={styles.welcomeMessage}>Hello, {userName}!</p>

        {/* Use section class for content blocks */}
        <section className={styles.section}>
          <h2>Announcements</h2>
          <p>No announcements yet.</p>
        </section>

        <section className={styles.section}>
          <h2>Quick Links</h2>
          {/* Apply list style */}
          <ul className={styles.quickLinksList}>
            <li><Link href="#">Link 1</Link></li>
            <li><Link href="#">Link 2</Link></li>
          </ul>
        </section>
      </main>

      {/* Use footer class */}
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Your Application</p>
      </footer>
    </div>
  );
}