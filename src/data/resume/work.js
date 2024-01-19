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
    name: "TV2 Norge AS",
    position: "Cloud Solution Architect",
    url: "https://tv2.no",
    startDate: "2022-08-01",
    summary: `As the Solution Architect for Enklere Avikkling, I am at the forefront of a hybrid project that leverages AWS Cloud and on-premise resources with an emphasis on implementing open-source technologies. This initiative aims to enhance sports and news production applications.The system has been designed from scratch under my strategic direction, using TypeScript for backend architecture and Next.js for frontend tasks. To manage communication between these layers, we use WebSockets, TCP, and REST APIs via Socket-IO. Our approach pivots around the integration of open-source technologies in TV production applications - a pioneering direction that I am currently leading within our team.In executing this vision, I ensure our video player orchestrator is hosted on AWS ECS while vital production tools are maintained on reliable on-premise servers. To promote agility and efficiency in our setup, we adhere to DevOps strategies within a stream-aligned framework; here Terraform serves as our Infrastructure as Code (IaC) tool paired with Github Actions managing build processes; all supported by git ops' pull-based strategy for deployments.`,
    highlights: [
      "Working closely with the domain architect  for architecting the application.",
      "Spearheaded the migration of on-premise systems and applications to AWS cloud platform ensuring seamless transition and efficient utilization of resources.",
      "Lead a team in designing and implementing the overall architecture of application using AWS Cloud Formation, S3 buckets, EC2 instances, Lambda functions etc., focusing on high-performance optimization.",
      "Utilizing Free and Open-Source Software (FOSS) architecture where code can be freely accessed, reused, and improved by anyone, facilitating collaboration and leading to more efficient and innovative software solutions.",
      "Employed Serverless architecture where applicable leading to cost efficiency and enhanced scalability for the organization.",
      "Managing security protocols within the cloud space through IAM roles policies ensuring restricted access at all levels.",
      "Utilizing DevOps principles for continuous integration/continuous deployment (CI/CD) with Terraform as our IaC tool & Github Actions for building processes; promoted agile development practice.",
      "Performing regular system audits to detect any weaknesses or inefficiencies within our infrastructure setup; monitored application performance using native AWS tools like CloudWatch & X-Ray.",
      "Re-architected engineering hiring and onboarding processes. Helping the developers in the team by advising them in every phase whenever its required.",
      "Pitched, designed, developed, deployed, and maintained TV2 productions landscape.",
      "Analyzing new AWS features and constantly upgrading the product to industry needs.",
      "Typescript/Next JS for Full stack development.",
    ],
  },
  {
    name: "DNB Norge AS",
    position: "Tech Lead",
    url: "https://www.dnb.no/",
    startDate: "2021-09-01",
    endDate: "2022-07-01",
    summary:
      "Tech Lead for migrating liquidity to AWS . The project is built using serverless architecture. Terraform is used for IaC , Gitlab CI is used as build tool and git ops pull based strategy for deployments.",
    highlights: [
      "Worked closely with team members and other stakeholders to architect an application that would function seamlessly in the new serverless environment.",
      "Instrumental in blueprinting the cloud architecture by skillfully harnessing AWS services such as ECS for container management and Lambda for serverless computing. This critical involvement augmented system availability and robustness, ensuring fault tolerance.",
      "Led frontend development using React JS within a monolithic architecture to ensure an unbroken user experience despite the backend changes.",
      "Designed backend serverless solutions using AWS Lambdas in conjunction with API Gateway and DynamoDB services.",
      "Managed the migration of legacy microservices to ECS while preserving adherence to Serverless architecture principles throughout the project.",
    ],
  },
  {
    name: "Vimond Media Solutions AS",
    position: "Senior Software Engineer & Architect",
    url: "https://www.vimond.com/",
    startDate: "2017-02-01",
    endDate: "2022-08-31",
    summary:
      'As the Senior Engineer and Architect for the Via Live product, I was pivotal in its development using cloud-native architecture on AWS and Azure platforms. Initially constructed using a microservice architecture with .Net core, we transitioned to a serverless model utilizing AWS Lambda, AWS Step Functions and AppSync. Frontend development followed a micro frontend strategy. We upheld a stream-aligned team setup leveraging DevOps principles, Terraform for Infrastructure as Code (IaC), CircleCI as our build tool, and git ops pull-based strategy for deployments.The prodcut is used by some large key players like <a href=" https://olympics.com/en/work-with-us">Olympicss</a> and <a href="https://www.tv2.no/">TV2 Norge AS</a> in streaming and distrubtion for their live events.',
    highlights: [
      "Led the product development using .Net Core targeted for Azure deployment. Later, I successfully directed a critical technology transition to AWS, migrating functionalities to leverage AWS Lambda and Step Functions.",
      "Designed micro-service architecture around: data collection, data integrity, feature engineering, research, strategy, backtesting, deployment, and reporting.",
      "Set and communicated team priorities that supported the broader organization's goals. Aligned strategy, processes, and decision-making across teams.",
      "Set clear expectations with individuals based on their level and role and aligned them to the broader organization's goals. Met regularly with individuals to discuss performance and development, and provided feedback and coaching.",
      "Developed the long-term technical vision and roadmap within, and often beyond, the scope of my teams. Evolved the roadmap to meet anticipated future requirements and infrastructure needs.",
      "Analyzing new AWS features and constantly upgrading the product to industry needs.",
      "Helping the developers in the team by advising them in every phase whenever its required.",
      "Developed the backend using .net core and Java 11.Frontend is developed using React.js. Migrating the backend from microservice to serverless(Aws Lambda) architecture written using Node.js framework.",
    ],
  },
  {
    client: "Tata Consultancy Services",
    name: "Telenor Norge AS",
    position: "OSS Migration Architect & Developer",
    url: "http://telenor.no",
    startDate: "2015-01-01",
    endDate: "2016-11-01",
    summary: `Aim of this project is to consolidate the inventory that is spread across various
    systems to a single system. The main activities involved are customizing the
    Comptel COTS products like Comptel inventory, integrating them in the Telenor’s
    Value chain and migrating the data from legacy mainframe.`,
    highlights: [
      "Used Comptel Inventory as the base framework for UI to achieve (MVC) Model View Controller.",
      "Responsible for data Migration from legacy systems to Comptel Products Responsible for DB level mapping & ETL operations.",
      "Developed Persistence layer using Hibernate.",
      "Publsihed Soap & Rest Services for retrieving the Network inventory data to the assurance and building systems",
      "With Good understanding on Business requirements designed and developed Use case Diagrams and Sequence Diagrams using Enterprise Architect.",
    ],
  },
  {
    client: "Tata Consultancy Services",
    name: "Telenor Norge AS",
    position: "Metro Middleware Platform Developer",
    url: "http://telenor.no",
    startDate: "2011-01-01",
    endDate: "2014-12-31",
    summary: `Metro is a middleware platform developed by Telenor for Fixed Line Services.
    Typical services include Project Enrollment, Design and Implementation, Testing,
    Application Deployment and Production activities.`,
    highlights: [
      "Used Comptel Inventory as the base framework for UI to achieve (MVC) Model View Controller.",
      "Responsible for data Migration from legacy systems to Comptel Products Responsible for DB level mapping & ETL operations.",
      "Developed Persistence layer using Hibernate.",
      "Publsihed Soap & Rest Services for retrieving the Network inventory data to the assurance and building systems",
      "With Good understanding on Business requirements designed and developed Use case Diagrams and Sequence Diagrams using Enterprise Architect.",
      "Devloped User Interface using Servlets, JSP’s, JSTL and business driven reusable custom tag libraries.",
      "Developed Presentation layer JDBC, Hibernate, Spring, JPA to persist and to make the business transactions durable.",
      "Developed Service Layer using JMS, EJB, Spring IOC, Spring AOP, and Web Services under the guidelines of Service Oriented Architecture.",
      "Developed Asynchronous messaging component using JMS Point-to-point messaging domain and published it as MDB.",
      "Leveraged the IOC concepts of Spring framework to integrate Struts based user interface with Hibernate based persistence interface.",
    ],
  },
  {
    client: "Tata Consultancy Services",
    name: "Bank Of America",
    position: "Financial Federated Database",
    url: "https://www.bankofamerica.com",
    startDate: "2008-08-12",
    endDate: "20140-12-31",
    summary: `FFD is an application in Bank of America which used to handle the financial
    transaction of the bank.`,
    highlights: [
      "Used Comptel Inventory as the base framework for UI to achieve (MVC) Model View Controller.",
      "Responsible for data Migration from legacy systems to Comptel Products Responsible for DB level mapping & ETL operations.",
      "Developed Persistence layer using Hibernate.",
      "Publsihed Soap & Rest Services for retrieving the Network inventory data to the assurance and building systems",
      "With Good understanding on Business requirements designed and developed Use case Diagrams and Sequence Diagrams using Enterprise Architect.",
      "Devloped User Interface using Servlets, JSP’s, JSTL and business driven reusable custom tag libraries.",
      "Developed Presentation layer JDBC, Hibernate, Spring, JPA to persist and to make the business transactions durable.",
      "Developed Service Layer using JMS, EJB, Spring IOC, Spring AOP, and Web Services under the guidelines of Service Oriented Architecture.",
      "Developed Asynchronous messaging component using JMS Point-to-point messaging domain and published it as MDB.",
      "Leveraged the IOC concepts of Spring framework to integrate Struts based user interface with Hibernate based persistence interface.",
      "Software Development is driven by inverted V model designed Use case diagrams, Class diagrams, and Sequence diagrams using UML and developed using Java JEE components.",
      "Developed and implemented 3-Tier Architecture using Struts in UI, Spring and EJB for server side and Hibernate for communicating with the Database.",
      "Developed reusable Custom tag libraries for Mortgage module and published them to be consumed.",
      "Developed presentation views in JSP, Struts Tag libs and Struts Tiles for consistent presentation for FFD Applications.",
      "Developed the UI validation framework using custom validations built on top of Struts validation framework.",
      "Implemented Dependency Injection (IOC) feature of spring framework to inject beans into User Interface and AOP for Logging.",
    ],
  },
];

export default work;
