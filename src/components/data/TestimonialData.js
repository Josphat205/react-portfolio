import { v4 as Id } from 'uuid';
import Icon from 'react-icons-kit';
import { github } from 'react-icons-kit/fa/github';
import { linkedin } from 'react-icons-kit/fa/linkedin';

const TestimonialData = [
  {
    id: Id(),
    picture:
      'https://media-exp1.licdn.com/dms/image/D4D03AQFBJB2_xEkbxQ/profile-displayphoto-shrink_200_200/0/1665246238582?e=1672272000&v=beta&t=fYzMaAjRheUzLu__gTfxIy7uw-SwcyD-hn8bIPje3ug',
    name: 'Inieke Sendy',
    recomandation:
      'Josphat is exactly the sort of software developer any company would love. I met as a friend on microverse, and we had an activity to work on together. I was struggling with the data structure and algorithm, but he within a few minutes was able to solve the problem and explain it in the most understandable way. He has a great way of simplifying complex problems into bite-sized pieces, he is also a fun person to chat with! Indeed a very good team player he is.Josphat is exactly the sort of software developer any company would love.',
    social: [
      {
        id: Id(),
        mediaLink: 'https://www.linkedin.com/in/sendyinieke/',
        icon: <Icon icon={linkedin} size={22} />,
        class: 'linkedin',
      },
      {
        id: Id(),
        mediaLink: 'https://github.com/uisendy',
        icon: <Icon icon={github} size={22} />,
        class: 'github',
      },
    ],
  },

  {
    id: Id(),
    picture:
      'https://res.cloudinary.com/defpepdn3/image/upload/v1668247028/img-portfolio/1648480002449_j3jedj.jpg',
    name: 'Silvia Tofana',
    recomandation:
      "Josphat is one of the brightest software developers I've ever met. I worked alongside him from the very beginning of my web development journey. In that time he proved his commitment and determination over and over again. Josphat is always challenging Himself--He's the type of person who solves algorithm challenges for fun, and His attention to detail is evident in all of the projects I've worked with him on. He's also genuinely a kind, encouraging person, and kept me from falling into bug blues multiple times. I can recommend Him without reservation.",
    social: [
      {
        id: Id(),
        mediaLink: 'https://www.linkedin.com/in/silviatofana/',
        icon: <Icon icon={linkedin} size={22} />,
        class: 'linkedin',
      },
      {
        id: Id(),
        mediaLink: 'https://github.com/silviatofana',
        icon: <Icon icon={github} size={22} />,
        class: 'github',
      }
    ]
  },

  {
    id: Id(),
    picture:
      'https://res.cloudinary.com/defpepdn3/image/upload/v1668247040/img-portfolio/onchera_dztb0k.jpg',
    name: 'Paul Onchera',
    recomandation:
      "Josphat is one of the best among all people I have ever met. Working with Josphat I found him as a person with great recognition and deep experience of IT solutions. An ambitious person with boundless energy, that’s Josphat! Has strong organizational skills. He has a great way of simplifying complex problems into bite-sized pieces, he is also a fun person to chat with! Indeed a very good team player he is.",
    social: [
      {
        id: Id(),
        mediaLink: 'https://www.linkedin.com/in/paul-onchera/',
        icon: <Icon icon={linkedin} size={22} />,
        class: 'linkedin',
      },
      {
        id: Id(),
        mediaLink: 'https://github.com/Paul-js-hub',
        icon: <Icon icon={github} size={22} />,
        class: 'github',
      },
    ],
  },
  {
    id: Id(),
    picture:
      'https://res.cloudinary.com/defpepdn3/image/upload/v1668611690/logo/siku_kiozzd.jpg',
    name: 'Christian Siku',
    recomandation:
      "Josphat is a very creative and good developer. She possesses the technical knowledge to become an extraordinary developer. he is a brilliant and humble man and can learn in a fast-paced environment. he's also open to ideas and listens to constructive criticism, approaching it as a thoughtful way of improving himself. I would highly recommend him as a software developer and designer.",
    social: [
      {
        id: Id(),
        mediaLink: 'https://www.linkedin.com/in/christian-siku/',
        icon: <Icon icon={linkedin} size={22} />,
        class: 'linkedin',
      },
      {
        id: Id(),
        mediaLink: 'https://github.com/Chrissiku',
        icon: <Icon icon={github} size={22} />,
        class: 'github',
      },
    ],
  }
];

export default TestimonialData;