import React from 'react';

const ProfileSection: React.FC = () => {
  return (
    <section id="profile" style={{
      padding: '80px 20px',
      textAlign: 'center',
      backgroundColor: 'var(--bg-color)',
      borderRadius: 'var(--border-radius)',
      boxShadow: 'var(--card-shadow)',
      margin: '0 auto', /* Center the section */
      maxWidth: '1000px'
    }}>
      <img
        src="/src/assets/profile.png"
        alt="Profile"
        className="profile-image"
        style={{
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '25px',
          border: '3px solid var(--main-color)',
          boxShadow: '0 0 0 5px rgba(138, 43, 226, 0.3)' /* Subtle glow effect */
        }}
      />
      <h1 style={{ color: 'var(--header-color)', fontSize: '3em', marginBottom: '15px' }}>[Your Name]</h1>
      <p className="profile-text" style={{
        color: 'var(--text-color)',
        fontSize: '1.2em',
        maxWidth: '800px',
        margin: '0 auto 30px',
        lineHeight: '1.8'
      }}>
        깊이 있는 학습과 끊임없는 도전을 통해 혁신적인 솔루션을 만들어가는 주니어 개발자입니다. 사용자 경험을 최우선으로 생각하며, 견고하고 확장 가능한 코드를 작성하기 위해 노력합니다.
        새로운 기술을 탐구하고 동료들과 협력하며 성장하는 것을 즐깁니다.
      </p>
      {/* Social links, contact info can go here */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
          {/* Example: Replace with actual links */}
          <a href="#" style={{ color: 'var(--main-color)', fontSize: '1.2em', transition: 'color 0.3s ease' }}>GitHub</a>
          <a href="#" style={{ color: 'var(--main-color)', fontSize: '1.2em', transition: 'color 0.3s ease' }}>LinkedIn</a>
      </div>
    </section>
  );
};

export default ProfileSection;