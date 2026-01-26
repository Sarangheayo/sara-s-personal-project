import React from 'react';
import { projectsData, troubleshootingData } from '../../data/projects';

const ProjectsTroubleshootingSection: React.FC = () => {
  return (
    <section id="projects-troubleshooting" style={{
      padding: '40px 30px',
      backgroundColor: 'var(--card-bg-color)',
      margin: '0 auto', /* Center the section */
      borderRadius: 'var(--border-radius)',
      boxShadow: 'var(--card-shadow)',
      maxWidth: '1000px'
    }}>
      <h2 style={{ color: 'var(--header-color)', textAlign: 'center', marginBottom: '30px' }}>Projects & Troubleshooting</h2>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: 'var(--main-color)', marginBottom: '20px', textAlign: 'center' }}>My Projects</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {projectsData.map((project, index) => (
            <div key={index} style={{
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--border-radius)',
              padding: '20px',
              backgroundColor: 'var(--card-bg-color)' /* Ensure internal cards match */
            }}>
              <h4 style={{ color: 'var(--header-color)', marginBottom: '10px' }}>{project.title}</h4>
              <p style={{ fontSize: '0.95em', lineHeight: '1.8', color: 'var(--text-color)' }}>{project.description}</p>
              <ul style={{ listStyleType: 'disc', marginLeft: '20px', marginTop: '10px', color: 'var(--text-color)' }}>
                {project.details.map((detail, idx) => (
                  <li key={idx} style={{ fontSize: '0.9em' }}>{detail}</li>
                ))}
              </ul>
              {project.sourceFile && (
                  <p style={{fontSize: '0.85em', marginTop: '10px', color: 'var(--text-color)'}}>
                      <small>Source Concept: <code>client/src/{project.sourceFile}</code></small>
                  </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 style={{ color: 'var(--main-color)', marginBottom: '20px', textAlign: 'center' }}>Troubleshooting & Technical Solutions</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {troubleshootingData.map((issue, index) => (
            <div key={index} style={{
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--border-radius)',
              padding: '20px',
              backgroundColor: 'var(--card-bg-color)' /* Ensure internal cards match */
            }}>
              <h4 style={{ color: 'var(--header-color)', marginBottom: '10px' }}>{issue.title}</h4>
              <p style={{ fontSize: '0.95em', lineHeight: '1.8', color: 'var(--text-color)' }}>{issue.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsTroubleshootingSection;