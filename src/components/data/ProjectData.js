import school from '../../assets/projects/school.png';
import africa from '../../assets/projects/africa.png';
import calc from '../../assets/projects/calc.png';
import spaceX from '../../assets/projects/desktop.png';
import Weather from '../../assets/projects/desk.png';
import portfolio from '../../assets/projects/portfolio.png';
import { v4 as Id } from 'uuid';
const ProjectData = [
  {
    id: Id(),
    img:school,
    name:"School website app",
    live:"https://josphat205.github.io/School-Website/",
    demo:"https://github.com/Josphat205/School-Website"
  },
  {
    id: Id(),
    img:portfolio,
    name:"Portfolio app",
    live:"https://josphat205.github.io/Developer-loman-portfolio/",
    demo:"https://github.com/Josphat205/Developer-loman-portfolio"
  },
  {
    id: Id(),
    img:africa,
    name:"African Countries app",
    live:"https://explore-africa-loman.netlify.app/",
    demo:"https://github.com/Josphat205/explore-african-countries-project"
  },
  {
    id: Id(),
    img:spaceX,
    name:"SpaceX React app",
    live:"https://62dbece53e0238133d94702a--celadon-lamington-818c62.netlify.app/",
    demo:"https://github.com/developerwaleed/SpaceX-Traveller-Hub"
  },
  {
    id: Id(),
    img:calc,
    name:"Math Magician app",
    live:"https://math-magician200.herokuapp.com/",
    demo:"https://github.com/Josphat205/math-magician"
  },
  {
    id: Id(),
    img:Weather,
    name:"Weather app",
    live:"https://weather-app-200.herokuapp.com/",
    demo:"https://github.com/Josphat205/Weather-App-React"
  }
]

export default ProjectData;