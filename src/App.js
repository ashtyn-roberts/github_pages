import React, { useState } from 'react';
import { Mail, Phone, Github, Menu, X, Briefcase, GraduationCap, Code, User, Home, Terminal, Cpu, Shield, Sparkles, Linkedin } from 'lucide-react';

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const profileImage = 'graduation_outside.jpg';

  const navigation = [
    { name: 'Home', id: 'home', icon: Home },
    { name: 'About', id: 'about', icon: User },
    { name: 'Experience', id: 'experience', icon: Briefcase },
    { name: 'Education', id: 'education', icon: GraduationCap },
    { name: 'Skills', id: 'skills', icon: Code },
  ];

  const NavButton = ({ item }) => (
    <button
      onClick={() => {
        setCurrentPage(item.id);
        setMobileMenuOpen(false);
      }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '10px 18px',
        borderRadius: '20px',
        border: currentPage === item.id ? '2px solid #60a5fa' : '2px solid transparent',
        cursor: 'pointer',
        fontSize: '15px',
        fontWeight: '600',
        transition: 'all 0.3s',
        backgroundColor: currentPage === item.id ? '#dbeafe' : 'white',
        color: currentPage === item.id ? '#1e40af' : '#64748b',
        boxShadow: currentPage === item.id ? '0 4px 12px rgba(96, 165, 250, 0.3)' : 'none',
      }}
      onMouseOver={(e) => {
        if (currentPage !== item.id) {
          e.currentTarget.style.backgroundColor = '#f1f5f9';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }
      }}
      onMouseOut={(e) => {
        if (currentPage !== item.id) {
          e.currentTarget.style.backgroundColor = 'white';
          e.currentTarget.style.transform = 'translateY(0)';
        }
      }}
    >
      <item.icon size={18} />
      <span>{item.name}</span>
    </button>
  );

  const FloatingIcon = ({ Icon, delay, size = 40 }) => (
    <div style={{
      position: 'absolute',
      animation: `float 3s ease-in-out ${delay}s infinite`,
      opacity: 0.1,
      color: '#60a5fa'
    }}>
      <Icon size={size} />
    </div>
  );

  const HomePage = () => (
    <div style={{ minHeight: '600px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px 20px', position: 'relative' }}>
      {/* Floating decorative elements */}
      <div style={{ position: 'absolute', top: '10%', left: '10%' }}>
        <FloatingIcon Icon={Code} delay={0} />
      </div>
      <div style={{ position: 'absolute', top: '20%', right: '15%' }}>
        <FloatingIcon Icon={Terminal} delay={0.5} size={35} />
      </div>
      <div style={{ position: 'absolute', bottom: '25%', left: '8%' }}>
        <FloatingIcon Icon={Cpu} delay={1} size={45} />
      </div>
      <div style={{ position: 'absolute', bottom: '15%', right: '12%' }}>
        <FloatingIcon Icon={Shield} delay={1.5} size={38} />
      </div>

      <div style={{ position: 'relative', marginBottom: '32px' }}>
        <div style={{
          position: 'absolute',
          top: '-10px',
          right: '-10px',
          animation: 'pulse 2s ease-in-out infinite'
        }}>
          <Sparkles size={28} color="#fbbf24" fill="#fbbf24" />
        </div>
        <img 
          src={profileImage} 
          alt="Ashtyn Roberts"
          style={{
            width: '220px',
            height: '220px',
            borderRadius: '50%',
            objectFit: 'cover',
            boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3), 0 0 0 8px rgba(191, 219, 254, 0.5)',
            margin: '0 auto 24px',
            border: '6px solid white',
            animation: 'gentle-bounce 3s ease-in-out infinite'
          }}
        />
      </div>
      
      <div style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '8px', 
        backgroundColor: '#dbeafe', 
        padding: '8px 20px', 
        borderRadius: '20px',
        marginBottom: '16px',
        border: '2px solid #93c5fd'
      }}>
        <Terminal size={18} color="#1e40af" />
        <span style={{ fontSize: '14px', color: '#1e40af', fontWeight: '600' }}>SYSTEMS ONLINE</span>
      </div>

      <h1 style={{ 
        fontSize: '56px', 
        fontWeight: 'bold', 
        background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 50%, #93c5fd 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '16px',
        fontFamily: '"Poppins", sans-serif'
      }}>
        Ashtyn Roberts
      </h1>
      
      <p style={{ 
        fontSize: '24px', 
        color: '#3b82f6', 
        marginBottom: '8px',
        fontWeight: '600'
      }}>
        Computer Science & Cybersecurity 🔐
      </p>
      
      <div style={{
        display: 'inline-block',
        padding: '4px 16px',
        backgroundColor: '#fef3c7',
        borderRadius: '12px',
        border: '2px dashed #fbbf24',
        marginBottom: '24px'
      }}>
        <span style={{ fontSize: '14px', color: '#92400e', fontWeight: '600' }}>🎓 Graduating December 2025</span>
      </div>

      <p style={{ 
        fontSize: '18px', 
        color: '#64748b', 
        maxWidth: '700px', 
        marginBottom: '36px', 
        lineHeight: '1.7',
        backgroundColor: 'white',
        padding: '20px 30px',
        borderRadius: '16px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
      }}>
        Passionate about coding, cybersecurity, and solving complex problems! 
        Building innovative solutions with a smile 😊
      </p>

      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="mailto:ashtyn_roberts@yahoo.com" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '14px 28px',
          background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
          color: 'white',
          borderRadius: '25px',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '16px',
          boxShadow: '0 6px 20px rgba(59, 130, 246, 0.4)',
          transition: 'all 0.3s',
          border: 'none'
        }}>
          <Mail size={20} />
          Email Me
        </a>
        <a href="https://www.linkedin.com/in/ashtyn-roberts" target="_blank" rel="noopener noreferrer" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '14px 28px',
          backgroundColor: '#0077b5',
          color: 'white',
          borderRadius: '25px',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '16px',
          boxShadow: '0 6px 20px rgba(0, 119, 181, 0.4)',
          transition: 'all 0.3s',
          border: 'none'
        }}>
          <Linkedin size={20} />
          LinkedIn
        </a>
        <a href="tel:225-287-3304" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '14px 28px',
          backgroundColor: 'white',
          color: '#3b82f6',
          borderRadius: '25px',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '16px',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s',
          border: '2px solid #3b82f6'
        }}>
          <Phone size={20} />
          Call Me
        </a>
        <a href="https://github.com/ashtyn-roberts" target="_blank" rel="noopener noreferrer" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '14px 28px',
          backgroundColor: '#1f2937',
          color: 'white',
          borderRadius: '25px',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '16px',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s',
          border: 'none'
        }}>
          <Github size={20} />
          GitHub
        </a>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ 
          fontSize: '42px', 
          fontWeight: 'bold', 
          background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '12px'
        }}>
          About Me 👋
        </h2>
        <div style={{ 
          width: '80px', 
          height: '4px', 
          background: 'linear-gradient(90deg, #3b82f6, #60a5fa)', 
          margin: '0 auto',
          borderRadius: '2px'
        }}></div>
      </div>

      <div style={{ 
        backgroundColor: 'white', 
        borderRadius: '24px', 
        boxShadow: '0 10px 30px rgba(59, 130, 246, 0.15)', 
        padding: '40px',
        marginBottom: '32px',
        border: '3px solid #dbeafe'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            backgroundColor: '#dbeafe', 
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <User size={24} color="#3b82f6" />
          </div>
          <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e293b', margin: 0 }}>My Story</h3>
        </div>

        <p style={{ fontSize: '17px', color: '#475569', lineHeight: '1.8', marginBottom: '20px' }}>
          I'm a Computer Science student at Louisiana State University with a concentration in 
          Cybersecurity, graduating in December 2025. My passion lies in coding, security, and 
          problem-solving, with hands-on experience in both academic and professional IT environments.
        </p>
        <p style={{ fontSize: '17px', color: '#475569', lineHeight: '1.8' }}>
          I'm a solid team player with an upbeat, positive attitude and proven skills in 
          communication and problem-solving. I'm motivated to maintain client satisfaction and 
          contribute to company success through building relationships, cultivating partnerships, 
          and growing businesses.
        </p>
      </div>

      <div style={{ 
        backgroundColor: 'white', 
        borderRadius: '24px', 
        boxShadow: '0 10px 30px rgba(59, 130, 246, 0.15)', 
        padding: '40px',
        border: '3px solid #dbeafe'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            backgroundColor: '#dbeafe', 
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{ fontSize: '24px' }}>🌍</span>
          </div>
          <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e293b', margin: 0 }}>Languages</h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          <div style={{ 
            background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)', 
            padding: '24px', 
            borderRadius: '16px',
            border: '2px solid #93c5fd',
            textAlign: 'center',
            transition: 'transform 0.3s'
          }}>
            <div style={{ fontSize: '36px', marginBottom: '8px' }}>🇺🇸</div>
            <p style={{ fontWeight: '700', color: '#1e293b', fontSize: '18px', marginBottom: '4px' }}>English</p>
            <p style={{ color: '#64748b', fontSize: '14px' }}>Native / Bilingual</p>
          </div>
          <div style={{ 
            background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)', 
            padding: '24px', 
            borderRadius: '16px',
            border: '2px solid #93c5fd',
            textAlign: 'center',
            transition: 'transform 0.3s'
          }}>
            <div style={{ fontSize: '36px', marginBottom: '8px' }}>🇫🇷</div>
            <p style={{ fontWeight: '700', color: '#1e293b', fontSize: '18px', marginBottom: '4px' }}>French</p>
            <p style={{ color: '#64748b', fontSize: '14px' }}>Professional</p>
          </div>
        </div>
      </div>
    </div>
  );

  const ExperiencePage = () => {
    const experiences = [
      {
        title: 'IT Intern',
        company: 'MMR Constructors Inc.',
        location: 'Baton Rouge, LA',
        period: 'May 2024 to Present',
        emoji: '💼',
        duties: [
          'Receive phone calls from employees and clients and assist with device troubleshooting',
          'Assist with creating new employee accounts',
          'Set up equipment for employee use, performing or properly installing operating systems or software',
          'Assist with creating network cables and running through to new offices',
          'Performing hardware upgrades to company computers'
        ]
      },
      {
        title: 'Department of Computer Science Systems Worker',
        company: 'Louisiana State University',
        location: 'Baton Rouge, LA',
        period: 'February 2024 to Present',
        emoji: '🖥️',
        duties: [
          'Checking the functionality of labs',
          'Assisting Computer Science professors with troubleshooting devices',
          'Assisting with hardware and software installations'
        ]
      },
      {
        title: 'Help Desk Technician',
        company: 'Louisiana State University - College of Business',
        location: 'Baton Rouge, LA',
        period: 'July 2023 to January 2024',
        emoji: '🎧',
        duties: [
          'Troubleshot hardware issues and worked with service providers to facilitate repairs',
          'Set up equipment for employee and student use, performing or properly installing operating systems or software',
          'Installing hardware and software on company computers'
        ]
      }
    ];

    return (
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '42px', 
            fontWeight: 'bold', 
            background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '12px'
          }}>
            Work Experience 💻
          </h2>
          <div style={{ 
            width: '80px', 
            height: '4px', 
            background: 'linear-gradient(90deg, #3b82f6, #60a5fa)', 
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {experiences.map((exp, idx) => (
            <div key={idx} style={{ 
              backgroundColor: 'white', 
              borderRadius: '24px', 
              boxShadow: '0 10px 30px rgba(59, 130, 246, 0.15)', 
              padding: '36px',
              border: '3px solid #dbeafe',
              transition: 'all 0.3s',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                fontSize: '48px',
                opacity: 0.1
              }}>
                {exp.emoji}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', flexWrap: 'wrap', gap: '16px', position: 'relative', zIndex: 1 }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '28px' }}>{exp.emoji}</span>
                    <h3 style={{ fontSize: '26px', fontWeight: 'bold', color: '#1e293b', margin: 0 }}>{exp.title}</h3>
                  </div>
                  <p style={{ fontSize: '19px', color: '#3b82f6', fontWeight: '700', marginBottom: '4px' }}>{exp.company}</p>
                  <p style={{ color: '#64748b', fontSize: '15px' }}>📍 {exp.location}</p>
                </div>
                <span style={{ 
                  fontSize: '13px', 
                  color: '#3b82f6', 
                  backgroundColor: '#dbeafe', 
                  padding: '8px 16px', 
                  borderRadius: '20px', 
                  whiteSpace: 'nowrap',
                  fontWeight: '600',
                  border: '2px solid #93c5fd'
                }}>
                  📅 {exp.period}
                </span>
              </div>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {exp.duties.map((duty, dutyIdx) => (
                  <li key={dutyIdx} style={{ display: 'flex', gap: '12px', marginBottom: '14px', alignItems: 'flex-start' }}>
                    <span style={{ 
                      color: '#3b82f6', 
                      fontWeight: 'bold', 
                      fontSize: '20px',
                      minWidth: '20px'
                    }}>▹</span>
                    <span style={{ color: '#475569', lineHeight: '1.7', fontSize: '16px' }}>{duty}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const EducationPage = () => {
    const coursework = [
      { name: 'Malware Analysis and Reverse Engineering', icon: '🦠' },
      { name: 'Introduction into Systems Programming', icon: '⚙️' },
      { name: 'Computer Networks', icon: '🌐' },
      { name: 'Software Vulnerabilities', icon: '🔓' },
      { name: 'Mobile Security and Cryptography', icon: '🔐' },
      { name: 'Database Management Systems', icon: '💾' },
      { name: 'Operating Systems', icon: '🖥️' }
    ];

    return (
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '42px', 
            fontWeight: 'bold', 
            background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '12px'
          }}>
            Education 🎓
          </h2>
          <div style={{ 
            width: '80px', 
            height: '4px', 
            background: 'linear-gradient(90deg, #3b82f6, #60a5fa)', 
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
        </div>

        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '24px', 
          boxShadow: '0 10px 30px rgba(59, 130, 246, 0.15)', 
          padding: '40px',
          marginBottom: '36px',
          border: '3px solid #dbeafe',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            fontSize: '80px',
            opacity: 0.08
          }}>
            🎓
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px', flexWrap: 'wrap', gap: '16px', position: 'relative', zIndex: 1 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <span style={{ fontSize: '32px' }}>🐯</span>
                <h3 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1e293b', margin: 0 }}>Louisiana State University</h3>
              </div>
              <p style={{ fontSize: '20px', color: '#3b82f6', fontWeight: '700', marginBottom: '6px' }}>B.S. in Computer Science</p>
              <p style={{ color: '#64748b', marginBottom: '4px', fontSize: '16px' }}>🔒 Concentration in Cybersecurity</p>
              <p style={{ color: '#64748b', fontSize: '15px' }}>📍 Baton Rouge, LA</p>
            </div>
            <span style={{ 
              fontSize: '14px', 
              color: '#3b82f6', 
              backgroundColor: '#dbeafe', 
              padding: '10px 20px', 
              borderRadius: '20px',
              fontWeight: '600',
              border: '2px solid #93c5fd'
            }}>
              🎉 December 2025
            </span>
          </div>
        </div>
        
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '24px', 
          boxShadow: '0 10px 30px rgba(59, 130, 246, 0.15)', 
          padding: '40px',
          border: '3px solid #dbeafe'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              backgroundColor: '#dbeafe', 
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Code size={24} color="#3b82f6" />
            </div>
            <h3 style={{ fontSize: '26px', fontWeight: 'bold', color: '#1e293b', margin: 0 }}>Relevant Coursework</h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '18px' }}>
            {coursework.map((course, idx) => (
              <div key={idx} style={{ 
                background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)', 
                padding: '20px', 
                borderRadius: '16px',
                border: '2px solid #93c5fd',
                transition: 'all 0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <span style={{ fontSize: '28px' }}>{course.icon}</span>
                <p style={{ color: '#1e293b', fontWeight: '600', margin: 0, fontSize: '15px' }}>{course.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const SkillsPage = () => {
    const skillCategories = [
      {
        category: 'Professional Skills',
        icon: '💼',
        color: '#dbeafe',
        skills: [
          { name: 'Teamwork and Collaboration', emoji: '🤝' },
          { name: 'Verbal and Written Communication', emoji: '💬' },
          { name: 'Problem-Solving', emoji: '🧩' },
          { name: 'Hardware and Software Repair', emoji: '🔧' }
        ]
      },
      {
        category: 'Technical Skills',
        icon: '⚡',
        color: '#bfdbfe',
        skills: [
          { name: 'Computer Diagnostics', emoji: '🔍' },
          { name: 'Microsoft Windows and Office', emoji: '🪟' },
          { name: 'Help Desk Support', emoji: '🎧' },
          { name: 'Software Evaluation', emoji: '📊' }
        ]
      }
    ];

    return (
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '42px', 
            fontWeight: 'bold', 
            background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '12px'
          }}>
            Skills & Expertise ⚡
          </h2>
          <div style={{ 
            width: '80px', 
            height: '4px', 
            background: 'linear-gradient(90deg, #3b82f6, #60a5fa)', 
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
          {skillCategories.map((cat, idx) => (
            <div key={idx} style={{ 
              backgroundColor: 'white', 
              borderRadius: '24px', 
              boxShadow: '0 10px 30px rgba(59, 130, 246, 0.15)', 
              padding: '36px',
              border: '3px solid #dbeafe'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  backgroundColor: cat.color, 
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px'
                }}>
                  {cat.icon}
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e293b', margin: 0 }}>{cat.category}</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {cat.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} style={{ 
                    background: `linear-gradient(135deg, ${cat.color} 0%, ${cat.color} 100%)`, 
                    padding: '18px 20px', 
                    borderRadius: '14px',
                    border: '2px solid #93c5fd',
                    transition: 'all 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <span style={{ fontSize: '24px' }}>{skill.emoji}</span>
                    <p style={{ color: '#1e293b', fontWeight: '600', margin: 0, fontSize: '16px' }}>{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'experience':
        return <ExperiencePage />;
      case 'education':
        return <EducationPage />;
      case 'skills':
        return <SkillsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #bfdbfe 100%)', fontFamily: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Navigation */}
      <nav style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', boxShadow: '0 4px 20px rgba(59, 130, 246, 0.15)', position: 'sticky', top: 0, zIndex: 1000, backdropFilter: 'blur(10px)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '18px',
                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)'
              }}>
                AR
              </div>
              <div>
                <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e293b', display: 'block', lineHeight: '1.2' }}>Ashtyn Roberts</span>
                <span style={{ fontSize: '12px', color: '#64748b' }}>Computer Science Student</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div style={{ display: 'flex', gap: '10px' }} className="desktop-nav">
              {navigation.map((item) => (
                <NavButton key={item.id} item={item} />
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'none',
                padding: '10px',
                borderRadius: '12px',
                border: '2px solid #dbeafe',
                backgroundColor: 'white',
                cursor: 'pointer',
                color: '#3b82f6'
              }}
              className="mobile-menu-btn"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div style={{ padding: '16px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {navigation.map((item) => (
                <NavButton key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ padding: '40px 0', minHeight: 'calc(100vh - 200px)' }}>
        {renderPage()}
      </main>

      {/* Footer */}
      <footer style={{ 
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)', 
        color: 'white', 
        padding: '36px 0', 
        marginTop: '60px',
        borderTop: '4px solid #3b82f6'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '28px', marginBottom: '20px' }}>
            <a href="mailto:ashtyn_roberts@yahoo.com" style={{ 
              color: 'white', 
              transition: 'all 0.3s',
              padding: '12px',
              backgroundColor: 'rgba(59, 130, 246, 0.2)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Mail size={26} />
            </a>
            <a href="https://www.linkedin.com/in/ashtyn-roberts" target="_blank" rel="noopener noreferrer" style={{ 
              color: 'white', 
              transition: 'all 0.3s',
              padding: '12px',
              backgroundColor: 'rgba(59, 130, 246, 0.2)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Linkedin size={26} />
            </a>
            <a href="tel:225-287-3304" style={{ 
              color: 'white', 
              transition: 'all 0.3s',
              padding: '12px',
              backgroundColor: 'rgba(59, 130, 246, 0.2)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Phone size={26} />
            </a>
            <a href="https://github.com/ashtyn-roberts" target="_blank" rel="noopener noreferrer" style={{ 
              color: 'white', 
              transition: 'all 0.3s',
              padding: '12px',
              backgroundColor: 'rgba(59, 130, 246, 0.2)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Github size={26} />
            </a>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '15px', marginBottom: '8px' }}>Made with 💙 by Ashtyn Roberts</p>
          <p style={{ color: '#64748b', fontSize: '14px' }}>© 2024 Ashtyn Roberts. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes gentle-bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }

        a:hover {
          transform: translateY(-3px);
        }
      `}</style>
    </div>
  );
}