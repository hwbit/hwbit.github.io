import { useEffect, useRef, useState } from 'react';
import './Skills.css';

const categories = [
    {
        title: 'Languages',
        icon: '💻',
        tools: [
            'Python', 'Java', 'JavaScript', 'TypeScript', 'PHP', 'C', 'C++', 'C#', 'HTML', 'CSS', 'GDScript',
        ],
    },
    {
        title: 'Frontend',
        icon: '🎨',
        tools: [
            'React', 'Vite',
        ],
    },
    {
        title: 'Backend',
        icon: '⚙️',
        tools: [
            'Node.js', 'Express.js', 'FastAPI', 'Azure Function App'
        ],
    },
    {
        title: 'Databases',
        icon: '🗄️',
        tools: [
            'MySQL', 'PostgreSQL', 'MS SQL', 'SQLite', 'MongoDB', 'NoSQL', 'CosmosDB'
        ],
    },
    {
        title: 'Tools & Other',
        icon: '🛠️',
        tools: [
            'Git', 'Alembic', 'Monogame', 'Godot', 'Azure', 'Docker', 'Splunk', 'Jira', 'Postman', 'Figma',
        ],
    },
];

export default function Skills() {
    const sectionRef = useRef(null);
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        setAnimated(true);
                    }
                });
            },
            { threshold: 0.15 }
        );

        const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="skills" id="skills" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title animate-on-scroll">Skills & Tech Stack</h2>
                {/* <p className="section-subtitle animate-on-scroll">
                    Technologies and tools I use to bring ideas to life.
                </p> */}

                <div className="skills-categories">
                    {categories.map((cat) => (
                        <div className="glass-card skill-category animate-on-scroll" key={cat.title}>
                            <div className="skill-category-header">
                                <div className="skill-category-icon">{cat.icon}</div>
                                <h3>{cat.title}</h3>
                            </div>

                            {cat.skills ? (
                                <div className="skills-list">
                                    {cat.skills.map((skill) => (
                                        <div className="skill-item" key={skill.name}>
                                            <div className="skill-info">
                                                <span className="skill-name">{skill.name}</span>
                                                <span className="skill-percentage">{skill.level}%</span>
                                            </div>
                                            <div className="skill-bar">
                                                <div
                                                    className={`skill-bar-fill ${animated ? 'animate' : ''}`}
                                                    style={{ width: animated ? `${skill.level}%` : '0%' }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="skill-tools">
                                    {cat.tools.map((tool) => (
                                        <span className="skill-tool-badge" key={tool}>{tool}</span>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
