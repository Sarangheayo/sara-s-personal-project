import React from 'react';
import { skillsData } from '../../data/skills';

const BackendSection: React.FC = () => {
  const backendSkills = skillsData.find(cat => cat.category === "Frameworks & Libraries")?.skills.filter(skill => ["Express.js", "Django/Flask", "Node.js"].includes(skill.name)) || [];
  const languageSkills = skillsData.find(cat => cat.category === "Languages")?.skills.filter(skill => ["Python", "PHP", "Java"].includes(skill.name)) || [];

  return (
    <section id="backend" style={{
      padding: '40px 30px',
      backgroundColor: 'var(--card-bg-color)',
      margin: '0 auto', /* Center the section */
      borderRadius: 'var(--border-radius)',
      boxShadow: 'var(--card-shadow)',
      maxWidth: '1000px'
    }}>
      <h2 style={{ color: 'var(--header-color)', textAlign: 'center', marginBottom: '30px' }}>Backend: RESTful API Design, Authentication & Security</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        <div style={{
          flex: '1', minWidth: '300px', padding: '20px',
          backgroundColor: 'var(--card-bg-color)', /* Ensure internal cards match */
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--border-radius)'
        }}>
          <h3 style={{ color: 'var(--main-color)', marginBottom: '15px' }}>Languages & Frameworks</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {languageSkills.map((skill, index) => <li key={index} style={{ marginBottom: '8px', color: 'var(--text-color)' }}>{skill.name}</li>)}
            {backendSkills.map((skill, index) => <li key={index} style={{ marginBottom: '8px', color: 'var(--text-color)' }}>{skill.name}</li>)}
          </ul>
        </div>
        <div style={{
          flex: '1', minWidth: '300px', padding: '20px',
          backgroundColor: 'var(--card-bg-color)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--border-radius)'
        }}>
          <h3 style={{ color: 'var(--main-color)', marginBottom: '15px' }}>RESTful API Design</h3>
          <p style={{ lineHeight: '1.8', color: 'var(--text-color)' }}>
            리소스 기반의 일관된 API 설계를 통해 클라이언트-서버 간 효율적인 통신을 구현합니다.
            HTTP 메서드(GET, POST, PUT, DELETE)를 적절히 활용하고, Stateless, Cacheable, Layered System 등 REST 원칙을 준수하여 확장성 있는 백엔드를 구축합니다.
          </p>
        </div>
        <div style={{
          flex: '1', minWidth: '300px', padding: '20px',
          backgroundColor: 'var(--card-bg-color)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--border-radius)'
        }}>
          <h3 style={{ color: 'var(--main-color)', marginBottom: '15px' }}>Authentication & Security</h3>
          <p style={{ lineHeight: '1.8', color: 'var(--text-color)' }}>
            JWT(JSON Web Token) 기반 인증, OAuth 2.0 등 다양한 인증 및 인가 메커니즘을 이해하고 적용합니다.
            데이터 암호화, 입력 유효성 검사, SQL Injection 및 XSS 방어 등 기본적인 웹 보안 취약점 방지에 대한 지식을 바탕으로 안전한 서비스 개발에 기여합니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BackendSection;