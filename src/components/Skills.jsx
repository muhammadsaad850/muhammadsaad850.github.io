import './Skills.css';

const SKILLS = [
  'C', 'Python', 'C++', 'SQL', 'JavaScript', 'HTML', 'CSS',
  'React', 'Flask', 'Electron', 'Django', 'Tkinter',
  'PyTest', 'PyInstaller', 'Pandas', 'NumPy', 'SciKit-Learn',
  'TensorFlow', 'XGBoost', 'Docker', 'Git',
  'MATLAB', 'Simulink',
  'Azure Blob Storage', 'Azure Key Vault', 'PostgreSQL',
];

function Skills() {
  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {SKILLS.map((skill) => (
          <span key={skill} className="skill-pill">{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
