import React from 'react';
import { skillsData } from '../../data/skills';

const DatabaseSection: React.FC = () => {
  const databaseSkills = skillsData.find(cat => cat.category === "Database")?.skills || [];

  return (
    <section id="database" style={{
      padding: '40px 30px',
      backgroundColor: 'var(--card-bg-color)',
      margin: '0 auto', /* Center the section */
      borderRadius: 'var(--border-radius)',
      boxShadow: 'var(--card-shadow)',
      maxWidth: '1000px'
    }}>
      <h2 style={{ color: 'var(--header-color)', textAlign: 'center', marginBottom: '30px' }}>Database: SQL, NoSQL, Data Modeling</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        <div style={{
          flex: '1', minWidth: '300px', padding: '20px',
          backgroundColor: 'var(--card-bg-color)', /* Ensure internal cards match */
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--border-radius)'
        }}>
          <h3 style={{ color: 'var(--main-color)', marginBottom: '15px' }}>Database Technologies</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {databaseSkills.map((skill, index) => <li key={index} style={{ marginBottom: '8px', color: 'var(--text-color)' }}>{skill.name}</li>)}
          </ul>
        </div>
        <div style={{
          flex: '1', minWidth: '300px', padding: '20px',
          backgroundColor: 'var(--card-bg-color)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--border-radius)'
        }}>
          <h3 style={{ color: 'var(--main-color)', marginBottom: '15px' }}>Data Modeling</h3>
          <p style={{ lineHeight: '1.8', color: 'var(--text-color)' }}>
            애플리케이션의 요구사항을 반영하여 효율적인 데이터 저장 및 관리를 위한 데이터베이스 스키마를 설계합니다.
            관계형 데이터베이스(RDB)의 정규화 원칙과 NoSQL 데이터베이스의 유연성을 이해하고, 서비스 특성에 맞는 최적의 데이터 모델링을 수행합니다.
          </p>
        </div>
        <div style={{
          flex: '1', minWidth: '300px', padding: '20px',
          backgroundColor: 'var(--card-bg-color)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--border-radius)'
        }}>
          <h3 style={{ color: 'var(--main-color)', marginBottom: '15px' }}>SQL & NoSQL Proficiency</h3>
          <p style={{ lineHeight: '1.8', color: 'var(--text-color)' }}>
            MySQL을 이용한 복잡한 쿼리 작성 및 데이터베이스 관리 경험이 있으며, HeidiSQL과 같은 GUI 도구를 활용하여 효율적으로 작업을 수행합니다.
            MongoDB와 같은 NoSQL 데이터베이스의 문서 지향적 특징을 이해하고, 대용량 및 유연한 데이터 처리에 활용할 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DatabaseSection;