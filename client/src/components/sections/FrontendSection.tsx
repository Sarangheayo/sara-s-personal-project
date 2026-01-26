import React from 'react';
import { skillsData } from '../../data/skills';

const FrontendSection: React.FC = () => {
  const frontendSkills = skillsData.find(cat => cat.category === "Frameworks & Libraries")?.skills.filter(skill => ["React", "Vue.js", "Angular"].includes(skill.name)) || [];
  const languageSkills = skillsData.find(cat => cat.category === "Languages")?.skills.filter(skill => ["JavaScript (ES6+)", "TypeScript"].includes(skill.name)) || [];

  return (
    <section id="frontend" style={{
      padding: '40px 30px',
      backgroundColor: 'var(--card-bg-color)',
      margin: '0 auto', /* Center the section */
      borderRadius: 'var(--border-radius)',
      boxShadow: 'var(--card-shadow)',
      maxWidth: '1000px'
    }}>
      <h2 style={{ color: 'var(--header-color)', textAlign: 'center', marginBottom: '30px' }}>Frontend: Basic & Style, Responsive Design</h2>
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
            {frontendSkills.map((skill, index) => <li key={index} style={{ marginBottom: '8px', color: 'var(--text-color)' }}>{skill.name}</li>)}
          </ul>
        </div>
        <div style={{
          flex: '1', minWidth: '300px', padding: '20px',
          backgroundColor: 'var(--card-bg-color)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--border-radius)'
        }}>
          <h3 style={{ color: 'var(--main-color)', marginBottom: '15px' }}>Responsive Design</h3>
          <p style={{ lineHeight: '1.8', color: 'var(--text-color)' }}>
            다양한 디바이스 및 화면 크기에 최적화된 사용자 경험을 제공하기 위해 CSS Grid, Flexbox, 미디어 쿼리 등을 활용한 반응형 웹 디자인을 구현합니다.
            모바일 우선(Mobile-First) 접근 방식을 선호하며, 특히 375px 모바일 화면에 대한 최적화를 중요하게 생각합니다.
          </p>
        </div>
        <div style={{
          flex: '1', minWidth: '300px', padding: '20px',
          backgroundColor: 'var(--card-bg-color)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--border-radius)'
        }}>
          <h3 style={{ color: 'var(--main-color)', marginBottom: '15px' }}>Basic & Style</h3>
          <p style={{ lineHeight: '1.8', color: 'var(--text-color)' }}>
            HTML5, CSS3, JavaScript(ES6+)를 기반으로 웹 표준과 접근성을 준수하는 UI를 구축합니다.
            재사용 가능한 컴포넌트 설계와 CSS 변수(Variables)를 활용하여 일관된 디자인 시스템을 유지하고 효율적인 스타일링을 추구합니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FrontendSection;