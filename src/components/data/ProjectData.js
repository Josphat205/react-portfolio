import school from '../../assets/projects/school.png';
import africa from '../../assets/projects/africa.jpg';
import spaceX from '../../assets/projects/desktop.png';
import Weather from '../../assets/projects/desk.jpg';
import portfolio from '../../assets/projects/portfolio.png';
import ecomm from '../../assets/projects/ecomm.png';
import tutor from '../../assets/projects/tutor.png';
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
    live:"https://loman-portfolio.netlify.app/",
    demo:"https://github.com/Josphat205/react-portfolio"
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
    img:ecomm,
    name:"Ecommerce app",
    live:"https://ecomm-client-ten.vercel.app/",
    demo:"https://github.com/Josphat205/ecomm-client"
  },
  {
    id: Id(),
    img:Weather,
    name:"Weather app",
    live:"https://weather-app-react-henna.vercel.app/",
    demo:"https://github.com/Josphat205/Weather-App-React"
  },
  {
    id: Id(),
    img:tutor,
    name:"Tutor Appointment App",
    live:"https://starlit-syrniki-d3f2fe.netlify.app/",
    demo:"https://github.com/leehaney254/tutors-appointment-frontend"
  }
]

export default ProjectData;