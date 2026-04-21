import { useEffect, useRef } from 'react';
import './Projects.css';

const projects = [
    {
        icon: '💬',
        title: 'StarMe',
        description:
            'AI-powered mock interview platform generating role-specific technical questions for software engineering and ML candidates.',
        tags: ['TypeScript', 'Python', 'React', 'FastAPI', 'PostgreSQL', 'Alembic'],
        github: '#',
        live: '#',
    },
    {
        icon: '🔮',
        title: 'Astra App',
        description:
            'An astrology application that generates personalized horoscopes crafted by artificial intelligence.',
        tags: [],
        github: '#',
        live: 'https://astraapp.co/',
    },
    {
        icon: '📊',
        title: 'GW2 Account Viewer',
        description:
            'Responsive full-stack web application to interface with the Guild Wars 2 API and display user account data.',
        tags: ['TypeScript', 'React', 'Node.js', 'Express.js', 'Vite'],
        github: 'https://github.com/hwbit/gw2-acc-view/',
        live: '#',
    },
    {
        icon: '🍳',
        title: 'PrepPal',
        description:
            'An undergraduate software engineering project. A web application for recipe and meal planning.',
        tags: ['TypeScript', 'MongoDB', 'React', 'Express.js', 'Node.js'],
        github: 'https://github.com/hwbit/PrepPal/',
        live: '#',
    },
    {
        icon: '🏎️',
        title: 'F1-Visualizer',
        description:
            'Visualize drivers on race track for real F1 circuits and displays live location data of selected drivers on the track at a point in time. Won Most Innovative Design Award at devClub Hackathon Winter 2024.',
        tags: ['C#', 'Monogame'],
        github: 'https://github.com/hwbit/F1-Visualizer/',
        live: '#',
    },
    {
        icon: '⚡',
        title: 'PokéDB',
        description:
            'An undergraduate database project. A Pokémon database that contains information about Pokémon, their abilities, moves, evolution, types, forms, and other related elements like the moves themselves and items. The data originated from the main series Pokémon games from generations 1-8 inclusive.',
        tags: ['Java', 'MS SQL'],
        github: 'https://github.com/hwbit/pokemon-db/',
        live: '#',
    },
    // {
    //     icon: '📝',
    //     title: 'Dev Blog Platform',
    //     description:
    //         'A developer blog platform with markdown support, syntax highlighting, comments section, and tag-based filtering.',
    //     tags: ['Next.js', 'MDX', 'Tailwind', 'Vercel'],
    //     github: '#',
    //     live: '#',
    // },
];

export default function Projects() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add('visible');
                });
            },
            { threshold: 0.1 }
        );

        const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="projects" id="projects" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title animate-on-scroll">Featured Projects</h2>
                <p className="section-subtitle animate-on-scroll">
                    A selection of projects I've built — from concept to deployment.
                </p>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div
                            className="glass-card project-card animate-on-scroll"
                            key={project.title}
                        >
                            <div className="project-icon">{project.icon}</div>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map((tag) => (
                                    <span className="project-tag" key={tag}>{tag}</span>
                                ))}
                            </div>
                            {(project.github && project.github !== '#') || (project.live && project.live !== '#') ? (
                                <div className="project-links">
                                    {project.github && project.github !== '#' && (
                                        <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                                            ↗ GitHub
                                        </a>
                                    )}
                                    {project.live && project.live !== '#' && (
                                        <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">
                                            ◉ Live Demo
                                        </a>
                                    )}
                                </div>
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
