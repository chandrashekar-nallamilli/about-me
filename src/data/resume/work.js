/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'TV2 Norge AS',
    position: 'Cloud Solution Architect',
    url: 'https://tv2.no',
    startDate: '2022-08-01',
    summary: `As the Solution Architect for Enklere Avikkling, I'm leading a hybrid project leveraging AWS Cloud and on-premise resources to improve sports and news productions. The system, developed from scratch, utilizes TypeScript in backend development and Next.js for frontend tasks. Communication between these layers is managed through WebSocket's, TCP and Rest APIs with Socket-IO. Our team has taken the challenge of implementing open-source technologies in TV production applications. The video player and orchestrator are hosted on AWS ECS while core production tools reside on on-premise servers. 
    We utilize a stream-aligned setup with DevOps strategies, using Terraform as our Infrastructure as Code (IaC) tool, Github Actions for building processes, supported by git ops' pull-based strategy for deployments.`,
    highlights: [
      ' Working closely with the domain lead and chief technical architect for architecting the application',
      'Utilizing Free and Open-Source Software (FOSS) architecture where code can be freely accessed, reused, and improved by anyone, facilitating collaboration and leading to more efficient and innovative software solutions.',
      'Re-architected engineering hiring and onboarding processes. Helping the developers in the team by advising them in every phase whenever its required.',
      'Pitched, designed, developed, deployed, and maintained TV2 productions landscape.',
      'Analyzing new AWS features and constantly upgrading the product to industry needs.',
      'Duly understanding the knowledge from both management and customer and convert them into technical solutions.',
      'JavaScript/Typescript Full stack development and Frontend is developed using Next.js.',
    ],
  },
  {
    name: 'DNB Norge AS',
    position: 'Tech Lead',
    url: 'https://www.dnb.no/',
    startDate: '2021-09-01',
    endDate: '2022-07-01',
    summary: 'Tech Lead for migrating liquidity to AWS . The project is built using serverless architecture. Terraform is used for IaC , Gitlab CI is used as build tool and git ops pull based strategy for deployments.',
    highlights: [
      'Worked closely with the team lead and chief technical architect for architecting the application.',
      'Frontend is developed using React JS using monolith architecture',
      'Backend is serverless achieved using AWS lambdas and API gateway and Dynamo DB.',
      'Some legacy microservices are moved to ECS to maintain the Serverless architecture goal of the project.',
    ],
  },
  {
    name: 'Vimond Media Solutions AS',
    position: 'Senior Software Engineer & Architect',
    url: 'https://www.vimond.com/',
    startDate: '2017-02-01',
    endDate: '2022-08-31',
    summary: 'Senior Engineer for the Via Live product. The product is built using cloud native architecture on AWS, Azure using .Net core. The product is developed usibng microservice architecture intitally and migrated to serverless architecture using AWS lambda, AWS Step functions and AppSync(GraphQL serverless). The front end is developed using micro frontend strategy. Working in stream aligned team setup using devops strategy. Terraform is used for IaC , Circle CI is used as build tool and git ops pull based strategy for deployments.The prodcut is used by some larege key players like <a href=" https://olympics.com/en/work-with-us">Olympicss</a> and <a href="https://www.tv2.no/">TV2 Norge AS</a> in streaming and distrubtion for their live events.',
    highlights: [
      'Designed micro-service architecture around: data collection, data integrity, feature engineering, research, strategy, backtesting, deployment, and reporting.',
      "Set and communicated team priorities that supported the broader organization's goals. Aligned strategy, processes, and decision-making across teams.",
      "Set clear expectations with individuals based on their level and role and aligned them to the broader organization's goals. Met regularly with individuals to discuss performance and development, and provided feedback and coaching.",
      'Developed the long-term technical vision and roadmap within, and often beyond, the scope of my teams. Evolved the roadmap to meet anticipated future requirements and infrastructure needs.',
      'Analyzing new AWS features and constantly upgrading the product to industry needs.',
      'Helping the developers in the team by advising them in every phase whenever its required.',
      'Developed the backend using .net core and Java 11.Frontend is developed using React.js. Migrating the backend from microservice to serverless(Aws Lambda) architecture written using Node.js framework.',
    ],
  },
  {
    client: 'Tata Consultancy Services',
    name: 'Telenor Norge AS',
    position: 'OSS Migration Architect & Developer',
    url: 'http://telenor.no',
    startDate: '2015-01-01',
    endDate: '2016-11-01',
    summary: `Aim of this project is to consolidate the inventory that is spread across various
    systems to a single system. The main activities involved are customizing the
    Comptel COTS products like Comptel inventory, integrating them in the Telenor’s
    Value chain and migrating the data from legacy mainframe.`,
    highlights: [
      'Used Comptel Inventory as the base framework for UI to achieve (MVC) Model View Controller.',
      'Responsible for data Migration from legacy systems to Comptel Products Responsible for DB level mapping & ETL operations.',
      'Developed Persistence layer using Hibernate.',
      'Publsihed Soap & Rest Services for retrieving the Network inventory data to the assurance and building systems',
      'With Good understanding on Business requirements designed and developed Use case Diagrams and Sequence Diagrams using Enterprise Architect.',
    ],
  },
  {
    client: 'Tata Consultancy Services',
    name: 'Telenor Norge AS',
    position: 'Metro Middleware Platform Developer',
    url: 'http://telenor.no',
    startDate: '2011-01-01',
    endDate: '2014-12-31',
    summary: `Metro is a middleware platform developed by Telenor for Fixed Line Services.
    Typical services include Project Enrollment, Design and Implementation, Testing,
    Application Deployment and Production activities.`,
    highlights: [
      'Used Comptel Inventory as the base framework for UI to achieve (MVC) Model View Controller.',
      'Responsible for data Migration from legacy systems to Comptel Products Responsible for DB level mapping & ETL operations.',
      'Developed Persistence layer using Hibernate.',
      'Publsihed Soap & Rest Services for retrieving the Network inventory data to the assurance and building systems',
      'With Good understanding on Business requirements designed and developed Use case Diagrams and Sequence Diagrams using Enterprise Architect.',
      'Devloped User Interface using Servlets, JSP’s, JSTL and business driven reusable custom tag libraries.',
      'Developed Presentation layer JDBC, Hibernate, Spring, JPA to persist and to make the business transactions durable.',
      'Developed Service Layer using JMS, EJB, Spring IOC, Spring AOP, and Web Services under the guidelines of Service Oriented Architecture.',
      'Developed Asynchronous messaging component using JMS Point-to-point messaging domain and published it as MDB.',
      'Leveraged the IOC concepts of Spring framework to integrate Struts based user interface with Hibernate based persistence interface.',
    ],
  },
  {
    client: 'Tata Consultancy Services',
    name: 'Bank Of America',
    position: 'Financial Federated Database',
    url: 'https://www.bankofamerica.com',
    startDate: '2008-08-12',
    endDate: '20140-12-31',
    summary: `FFD is an application in Bank of America which used to handle the financial
    transaction of the bank.`,
    highlights: [
      'Used Comptel Inventory as the base framework for UI to achieve (MVC) Model View Controller.',
      'Responsible for data Migration from legacy systems to Comptel Products Responsible for DB level mapping & ETL operations.',
      'Developed Persistence layer using Hibernate.',
      'Publsihed Soap & Rest Services for retrieving the Network inventory data to the assurance and building systems',
      'With Good understanding on Business requirements designed and developed Use case Diagrams and Sequence Diagrams using Enterprise Architect.',
      'Devloped User Interface using Servlets, JSP’s, JSTL and business driven reusable custom tag libraries.',
      'Developed Presentation layer JDBC, Hibernate, Spring, JPA to persist and to make the business transactions durable.',
      'Developed Service Layer using JMS, EJB, Spring IOC, Spring AOP, and Web Services under the guidelines of Service Oriented Architecture.',
      'Developed Asynchronous messaging component using JMS Point-to-point messaging domain and published it as MDB.',
      'Leveraged the IOC concepts of Spring framework to integrate Struts based user interface with Hibernate based persistence interface.',
      'Software Development is driven by inverted V model designed Use case diagrams, Class diagrams, and Sequence diagrams using UML and developed using Java JEE components.',
      'Developed and implemented 3-Tier Architecture using Struts in UI, Spring and EJB for server side and Hibernate for communicating with the Database.',
      'Developed reusable Custom tag libraries for Mortgage module and published them to be consumed.',
      'Developed presentation views in JSP, Struts Tag libs and Struts Tiles for consistent presentation for FFD Applications.',
      'Developed the UI validation framework using custom validations built on top of Struts validation framework.',
      'Implemented Dependency Injection (IOC) feature of spring framework to inject beans into User Interface and AOP for Logging.',
    ],
  },
];

export default work;
