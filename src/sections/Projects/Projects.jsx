import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';
import todo from '../../assets/todo.png';
import ai from '../../assets/ai.png';
import weather1 from '../../assets/weather1.png';
import portfolio from '../../assets/portfolio.png';
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={ai}
          link="https://aisummorizer.vercel.app/"
          h3="AI summarizer"
          p="Article Summarizer"
        />
        <ProjectCard
          src={portfolio}
          link=""
          h3="Portfolio"
          p="Personal portfolio"
        />
        <ProjectCard
          src={todo}
          link="https://todolist-tawny-three.vercel.app/"
          h3="To do"
          p="to do app"
        />
        <ProjectCard
          src={weather1}
          link="https://github.com/shivachakri8985/Weatherapp1"
          h3="weather"
          p="Weather App"
        />
      </div>
    </section>
  );
}

export default Projects;
