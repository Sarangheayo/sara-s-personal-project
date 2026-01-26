import React from 'react';
import ProfileSection from './components/sections/ProfileSection';
import FrontendSection from './components/sections/FrontendSection';
import BackendSection from './components/sections/BackendSection';
import DatabaseSection from './components/sections/DatabaseSection';
import NetworkSystemSection from './components/sections/NetworkSystemSection';
import ToolsEnvironmentSection from './components/sections/ToolsEnvironmentSection';
import ProjectsTroubleshootingSection from './components/sections/ProjectsTroubleshootingSection';

const App: React.FC = () => {
  return (
    <>
      <style>{`
        /* General styling for links in navigation */
        .main-nav a {
          color: var(--text-color); /* Use general text color */
          text-decoration: none;
          font-weight: 600; /* Slightly bolder */
          transition: color var(--transition-speed) ease;
          padding: 5px 10px; /* Add some padding */
          border-radius: 4px;
        }

        .main-nav a:hover {
          color: var(--main-color); /* Accent color on hover */
          text-decoration: none;
          background-color: rgba(138, 43, 226, 0.1); /* Subtle background on hover */
        }

        @media (max-width: 768px) {
          .main-nav ul {
            flex-direction: column;
            gap: 5px; /* Smaller gap for mobile */
            align-items: center; /* Center align items */
            padding-left: 0;
          }
          .main-nav li {
            width: 100%; /* Full width for list items */
            text-align: center;
          }
          .main-nav a {
            display: block;
            padding: 10px 0;
            border-bottom: 1px solid var(--border-color); /* Use theme border color */
            border-radius: 0;
          }
          .main-nav li:last-child a {
            border-bottom: none;
          }
          header h1 {
              font-size: 1.8em; /* Adjust header title size */
          }
        }

        @media (max-width: 375px) {
            body {
                padding: var(--mobile-margin);
            }
            /* Main container adjustments */
            .app-container {
                padding: var(--mobile-margin);
                gap: 20px !important;
            }
            h1 {
                font-size: 1.8em;
            }
            h2 {
                font-size: 1.4em;
            }
            section {
                padding: 20px 15px !important; /* Adjust section padding */
                margin: 10px auto !important; /* Adjust section margin */
            }
            .profile-image {
                width: 100px !important;
                height: 100px !important;
                border-width: 2px !important; /* Thinner border */
            }
            .profile-text {
                font-size: 0.95em !important;
            }
            section > div[style*="display: flex"] > div {
                min-width: unset !important;
                flex-basis: 100% !important;
            }
            footer p {
                font-size: 0.85em;
            }
        }
      `}</style>
      <div className="app-container" style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '30px', /* Increased padding for spacious feel */
        gap: '60px' /* Increased gap between sections */
      }}>
        <header style={{
          backgroundColor: 'var(--bg-color)', /* Blend with overall background */
          color: 'var(--header-color)',
          padding: '20px 30px',
          textAlign: 'center',
          borderRadius: 'var(--border-radius)',
          boxShadow: 'var(--card-shadow)',
          display: 'flex', /* Use flex for alignment */
          justifyContent: 'space-between', /* Space out title and nav */
          alignItems: 'center',
          flexWrap: 'wrap', /* Allow wrapping on small screens */
          gap: '20px'
        }}>
          <h1 style={{ margin: 0, fontSize: '2.5em' }}>My Portfolio</h1>
          <nav className="main-nav">
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'flex-end', gap: '20px' }}>
              <li><a href="#profile">Profile</a></li>
              <li><a href="#frontend">Frontend</a></li>
              <li><a href="#backend">Backend</a></li>
              <li><a href="#database">Database</a></li>
              <li><a href="#network-system">Network & System</a></li>
              <li><a href="#tools-environment">Tools & Env</a></li>
              <li><a href="#projects-troubleshooting">Projects</a></li>
            </ul>
          </nav>
        </header>

        <main style={{ flexGrow: 1 }}>
          <ProfileSection />
          <FrontendSection />
          <BackendSection />
          <DatabaseSection />
          <NetworkSystemSection />
          <ToolsEnvironmentSection />
          <ProjectsTroubleshootingSection />
        </main>

        <footer style={{
          backgroundColor: 'var(--bg-color)', /* Blend with overall background */
          color: 'var(--text-color)',
          padding: '20px 30px',
          textAlign: 'center',
          borderRadius: 'var(--border-radius)',
          boxShadow: 'var(--card-shadow)',
          marginTop: 'auto'
        }}>
          <p>&copy; 2026 Your Name. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default App;