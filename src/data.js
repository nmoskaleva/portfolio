const projects = [
  {
    name: 'HackYourFuture website',
    id: 'hyf-dk',
    description:
      'A website for HackYourFuture Copenhagen. I added several features including the application deadline, FAQs, and a number of layout improvements. The most complex and non-standard task here was connecting the website (think Next.js) to Contentful CMS.',
    'built-with': 'React (w/hooks), Next.js, Material-UI, Contentful.',
    github:
      'https://github.com/nmoskaleva/hackyourfuture.dk/commits/contentful-v5',
    demo: 'https://www.hackyourfuture.dk/',
    img: './assets/hyf.png'
  },
  {
    name: 'Albums App',
    id: 'albums-app',
    description:
      "An app for creating photo albums and image galleries. A user can rearrange images in an album and create new albums by uploading images. Inspired by react-colors-app from Colt Steel's React bootcamp. ",
    'built-with': 'React, React Router, ReactCSSTransitionGroup.',
    github: 'https://github.com/nmoskaleva/albums-app',
    demo: 'https://albums-app.herokuapp.com/',
    img: './assets/albums.png'
  },
  {
    name: 'The Orchard',
    id: 'orchard',
    description:
      'A webpage featuring smooth scroll, fixed navbar, and a responsive image gallery (plant-based).',
    'built-with': 'Javascript, CSS.',
    github: 'https://github.com/nmoskaleva/orchard',
    demo: 'https://nmoskaleva.github.io/orchard/index.html',
    img: './assets/orchard.png'
  }
];

const skills = [
  'Javascript',
  'React',
  'Node.js',
  'Next.js',
  'MySQL',
  'Elasticsearch',
  'Contentful',
  'Git',
  'Typescript',
  'HTML & CSS'
];

const homePageLinks = [
  { title: 'About', link: '/about', id: 'about' },
  { title: null, link: null },
  { title: 'Skills', link: '/skills', id: 'skills' },
  { title: null, link: null },
  { title: null, link: null },
  { title: null, link: null },
  { title: null, link: null },
  { title: null, link: null },
  { title: 'Projects', link: '/projects', id: 'projects' },
  { title: null, link: null },
  { title: null, link: null },
  { title: null, link: null },
  { title: null, link: null },
  { title: 'Contact', link: './contact', id: 'contact' }
];

export { projects, skills, homePageLinks };
