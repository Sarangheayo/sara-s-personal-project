import React from 'react';
import { skillsData } from '../../data/skills';

const ToolsEnvironmentSection: React.FC = () => {
  const toolSkills = skillsData.find(cat => cat.category === "Tools & Environment")?.skills || [];

  return (
    <section id="tools-environment" style={{
      padding: '40px 30px',
      backgroundColor: 'var(--card-bg-color)',
      margin: '0 auto', /* Center the section */
      borderRadius: 'var(--border-radius)',
      boxShadow: 'var(--card-shadow)',
      maxWidth: '1000px'
    }}>
      <h2 style={{ color: 'var(--header-color)', textAlign: 'center', marginBottom: '30px' }}>Tools & Environment: VS Code, Git/GitHub, Linux/Mac Setting, DevOps & Deployment</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        <div style={{
          flex: '1', minWidth: '300px', padding: '20px',
          backgroundColor: 'var(--card-bg-color)', /* Ensure internal cards match */
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--border-radius)'
        }}>
          <h3 style={{ color: 'var(--main-color)', marginBottom: '15px' }}>Development Tools</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {toolSkills.map((skill, index) => <li key={index} style={{ marginBottom: '8px', color: 'var(--text-color)' }}>{skill.name}</li>)}
          </ul>
        </div>
        <div style={{
          flex: '1', minWidth: '300px', padding: '20px',
          backgroundColor: 'var(--card-bg-color)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--border-radius)'
        }}>
          <h3 style={{ color: 'var(--main-color)', marginBottom: '15px' }}>Version Control & Collaboration</h3>
          <p style={{ lineHeight: '1.8', color: 'var(--text-color)' }}>
            Git을 이용한 형상 관리에 능숙하며, GitHub를 통해 코드 협업 및 프로젝트 관리를 수행합니다.
            Branching 전략, Pull Request(PR) 워크플로우를 이해하고 효율적인 팀 개발에 기여할 수 있습니다.
          </p>
        </div>
        <div style={{
          flex: '1', minWidth: '300px', padding: '20px',
          backgroundColor: 'var(--card-bg-color)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--border-radius)'
        }}>
          <h3 style={{ color: 'var(--main-color)', marginBottom: '15px' }}>DevOps & Deployment Concepts</h3>
          <p style={{ lineHeight: '1.8', color: 'var(--text-color)' }}>
            CI/CD(Continuous Integration/Continuous Deployment) 파이프라인 구축에 대한 기본적인 이해를 가지고 있습니다.
            Docker를 활용한 컨테이너 기반 배포, 클라우드 플랫폼(AWS, Azure 등)을 이용한 서비스 배포 경험을 쌓고 있으며, 자동화된 배포 프로세스에 관심을 가지고 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ToolsEnvironmentSection;