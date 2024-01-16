const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://saisameer010.github.io',
  title: 'YSS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Yanamandra Sai Sameer',
  role: 'Fullstack Engineer',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://drive.google.com/file/d/1l52YywjhP8e3I9fqQNAsORJfvGFRDkMY/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/saisameery/',
    github: 'https://github.com/saisameer010',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Gesture Recognition with LSTM Neural Network',
    description:
      'A LSTM neural network for precise gesture recognition using polar angle data ',
    stack: [ 'Python','LSTM','Tensorflow', 'Keras'],
    sourceCode: 'https://github.com/saisameer010/Gesture-Recognition-with-LSTM-Neural-Network',
    livePreview: 'https://github.com/saisameer010/Gesture-Recognition-with-LSTM-Neural-Network',
  },
  {
    name: 'Image Upscaling Using GANs',
    description:
      'An end-to-end application for image upscaling through GANs and TensorFlow',
    stack: ['Flask', 'GAN','Docker','Tensorflow', 'React'],
    sourceCode: 'https://github.com/saisameer010/GAN-upscaler',
    livePreview: 'https://github.com/saisameer010/GAN-upscaler',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Learning Based Approach for Hindi Text Sentiment Analysis',
    description:
      'A Natural Language Processing (NLP) model using Naive Bayes Classifier to perform Sentiment Analysis in the Hindi Language',
    stack: ['Python', 'NLP'],
    sourceCode: 'https://repo.ijiert.org/index.php/ijiert/article/view/161/149',
    livePreview: 'https://repo.ijiert.org/index.php/ijiert/article/view/161/149',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Resume Parser',
    description:
      'A Web Application to parse Resumes and extract Information Using NLP',
    stack: ['Flask',"NLP", 'Spacy', "React"],
    sourceCode: 'https://github.com/saisameer010',
    livePreview: 'https://github.com/saisameer010',
    // livePreview: 'https://github.com',
  },
  {
    name: 'DB2 Query Optimizer',
    description:
      'Query Optimizer for DB2',
    stack: ['Java', 'DB2'],
    sourceCode: 'https://github.com/saisameer010/Query-optimizer-db2',
    livePreview: 'https://github.com/saisameer010/Query-optimizer-db2',
  },
  {
    name: 'Vehicle Detection and Tracking',
    description:
      'A Python-based solution to detect vehicles and track in a situation with low video clarity',
    stack: ['Python', 'OpenCV'],
    sourceCode: 'https://github.com/saisameer010/Vehicle-detection-and-tracking-Using-OpenCv',
    livePreview: 'https://github.com/saisameer010/Vehicle-detection-and-tracking-Using-OpenCv',
  },
]

const certificates=[
  {
    name:"AWS Solutions Architect",
    date:"Nov-2023",
    validity:"3 years"
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jira',
  'Python',
  'Flask',
  'Django',
  'Docker',
  'Kubernetes',
  'AWS',
  'Azure',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'saisameeryanamandra@gmail.com',
}

export { header, about, projects, skills, contact,certificates }
