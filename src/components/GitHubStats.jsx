import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaCodeBranch, FaCode, FaUsers, FaUserPlus, FaGithub } from 'react-icons/fa';

const GitHubStats = () => {
  const [stats, setStats] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [graphStatus, setGraphStatus] = useState({
    stats: true,
    languages: true,
    heatmap: true,
  });

  console.log('GitHubStats component rendering', { stats, repos, loading });

  const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
  const totalForks = repos.reduce((acc, repo) => acc + repo.forks_count, 0);
  const statCards = [
    {
      icon: FaCode,
      label: 'Repositorios Públicos',
      value: stats?.public_repos ?? 0,
    },
    {
      icon: FaUsers,
      label: 'Seguidores',
      value: stats?.followers ?? 0,
    },
    {
      icon: FaUserPlus,
      label: 'Siguiendo',
      value: stats?.following ?? 0,
    },
    {
      icon: FaStar,
      label: 'Total Stars',
      value: totalStars,
    },
    {
      icon: FaCodeBranch,
      label: 'Total Forks',
      value: totalForks,
    },
  ];
  const hasRepos = repos.length > 0;

  const handleGraphError = (graph) => {
    setGraphStatus((prev) => ({ ...prev, [graph]: false }));
  };

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
          {statCards.map(({ icon: Icon, label, value }) => (
            <div className="stat-card" key={label}>
              <div className="stat-icon-wrapper">
                <Icon className="stat-icon" />
              </div>
              <div className="stat-info">
                <span className="stat-number">{value}</span>
                <span className="stat-label">{label}</span>
              </div>
            </div>
          ))}
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
          {hasRepos ? (
            repos.map((repo, index) => (
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
                <p className="repo-description">{repo.description || 'Sin descripción disponible'}</p>
                <div className="repo-footer">
                  {repo.language && (
                    <span className="repo-language">{repo.language}</span>
                  )}
                  <span className="repo-updated">
                    Actualizado {new Date(repo.updated_at).toLocaleDateString('es-ES')}
                  </span>
                </div>
              </motion.a>
            ))
          ) : (
            <div className="repos-empty">
              <p>No se encontraron repositorios destacados en este momento.</p>
              <span>Vuelve pronto para ver proyectos recientes.</span>
            </div>
          )}
        </div>
      </motion.div>

      <motion.div 
        className="github-profile-cta"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <p>¿Quieres explorar más proyectos o colaborar conmigo?</p>
        <a
          className="github-cta-button"
          href="https://github.com/analiarojas2929"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> Visitar mi perfil de GitHub
        </a>
      </motion.div>

      {/* GitHub Contributions Graph */}
      <motion.div
        className="contributions-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="contributions-header">
          <h3>Actividad de Contribuciones</h3>
          <p>Visualiza mi desempeño en GitHub: commits, repositorios más activos y la distribución de lenguajes.</p>
        </div>
        <div className="contributions-grid">
          <div className="contribution-card">
            {graphStatus.stats ? (
              <img 
                src="https://github-readme-stats.vercel.app/api?username=analiarojas2929&show_icons=true&theme=graywhite&count_private=true&border_color=667eea&title_color=667eea&icon_color=764ba2&text_color=1e293b"
                alt="GitHub Stats"
                className="contribution-image"
                loading="lazy"
                onError={() => handleGraphError('stats')}
              />
            ) : (
              <div className="contribution-fallback">
                <h5>GitHub Stats no disponible</h5>
                <p>El servicio externo no respondió. Consulta mi actividad en los repos destacados o visita mi perfil.</p>
              </div>
            )}
            <div className="contribution-meta">
              <h4>Resumen de rendimiento</h4>
              <p>Incluye commits privados y métricas actualizadas automáticamente para reflejar mi progreso.</p>
            </div>
          </div>
          <div className="contribution-card">
            {graphStatus.languages ? (
              <img 
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=analiarojas2929&layout=compact&theme=graywhite&border_color=667eea&title_color=667eea&text_color=1e293b"
                alt="Top Languages"
                className="contribution-image"
                loading="lazy"
                onError={() => handleGraphError('languages')}
              />
            ) : (
              <div className="contribution-fallback">
                <h5>Top Languages no disponible</h5>
                <p>Mientras se restablece el gráfico, revisa los lenguajes usados en cada repositorio destacado.</p>
              </div>
            )}
            <div className="contribution-meta">
              <h4>Lenguajes que lidero</h4>
              <p>Stack dominante en mis proyectos más activos, ideal para entender mi enfoque técnico.</p>
            </div>
          </div>
          <div className="contribution-card wide">
            {graphStatus.heatmap ? (
              <img 
                src="https://ghchart.rshah.org/667eea/analiarojas2929"
                alt="Mapa de calor de contribuciones"
                className="contribution-image heatmap"
                loading="lazy"
                onError={() => handleGraphError('heatmap')}
              />
            ) : (
              <div className="contribution-fallback heatmap">
                <h5>Mapa de calor no disponible</h5>
                <p>GitHub aún no entrega el gráfico. Puedes ver la cronología de commits directamente en mi perfil.</p>
              </div>
            )}
            <div className="contribution-meta">
              <h4>Mapa de calor anual</h4>
              <p>Días activos de commits y colaboraciones durante el último año. El color más intenso refleja mayor actividad.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default GitHubStats;