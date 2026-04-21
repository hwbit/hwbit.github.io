import './Hero.css';

export default function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero-bg">
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
                <div className="orb orb-3"></div>
            </div>

            <div className="container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="dot"></span>
                        Available for opportunities
                    </div>

                    <h1>
                        Developing solutions <br />
                        for things on the <span className="highlight">web</span>
                    </h1>

                    <p className="hero-description">
                        Recent computer science graduate with a passion for building
                        innovative and user-friendly applications. Experienced in
                        full-stack development with a strong foundation in modern web
                        technologies.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">
                            View My Work
                            <span>→</span>
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            Get In Touch
                        </a>
                    </div>

                    <div className="hero-stats">
                        <div className="hero-stat">
                            <h3>2+</h3>
                            <p>Years Experience</p>
                        </div>
                        <div className="hero-stat">
                            <h3>6+</h3>
                            <p>Projects Completed</p>
                        </div>
                        <div className="hero-stat">
                            <h3>10+</h3>
                            <p>Technologies</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
