import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaCodeBranch, FaCode, FaUsers } from 'react-icons/fa';

const GitHubStats = () => {
  const [stats, setStats] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log('GitHubStats component rendering', { stats, repos, loading });

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user stats
        const userResponse = await fetch('https://api.github.com/users/analiarojas2929');
        if (!userResponse.ok) {
          throw new Error('Error fetching user data');
        }
        const userData = await userResponse.json();
        
        // Fetch repositories
        const reposResponse = await fetch('https://api.github.com/users/analiarojas2929/repos?sort=updated&per_page=6');
        if (!reposResponse.ok) {
          throw new Error('Error fetching repos');
        }
        const reposData = await reposResponse.json();
        
        setStats(userData);
        setRepos(reposData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        // Set default values on error
        setStats({
          public_repos: 15,
          followers: 5,
          following: 10
        });
        setRepos([]);
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <div className="github-stats-loading">
        <motion.div 
          className="loading-spinner"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <p>Cargando estadísticas de GitHub...</p>
      </div>
    );
  }

  return (
    <section className="github-stats-section">
      <motion.div
        className="github-stats-header"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">📊 GitHub Analytics</h2>
        <p className="section-subtitle">Mi actividad y contribuciones en GitHub</p>
      </motion.div>

      {stats && (
        <motion.div 
          className="stats-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="stat-card">
            <FaCode className="stat-icon" />
            <div className="stat-info">
              <span className="stat-number">{stats.public_repos}</span>
              <span className="stat-label">Repositorios Públicos</span>
            </div>
          </div>
          
          <div className="stat-card">
            <FaUsers className="stat-icon" />
            <div className="stat-info">
              <span className="stat-number">{stats.followers}</span>
              <span className="stat-label">Seguidores</span>
            </div>
          </div>
          
          <div className="stat-card">
            <FaCodeBranch className="stat-icon" />
            <div className="stat-info">
              <span className="stat-number">{stats.following}</span>
              <span className="stat-label">Siguiendo</span>
            </div>
          </div>
          
          <div className="stat-card">
            <FaStar className="stat-icon" />
            <div className="stat-info">
              <span className="stat-number">{repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)}</span>
              <span className="stat-label">Total Stars</span>
            </div>
          </div>
        </motion.div>
      )}

      <motion.div 
        className="repos-grid"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3>Repositorios Destacados</h3>
        <div className="repos-container">
          {repos.map((repo, index) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="repo-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
            >
              <div className="repo-header">
                <h4>{repo.name}</h4>
                <div className="repo-stats">
                  <span><FaStar /> {repo.stargazers_count}</span>
                  <span><FaCodeBranch /> {repo.forks_count}</span>
                </div>
              </div>
              <p className="repo-description">{repo.description || 'Sin descripción'}</p>
              <div className="repo-footer">
                {repo.language && (
                  <span className="repo-language">{repo.language}</span>
                )}
                <span className="repo-updated">
                  {new Date(repo.updated_at).toLocaleDateString('es-ES')}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* GitHub Contributions Graph */}
      <motion.div
        className="contributions-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3>Actividad de Contribuciones</h3>
        <img 
          src="https://github-readme-stats.vercel.app/api?username=analiarojas2929&show_icons=true&theme=tokyonight&count_private=true"
          alt="GitHub Stats"
          className="github-stats-image"
        />
        <img 
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=analiarojas2929&layout=compact&theme=tokyonight"
          alt="Top Languages"
          className="github-languages-image"
        />
      </motion.div>
    </section>
  );
};

export default GitHubStats;