const skills = [
  {
    title: 'Amazon Web Services',
    competency: 4,
    category: ['Cloud', 'Tools'],
    index: 1,
  },
  {
    title: 'Google Cloud',
    competency: 2,
    category: ['Tools', 'Cloud'],
    index: 1, 
  },
  {
    title: 'Oracle',
    competency: 2,
    category: ['Tools', 'Cloud'],
    index: 1,
  },
  {
    title: 'Azure',
    competency: 3,
    category: ['Cloud', 'Tools'],
    index: 1,
  },
  {
    title: 'Heroku',
    competency: 4,
    category: ['Cloud', 'Tools'],
    index: 1,
  },
  {
    title: 'Javascript',
    competency: 5,
    category: ['UI', 'Web Development', 'Languages', 'Javascript', 'Backend'],
    index: 3,
  },
  {
    title: 'TypeScript',
    competency: 5,
    category: ['UI', 'Web Development', 'Languages', 'Javascript', 'Backend'],
    index: 3,
  },
  {
    title: 'Node.JS',
    competency: 5,
    category: ['Web Development', 'Javascript'],
    index: 3,
  },
  {
    title: 'React.JS',
    competency: 5,
    category: ['UI', 'Web Development', 'Javascript'],
    index: 3,
  },
  {
    title: 'Next.JS',
    competency: 4,
    category: ['UI', 'Web Development', 'Javascript'],
    index: 3,
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Tools', 'Languages'],
  },

  {
    title: 'MongoDB',
    competency: 3,
    category: ['Web Development', 'Databases'],
    index: 3,
  },
  {
    title: 'Dynamo DB',
    competency: 3,
    category: ['Web Development', 'Databases'],
    index: 3,
  },
  {
    title: 'ElasticSearch',
    competency: 4,
    category: ['Web Development', 'Databases'],
    index: 3,
  },
  {
    title: 'PostgreSQL/SQLite3/Redshift',
    competency: 4,
    category: ['Web Development', 'Databases'],
    index: 3,
  },
  {
    title: 'Redis',
    competency: 3,
    category: ['Web Development', 'Databases'],
    index: 3,
  },
  {
    title: 'Express.JS',
    competency: 5,
    category: ['Web Development', 'Javascript'],
    index: 3,
  },
  {
    title: 'Github',
    competency: 5,
    category: ['Tools', 'Version Control'],
    
  },
  {
    title: 'BitBucket',
    competency: 4,
    category: ['Tools', 'Version Control'],
  },
  {
    title: 'Gitlab',
    competency: 4,
    category: ['Tools', 'Version Control'],
  },
  {
    title: 'AWS Code Commit',
    competency: 3,
    category: ['Tools', 'Version Control'],
  },
  {
    title: 'Kubernetes',
    competency: 4,
    category: ['Tools', 'Data Engineering', 'Containers & Orchestration'],
  },
  {
    title: 'Docker',
    competency: 5,
    category: ['Tools', 'Data Engineering', 'Containers & Orchestration'],
  },
  {
    title: 'PodMan',
    competency: 3,
    category: ['Tools', 'Data Engineering', 'Containers & Orchestration'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['UI', 'Web Development', 'Languages'],
    index: 3,
  },
  {
    title: 'Java',
    competency: 5,
    category: ['Languages', 'Java', 'Backend'],
  },
  {
    title: 'Ruby',
    competency: 2,
    category: ['Languages', 'Backend'],
  },
  {
    title: '.Net/.Net core',
    competency: 4,
    category: ['Languages', 'Backend', 'Data Engineering'],
  },
  {
    title: 'Python',
    competency: 3,
    category: ['Languages', 'Backend', 'Data Engineering'],
  },
  {
    title: 'REST',
    competency: 5,
    category: ['Web Development', 'API'],
    index: 3,
  },
  {
    title: 'gRPC',
    competency: 3,
    category: ['Web Development', 'API'],
    index: 3,
  },
  {
    title: 'SOAP',
    competency: 4,
    category: ['Web Development', 'API'],
    index: 3,
  },
  {
    title: 'GraphQL',
    competency: 4,
    category: ['Web Development', 'API'],
    index: 3,
  },
  {
    title: 'Terraform',
    competency: 5,
    category: ['IaC', 'Tools'],
  },
  {
    title: 'Pulumi',
    competency: 3,
    category: ['IaC', 'Tools'],
  },
  {
    title: 'AWS Cloudformation',
    competency: 3,
    category: ['IaC', 'Tools'],
  },
  {
    title: 'AWS CDK',
    competency: 3,
    category: ['IaC', 'Tools'],
  },
  {
    title: 'Circle CI',
    competency: 4,
    category: ['CI/CD', 'Tools'],
  },
  {
    title: 'Jenkins',
    competency: 3,
    category: ['CI/CD', 'Tools'],
  },
  {
    title: 'Github Actions',
    competency: 4,
    category: ['CI/CD', 'Tools'],
  },
  {
    title: 'AWS CI/CD Tools',
    competency: 3,
    category: ['CI/CD', 'Tools'],
  },
  {
    title: 'Logstash',
    competency: 4,
    category: ['Monitoring', 'Tools'],
  },
  {
    title: 'Kibana',
    competency: 4,
    category: ['Monitoring', 'Tools'],
  },
  {
    title: 'DataDog',
    competency: 3,
    category: ['Monitoring', 'Tools'],
  },
  {
    title: 'New Relic',
    competency: 3,
    category: ['Monitoring', 'Tools'],
  },
  {
    title: 'Splunk',
    competency: 3,
    category: ['Monitoring', 'Tools'],
  },
  {
    title: "Serverless Architecture",
    competency: 4,
    category: ["Software Architecture"],
    index: 2,
},
{
    title: "Microservices Architecture",
    competency: 4,
    category: ["Software Architecture"],
    index: 2,
},
{
   title:"Event-Driven Architecture",
    competency:4,
    category:["Software Architecture"],
    index: 2,
 } ,
 { 
    title:"Monolithic Architecture ", 
     competency: 4, 
     category:["Software Architecture"],
     index: 2, 
  },
  { 
    title:"SOA Architecture ", 
     competency: 4, 
     category:["Software Architecture"],
     index: 2, 
  },
  { 
    title:"MutiTier Architecture N-Tier ", 
     competency: 2, 
     category:["Software Architecture"],
     index: 2, 
  }
].map((skill) => ({ ...skill, category: skill.category.sort() }));
const colors = [
  '#FFF48D',
  '#FCDD8C',
  '#F4B33B',
  '#DEB2FA',
  '#B2A33F',
  '#BADAF8',
  '#C1FDFD',
  '#D2FCC3',
  '#ECECEC',
  '#FFD58D', 
  '#FCCC8C', 
  '#F4D33B',  
  '#DFB2FA',  
  '#B2B33F',  
  '#BAEAF8',  
  '#C1FFFD',   
  '#D3FCC3'
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
