//import icon images
import css from './images/icons/css.png'
// import git from './images/icons/git.png'
// import github from './images/icons/github.png'
import html5 from './images/icons/html5.png'
import jslogo from './images/icons/jslogo.png'
// import node from './images/icons/node.png'
import postgres from './images/icons/postgres.png'
import reactlogo from './images/icons/reactlogo.png'
import sql from './images/icons/sql.png'

//import project images
import afrolit from './images/projects/afrolit.png'
import booby from './images/projects/booby.png'
import bestlife from './images/projects/bestlife.png'

const Projects = [
  {
    id: 1,
    title: 'Blue Footed Booby Bounce',
    type: 'Front-end',
    tech: [
      {
        id: 1,
        name: 'JavaScript',
        img: jslogo
      },
      {
        id: 2,
        name: 'HTML',
        img: html5
      },
      {
        id: 3,
        name: 'CSS',
        img: css 
      }
    ],
    project_img: booby ,
    description: "This is a collision detection game based off of the mobile game 'Flappy Bird'. Tap any key to keep the Blue-Footed Booby flying and avoid touching the pillars. This game was built using object-oriented-programming with the HTML5 canvas element.",
    project_url: 'https://bouncyboob.surge.sh/',
    github_url: 'https://github.com/lorianahines/Blue-Footed-Booby-Bounce'
  },
  {
    id: 2,
    title: 'AfroLit',
    type: 'Front-end',
    tech: [
      {
        id: 4,
        name: 'JavaScript',
        img: jslogo
      },
      {
        id: 5,
        name: 'React.js',
        img: reactlogo
      },
      {
        id: 6,
        name: 'CSS',
        img: css 
      }
    ],
    project_img: afrolit ,
    description: "This is a Library app built with React that allows users to search for books related to Afro-Literature using the Google Books API. Includes: local storage for Wishlist feature, pure CSS styling, dynamic component generation, and API requests.",
    project_url: 'https://afro-lit.herokuapp.com/',
    github_url: 'https://github.com/lorianahines/afro-lit'
  },
  {
    id: 3,
    title: 'BestLife',
    type: 'Fullstack',
    tech: [
      {
        id: 7,
        name: 'JavaScript',
        img: jslogo
      },
      {
        id: 8,
        name: 'React.js',
        img: reactlogo
      },
      {
        id: 9,
        name: 'CSS',
        img: css 
      },
      {
        id: 10,
        name: 'SQL',
        img: sql
      },
      {
        id: 11,
        name: 'PostgreSQL',
        img: postgres
      }
    ],
    project_img: bestlife ,
    description: "Fitness tracking app built with React, Express, and SQL that allows users to track their food intake and exercises done for the day. Includes: full CRUD functionality, user authentication, and pure CSS styling.",
    project_url: 'http://best-l-i-f-e.surge.sh/',
    github_url: 'https://github.com/Calvinkim4/best-life'
  }
]

export default Projects