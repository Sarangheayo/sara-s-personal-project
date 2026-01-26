import React from 'react';

const NetworkSystemSection: React.FC = () => {
  return (
    <section id="network-system" style={{
      padding: '40px 30px',
      backgroundColor: 'var(--card-bg-color)',
      margin: '0 auto', /* Center the section */
      borderRadius: 'var(--border-radius)',
      boxShadow: 'var(--card-shadow)',
      maxWidth: '1000px'
    }}>
      <h2 style={{ color: 'var(--header-color)', textAlign: 'center', marginBottom: '30px' }}>Network & System: Network & IP, URL Structure, Web Concepts</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        <div style={{
          flex: '1', minWidth: '300px', padding: '20px',
          backgroundColor: 'var(--card-bg-color)', /* Ensure internal cards match */
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--border-radius)'
        }}>
          <h3 style={{ color: 'var(--main-color)', marginBottom: '15px' }}>Network & IP</h3>
          <p style={{ lineHeight: '1.8', color: 'var(--text-color)' }}>
            TCP/IP, HTTP/HTTPS 등 네트워크 프로토콜의 기본 원리를 이해하고 있습니다.
            IP 주소 체계, 서브넷팅, 라우팅 개념을 숙지하고 있으며, 네트워크 통신 과정에서 발생할 수 있는 문제점을 분석하고 해결하는 데 필요한 기초 지식을 갖추고 있습니다.
          </p>
        </div>
        <div style={{
          flex: '1', minWidth: '300px', padding: '20px',
          backgroundColor: 'var(--card-bg-color)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--border-radius)'
        }}>
          <h3 style={{ color: 'var(--main-color)', marginBottom: '15px' }}>URL Structure & Web Concepts</h3>
          <p style={{ lineHeight: '1.8', color: 'var(--text-color)' }}>
            URL의 구성 요소와 의미를 정확히 이해하고, 웹 표준 및 SEO(검색 엔진 최적화)를 고려한 URL 설계를 지향합니다.
            웹 서버, 웹 클라이언트, 브라우저의 동작 방식, 도메인 네임 시스템(DNS) 등 웹의 전반적인 동작 원리를 파악하고 있습니다.
          </p>
        </div>
        <div style={{
          flex: '1', minWidth: '300px', padding: '20px',
          backgroundColor: 'var(--card-bg-color)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--border-radius)'
        }}>
          <h3 style={{ color: 'var(--main-color)', marginBottom: '15px' }}>System Understanding</h3>
          <p style={{ lineHeight: '1.8', color: 'var(--text-color)' }}>
            운영체제의 기본 구조(프로세스, 메모리 관리 등)와 동작 원리를 이해하고 있습니다.
            리눅스/유닉스 기반 시스템 환경에서 서버를 운영하고 관리하는 데 필요한 기본적인 명령어를 숙지하고 있으며, 시스템 리소스 모니터링 및 성능 최적화에 관심을 가지고 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NetworkSystemSection;