const skills = [
  {
    title: 'Amazon Web Services',
    competency: 4,
    category: ['Cloud', 'Tools'],
  },
  {
    title: 'Google Cloud',
    competency: 2,
    category: ['Tools', 'Cloud'],
  },
  {
    title: 'Oracle',
    competency: 2,
    category: ['Tools', 'Cloud'],
  },
  {
    title: 'Azure',
    competency: 3,
    category: ['Cloud', 'Tools'],
  },
  {
    title: 'Heroku',
    competency: 4,
    category: ['Cloud', 'Tools'],
  },
  {
    title: 'Javascript',
    competency: 5,
    category: ['UI', 'Web Development', 'Languages', 'Javascript', 'Backend'],
  },
  {
    title: 'TypeScript',
    competency: 5,
    category: ['UI', 'Web Development', 'Languages', 'Javascript', 'Backend'],
  },
  {
    title: 'Node.JS',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React.JS',
    competency: 5,
    category: ['UI', 'Web Development', 'Javascript'],
  },
  {
    title: 'Next.JS',
    competency: 4,
    category: ['UI', 'Web Development', 'Javascript'],
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
  },
  {
    title: 'Dynamo DB',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'ElasticSearch',
    competency: 4,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'PostgreSQL/SQLite3/Redshift',
    competency: 4,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Redis',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Express.JS',
    competency: 5,
    category: ['Web Development', 'Javascript'],
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
    title: 'Ruby on Rails',
    competency: 3,
    category: ['Web Development', 'Languages'],
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
  },
  {
    title: 'gRPC',
    competency: 3,
    category: ['Web Development', 'API'],
  },
  {
    title: 'SOAP',
    competency: 4,
    category: ['Web Development', 'API'],
  },
  {
    title: 'GraphQL',
    competency: 4,
    category: ['Web Development', 'API'],
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
    category: ["Software Architecture"]
},
{
    title: "Microservices Architecture",
    competency: 4,
    category: ["Software Architecture"]
},
{
   title:"Event-Driven Architecture",
    competency:4,
    category:["Software Architecture"] 
 } ,
 { 
    title:"Monolithic Architecture ", 
     competency: 4, 
     category:["Software Architecture"] 
  },
  { 
    title:"SOA Architecture ", 
     competency: 4, 
     category:["Software Architecture"] 
  },
  { 
    title:"MutiTier Architecture N-Tier ", 
     competency: 2, 
     category:["Software Architecture"] 
  }
].map((skill) => ({ ...skill, category: skill.category.sort() }));
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
