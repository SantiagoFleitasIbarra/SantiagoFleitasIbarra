const { useState, useEffect } = React;

function GitHubReadme() {
    const [config, setConfig] = useState(window.config);
    const [loading, setLoading] = useState(true);
    const [activityData, setActivityData] = useState([]);

    useEffect(() => {
        // Generate random activity data for visualization
        const generateActivityData = () => {
            const days = 52 * 7; // One year of activity
            const data = [];
            
            for (let i = 0; i < days; i++) {
                const level = Math.floor(Math.random() * 5);
                data.push(level);
            }
            
            setActivityData(data);
            setLoading(false);
        };
        
        generateActivityData();
        
        // Create animated background pixels
        const createPixels = () => {
            const header = document.querySelector('.header');
            if (!header) return;
            
            const animatedBackground = document.createElement('div');
            animatedBackground.className = 'animated-background';
            
            for (let i = 0; i < 20; i++) {
                const pixel = document.createElement('div');
                pixel.className = 'pixel';
                pixel.style.left = `${Math.random() * 100}%`;
                pixel.style.top = `${Math.random() * 100}%`;
                pixel.style.animationDelay = `${Math.random() * 5}s`;
                animatedBackground.appendChild(pixel);
            }
            
            header.appendChild(animatedBackground);
        };
        
        createPixels();
    }, []);

    const renderSkillBar = (level) => {
        let color;
        if (level >= 90) color = '#39d353';
        else if (level >= 70) color = '#26a641';
        else if (level >= 50) color = '#006d32';
        else if (level >= 30) color = '#e0b341';
        else color = '#e5534b';
        
        return (
            <div className="skill-bar">
                <div className="skill-level" style={{ width: `${level}%`, backgroundColor: color }}></div>
            </div>
        );
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="readme-container">
            <header className="header">
                <div className="profile-container">
                    <img 
                        src="https://avatars.githubusercontent.com/u/85951628?v=4" 
                        alt="Santiago Fleitas" 
                        className="profile-image" 
                    />
                </div>
                <h1>Santiago Fleitas</h1>
                <p className="tagline typing-effect">{config.tagline}</p>
                
                <div className="trophies">
                    <img src="https://github-profile-trophy.vercel.app/?username=santifleitas&theme=nord&column=4&margin-w=15&margin-h=15" alt="trophies" />
                </div>
            </header>
            
            <section className="section">
                <h2><i className="fas fa-user-astronaut"></i> About Me</h2>
                <div className="about-content">
                    <div>
                        <div className="about-item">
                            <i className="fas fa-code"></i>
                            <span>Software Developer | ML Enthusiast | Tech Gamer</span>
                        </div>
                        <div className="about-item">
                            <i className="fas fa-graduation-cap"></i>
                            <span>Graduate of Holberton School (Specialized in Machine Learning)</span>
                        </div>
                        <div className="about-item">
                            <i className="fas fa-university"></i>
                            <span>Currently studying Computer Engineering at Universidad de la República (UdelaR)</span>
                        </div>
                        <div className="about-item">
                            <i className="fas fa-rocket"></i>
                            <span>Passionate about coding, problem-solving, and game-like experiences</span>
                        </div>
                        <div className="about-item">
                            <i className="fas fa-tools"></i>
                            <span>Focused on Backend, Frontend, and AI Development</span>
                        </div>
                    </div>
                    <div>
                        <div className="quote-box">
                            "Coding is my ultimate adventure! I approach every challenge like a game level waiting to be conquered."
                        </div>
                        
                        <img 
                            src="https://github-readme-streak-stats.herokuapp.com/?user=santifleitas&theme=dark&hide_border=true" 
                            alt="GitHub streak stats" 
                            style={{width: '100%', marginTop: '20px', borderRadius: '8px'}}
                        />
                    </div>
                </div>
            </section>
            
            <section className="section">
                <h2><i className="fas fa-laptop-code"></i> Skills</h2>
                
                <div className="skill-category">
                    <h3><i className="fas fa-chart-bar"></i> Proficiency</h3>
                    <div className="about-item">
                        <i className="fas fa-desktop"></i>
                        <span>Frontend</span>
                        {renderSkillBar(100)}
                    </div>
                    <div className="about-item">
                        <i className="fas fa-server"></i>
                        <span>Backend</span>
                        {renderSkillBar(100)}
                    </div>
                    <div className="about-item">
                        <i className="fas fa-database"></i>
                        <span>Database</span>
                        {renderSkillBar(60)}
                    </div>
                    <div className="about-item">
                        <i className="fas fa-robot"></i>
                        <span>AI & ML</span>
                        {renderSkillBar(50)}
                    </div>
                    <div className="about-item">
                        <i className="fas fa-cloud"></i>
                        <span>DevOps</span>
                        {renderSkillBar(30)}
                    </div>
                </div>
                
                <div className="skill-category">
                    <h3><i className="fas fa-cubes"></i> Frontend</h3>
                    <div className="tech-stack">
                        <div className="tech-badge" style={{backgroundColor: '#61DAFB', color: '#000'}}><i className="fab fa-react"></i> React</div>
                        <div className="tech-badge" style={{backgroundColor: '#E34F26', color: '#fff'}}><i className="fab fa-html5"></i> HTML</div>
                        <div className="tech-badge" style={{backgroundColor: '#264de4', color: '#fff'}}><i className="fab fa-css3-alt"></i> CSS</div>
                        <div className="tech-badge" style={{backgroundColor: '#F7DF1E', color: '#000'}}><i className="fab fa-js"></i> JavaScript</div>
                        <div className="tech-badge" style={{backgroundColor: '#38bdf8', color: '#fff'}}><i className="fab fa-css3"></i> Tailwind CSS</div>
                    </div>
                </div>
                
                <div className="skill-category">
                    <h3><i className="fas fa-server"></i> Backend</h3>
                    <div className="tech-stack">
                        <div className="tech-badge" style={{backgroundColor: '#339933', color: '#fff'}}><i className="fab fa-node-js"></i> Node.js</div>
                        <div className="tech-badge" style={{backgroundColor: '#3776AB', color: '#fff'}}><i className="fab fa-python"></i> Python</div>
                        <div className="tech-badge" style={{backgroundColor: '#F05032', color: '#fff'}}><i className="fab fa-git-alt"></i> Git</div>
                        <div className="tech-badge" style={{backgroundColor: '#000000', color: '#fff'}}><i className="fab fa-node-js"></i> Express.js</div>
                        <div className="tech-badge" style={{backgroundColor: '#4479A1', color: '#fff'}}><i className="fas fa-database"></i> MySQL</div>
                    </div>
                </div>
                
                <div className="skill-category">
                    <h3><i className="fas fa-mobile-alt"></i> Mobile & Others</h3>
                    <div className="tech-stack">
                        <div className="tech-badge" style={{backgroundColor: '#02569B', color: '#fff'}}><i className="fas fa-mobile-alt"></i> Flutter</div>
                        <div className="tech-badge" style={{backgroundColor: '#0052CC', color: '#fff'}}><i className="fab fa-jira"></i> Jira</div>
                        <div className="tech-badge" style={{backgroundColor: '#F05032', color: '#fff'}}><i className="fab fa-git"></i> Git</div>
                        <div className="tech-badge" style={{backgroundColor: '#F24E1E', color: '#fff'}}><i className="fas fa-pen-nib"></i> Figma</div>
                    </div>
                </div>
                
                <div className="wakatime-stats">
                    <img 
                        src="https://github-readme-stats.vercel.app/api/wakatime?username=santifleitas&layout=compact&theme=github_dark" 
                        alt="WakaTime Stats" 
                        style={{width: '100%'}}
                    />
                </div>
            </section>
            
            <section className="section">
                <h2><i className="fas fa-code-branch"></i> Projects</h2>
                <div className="projects-container">
                    {config.projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <h3><i className={project.icon}></i> {project.name}</h3>
                            <p>{project.description}</p>
                            <div className="tech-stack">
                                {project.technologies.map((tech, techIndex) => (
                                    <div className="tech-badge" key={techIndex}>
                                        {tech}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
            <section className="section">
                <h2><i className="fas fa-chart-line"></i> Stats & Achievements</h2>
                <div className="stats-container">
                    <div className="stat-card">
                        <h3>GitHub Stats</h3>
                        <img 
                            src="https://github-readme-stats.vercel.app/api?username=santifleitas&show_icons=true&theme=github_dark&hide_border=true" 
                            alt="GitHub Stats" 
                            style={{width: '100%'}}
                        />
                    </div>
                    <div className="stat-card">
                        <h3>Top Languages</h3>
                        <img 
                            src="https://github-readme-stats.vercel.app/api/top-langs/?username=santifleitas&layout=compact&theme=github_dark&hide_border=true" 
                            alt="Top Languages" 
                            style={{width: '100%'}}
                        />
                    </div>
                </div>
                
                <div className="github-activity">
                    <h3>GitHub Contributions</h3>
                    <div className="github-calendar">
                        <img 
                            src="https://ghchart.rshah.org/539bf5/santifleitas" 
                            alt="GitHub Contributions" 
                            style={{width: '100%'}}
                        />
                    </div>
                    
                    <div className="activity-grid" style={{marginTop: '20px'}}>
                        {activityData.map((level, index) => (
                            <div 
                                key={index} 
                                className={`activity-day level-${level}`}
                                title={`${level * 2} contributions`}
                            ></div>
                        ))}
                    </div>
                </div>
                
                <div className="achievement-list">
                    <h3>Achievements</h3>
                    {config.achievements.map((achievement, index) => (
                        <div className="achievement" key={index}>
                            <i className="fas fa-trophy"></i>
                            <span>{achievement}</span>
                        </div>
                    ))}
                </div>
            </section>
            
            <div className="footer">
                <a href="https://github.com/santifleitas" className="connect-button">
                    <i className="fab fa-github"></i> GitHub
                </a>
                <a href="https://www.linkedin.com/in/santifleitas/" className="connect-button">
                    <i className="fab fa-linkedin"></i> LinkedIn
                </a>
                <a href="https://santifleitas.github.io/Portfolio/" className="connect-button portfolio">
                    <i className="fas fa-globe"></i> Portfolio
                </a>
                <a href="#" className="connect-button resume">
                    <i className="fas fa-file-download"></i> Download CV
                </a>
            </div>
            
            <div style={{textAlign: 'center', marginTop: '20px', fontSize: '0.9rem', color: 'var(--highlight)'}}>
                <p>"Keep coding, keep playing, keep leveling up!" 🚀</p>
                <p style={{marginTop: '10px'}}>
                    <i className="fas fa-eye"></i> Visitors: 
                    <img src="https://visitor-badge.laobi.icu/badge?page_id=santifleitas.santifleitas" alt="visitors" style={{marginLeft: '5px'}} />
                </p>
            </div>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<GitHubReadme />);

