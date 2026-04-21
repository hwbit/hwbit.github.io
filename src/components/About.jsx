import { useEffect, useRef } from 'react';
import './About.css';

const highlights = [
    { icon: '⚡', text: 'Fast Learner' },
    { icon: '🎨', text: 'UI/UX Focused' },
    { icon: '🔧', text: 'Problem Solver' },
    { icon: '🤝', text: 'Team Player' },
];

export default function About() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
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
        <section className="about" id="about" ref={sectionRef}>
            <div className="container">
                <div className="about-grid">
                    <div className="about-image-wrapper animate-on-scroll">
                        <div className="about-image-card">
                            <span className="about-image-emoji">👨‍💻</span>
                        </div>
                    </div>

                    <div className="about-text animate-on-scroll">
                        <h2>About Me</h2>
                        <p className="lead">
                            I'm a recent computer science graduate with a passion for building clean,
                            efficient, and user-friendly applications that benefit the user.
                        </p>
                        <p>
                            Graduated from the University of Manitoba with a Bachelor of Science (Co-op) in Computer Science with a 4.25 GPA.
                        </p>
                        <p>
                            I am currently learning how to do game development using the Godot engine and GDScript.
                        </p>
                        <p>
                            When I am not developing, I enjoy weightlifting, running, reading, and photography.
                        </p>
                        <div className="about-highlights">
                            {highlights.map(({ icon, text }) => (
                                <div className="about-highlight-item" key={text}>
                                    <span className="icon">{icon}</span>
                                    <span>{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
