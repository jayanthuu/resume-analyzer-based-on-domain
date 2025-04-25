import { Domain } from '../types';

export const domains: Domain[] = [
  {
    id: "ai-ml-developer",
    title: "AI/ML Developer",
    description: "Develops algorithms and models that enable machines to learn from data and make predictions or decisions.",
    color: "#6d28d9",
    keySkills: [
      "Machine Learning", 
      "Python", 
      "TensorFlow/PyTorch", 
      "Deep Learning", 
      "Data Analysis", 
      "Neural Networks", 
      "Natural Language Processing"
    ],
    skillLevels: [
      { name: "Python", level: 5 },
      { name: "Machine Learning Algorithms", level: 5 },
      { name: "TensorFlow/PyTorch", level: 4 },
      { name: "Deep Learning", level: 4 },
      { name: "Mathematics & Statistics", level: 4 },
      { name: "Data Preprocessing", level: 3 }
    ],
    responsibilities: [
      "Design and implement machine learning models to solve complex problems",
      "Analyze large datasets and extract meaningful insights",
      "Research and implement state-of-the-art algorithms and techniques",
      "Optimize models for performance and scalability",
      "Collaborate with cross-functional teams to integrate ML solutions",
      "Stay updated with the latest advancements in AI/ML"
    ],
    salary: "$100,000 - $180,000",
    marketDemand: "High",
    industries: ["Tech", "Healthcare", "Finance", "E-commerce", "Automotive"],
    careerPath: [
      {
        title: "Junior ML Engineer",
        description: "Focus on implementing established models and algorithms under supervision.",
        yearsExperience: "0-2 years"
      },
      {
        title: "ML Engineer",
        description: "Design and develop machine learning models independently.",
        yearsExperience: "2-5 years"
      },
      {
        title: "Senior ML Engineer",
        description: "Lead the development of complex ML systems and mentor junior engineers.",
        yearsExperience: "5-8 years"
      },
      {
        title: "ML Architect",
        description: "Design enterprise-wide ML strategies and solutions.",
        yearsExperience: "8+ years"
      }
    ],
    certifications: [
      {
        name: "TensorFlow Developer Certificate",
        description: "Validates your skills in using TensorFlow to implement deep learning models.",
        difficulty: "Intermediate",
        url: "https://www.tensorflow.org/certificate"
      },
      {
        name: "AWS Certified Machine Learning – Specialty",
        description: "Validates expertise in designing, implementing, and maintaining ML solutions on AWS.",
        difficulty: "Advanced",
        url: "https://aws.amazon.com/certification/certified-machine-learning-specialty/"
      },
      {
        name: "Google Professional Machine Learning Engineer",
        description: "Validates your ability to design, build, and productionize ML models on Google Cloud.",
        difficulty: "Advanced",
        url: "https://cloud.google.com/certification/machine-learning-engineer"
      }
    ],
    resumeTips: [
      {
        title: "Showcase Projects",
        description: "Include detailed descriptions of ML projects you've worked on, highlighting the problem, approach, and results achieved."
      },
      {
        title: "Quantify Impact",
        description: "Mention specific metrics that demonstrate the effectiveness of your models (e.g., accuracy, precision, recall)."
      },
      {
        title: "Highlight Technical Skills",
        description: "List relevant programming languages, frameworks, and tools you're proficient in (Python, TensorFlow, PyTorch, etc.)."
      },
      {
        title: "Emphasize Domain Knowledge",
        description: "If you have expertise in a specific industry or domain (healthcare, finance, etc.), make sure to highlight it."
      }
    ]
  },
  
  {
    id: "software-engineer",
    title: "Software Engineer",
    description: "Designs, develops, and maintains software systems and applications using programming languages and software development principles.",
    color: "#2563eb",
    keySkills: [
      "Programming Languages", 
      "Data Structures & Algorithms", 
      "Software Architecture", 
      "Version Control", 
      "Testing", 
      "Problem Solving"
    ],
    skillLevels: [
      { name: "Programming Languages", level: 5 },
      { name: "Problem Solving", level: 5 },
      { name: "Data Structures & Algorithms", level: 4 },
      { name: "Software Design Patterns", level: 4 },
      { name: "Testing & Debugging", level: 4 },
      { name: "Version Control (Git)", level: 3 }
    ],
    responsibilities: [
      "Write clean, efficient, and maintainable code",
      "Design software architecture and implement features",
      "Collaborate with cross-functional teams to define requirements",
      "Test and debug software to ensure quality",
      "Participate in code reviews and provide constructive feedback",
      "Stay updated with emerging technologies and best practices"
    ],
    salary: "$90,000 - $160,000",
    marketDemand: "Very High",
    industries: ["Tech", "Finance", "Healthcare", "Manufacturing", "Entertainment"],
    careerPath: [
      {
        title: "Junior Software Engineer",
        description: "Focus on learning fundamentals and contributing to code under supervision.",
        yearsExperience: "0-2 years"
      },
      {
        title: "Software Engineer",
        description: "Independently implement features and contribute to design decisions.",
        yearsExperience: "2-5 years"
      },
      {
        title: "Senior Software Engineer",
        description: "Lead complex projects and mentor junior engineers.",
        yearsExperience: "5-8 years"
      },
      {
        title: "Tech Lead / Principal Engineer",
        description: "Provide technical vision and influence architectural decisions.",
        yearsExperience: "8+ years"
      }
    ],
    certifications: [
      {
        name: "AWS Certified Developer",
        description: "Validates technical expertise in developing and maintaining AWS-based applications.",
        difficulty: "Intermediate",
        url: "https://aws.amazon.com/certification/certified-developer-associate/"
      },
      {
        name: "Oracle Certified Professional: Java SE Programmer",
        description: "Validates your knowledge of Java programming language fundamentals.",
        difficulty: "Intermediate",
        url: "https://education.oracle.com/java/java-se/product_267"
      },
      {
        name: "Microsoft Certified: Azure Developer Associate",
        description: "Validates skills in developing solutions on Microsoft Azure.",
        difficulty: "Intermediate",
        url: "https://learn.microsoft.com/en-us/certifications/azure-developer/"
      }
    ],
    resumeTips: [
      {
        title: "Highlight Technical Skills",
        description: "List programming languages, frameworks, and tools you're proficient in, with emphasis on those most relevant to the job."
      },
      {
        title: "Showcase Projects",
        description: "Include relevant projects with details on your role, technologies used, and business impact achieved."
      },
      {
        title: "Demonstrate Problem-Solving",
        description: "Describe complex problems you've solved and the approaches you took to solve them."
      },
      {
        title: "Include Metrics",
        description: "Quantify your achievements with metrics such as performance improvements, time saved, or cost reductions."
      }
    ]
  },
  
  {
    id: "web-developer",
    title: "Web Developer",
    description: "Creates and maintains websites and web applications, focusing on aspects like user interface, functionality, and performance.",
    color: "#0ea5e9",
    keySkills: [
      "HTML/CSS", 
      "JavaScript", 
      "Frontend Frameworks", 
      "Backend Development", 
      "Responsive Design", 
      "Web Performance"
    ],
    skillLevels: [
      { name: "HTML/CSS", level: 5 },
      { name: "JavaScript", level: 5 },
      { name: "Frontend Frameworks", level: 4 },
      { name: "Responsive Design", level: 4 },
      { name: "Backend Development", level: 3 },
      { name: "Web Performance", level: 3 }
    ],
    responsibilities: [
      "Develop and maintain websites and web applications",
      "Implement responsive design and ensure cross-browser compatibility",
      "Optimize applications for maximum speed and scalability",
      "Collaborate with designers to implement visual elements",
      "Create and maintain documentation for web applications",
      "Stay updated with the latest web development trends and technologies"
    ],
    salary: "$70,000 - $140,000",
    marketDemand: "Very High",
    industries: ["Tech", "E-commerce", "Media", "Education", "Marketing"],
    careerPath: [
      {
        title: "Junior Web Developer",
        description: "Focus on building components and features under guidance.",
        yearsExperience: "0-2 years"
      },
      {
        title: "Web Developer",
        description: "Independently build and maintain websites and web applications.",
        yearsExperience: "2-4 years"
      },
      {
        title: "Senior Web Developer",
        description: "Lead complex web projects and mentor junior developers.",
        yearsExperience: "4-7 years"
      },
      {
        title: "Lead Web Developer / Architect",
        description: "Define technical strategy and architect large-scale web applications.",
        yearsExperience: "7+ years"
      }
    ],
    certifications: [
      {
        name: "Meta Front-End Developer Professional Certificate",
        description: "Comprehensive training in front-end development and React.",
        difficulty: "Beginner to Intermediate",
        url: "https://www.coursera.org/professional-certificates/meta-front-end-developer"
      },
      {
        name: "AWS Certified Developer",
        description: "Validates your expertise in developing and maintaining applications on AWS.",
        difficulty: "Intermediate",
        url: "https://aws.amazon.com/certification/certified-developer-associate/"
      },
      {
        name: "Google UX Design Professional Certificate",
        description: "Learn the foundations of UX design and create a professional portfolio.",
        difficulty: "Beginner to Intermediate",
        url: "https://www.coursera.org/professional-certificates/google-ux-design"
      }
    ],
    resumeTips: [
      {
        title: "Showcase Your Portfolio",
        description: "Include a link to your portfolio showcasing websites or applications you've built."
      },
      {
        title: "List Technical Skills",
        description: "Highlight your proficiency with specific technologies, frameworks, and tools (React, Vue, Angular, Node.js, etc.)."
      },
      {
        title: "Demonstrate Problem-Solving",
        description: "Describe complex web development challenges you've overcome and the solutions you implemented."
      },
      {
        title: "Include Performance Metrics",
        description: "Mention specific improvements you've made, such as increased page load speed or better SEO rankings."
      }
    ]
  },
  
  {
    id: "business-analyst",
    title: "Business Analyst",
    description: "Identifies business needs and determines solutions to business problems by analyzing data and processes.",
    color: "#0284c7",
    keySkills: [
      "Requirements Analysis", 
      "Data Analysis", 
      "Process Improvement", 
      "Documentation", 
      "Stakeholder Management", 
      "Problem Solving"
    ],
    skillLevels: [
      { name: "Requirements Gathering", level: 5 },
      { name: "Data Analysis", level: 4 },
      { name: "Process Modeling", level: 4 },
      { name: "Communication", level: 5 },
      { name: "Problem Solving", level: 4 },
      { name: "Business Process Improvement", level: 3 }
    ],
    responsibilities: [
      "Gather and document business requirements from stakeholders",
      "Analyze business processes and identify opportunities for improvement",
      "Create detailed functional specifications for developers",
      "Facilitate communication between business stakeholders and technical teams",
      "Test and validate solutions against business requirements",
      "Present findings and recommendations to stakeholders"
    ],
    salary: "$70,000 - $130,000",
    marketDemand: "High",
    industries: ["Finance", "Insurance", "Healthcare", "Retail", "Manufacturing"],
    careerPath: [
      {
        title: "Junior Business Analyst",
        description: "Focus on requirements gathering and documentation under supervision.",
        yearsExperience: "0-2 years"
      },
      {
        title: "Business Analyst",
        description: "Independently manage requirements for medium-sized projects.",
        yearsExperience: "2-5 years"
      },
      {
        title: "Senior Business Analyst",
        description: "Lead analysis for complex projects and mentor junior analysts.",
        yearsExperience: "5-8 years"
      },
      {
        title: "Lead Business Analyst / Business Architect",
        description: "Define business strategy and oversee enterprise-wide analysis initiatives.",
        yearsExperience: "8+ years"
      }
    ],
    certifications: [
      {
        name: "IIBA Certified Business Analysis Professional (CBAP)",
        description: "Recognizes experienced business analysts who have demonstrated knowledge and expertise in the field.",
        difficulty: "Advanced",
        url: "https://www.iiba.org/business-analysis-certifications/cbap/"
      },
      {
        name: "PMI Professional in Business Analysis (PMI-PBA)",
        description: "Validates expertise in business analysis within the project management context.",
        difficulty: "Intermediate",
        url: "https://www.pmi.org/certifications/business-analysis-pba"
      },
      {
        name: "IREB Certified Professional for Requirements Engineering",
        description: "Provides a standardized education in requirements engineering.",
        difficulty: "Intermediate",
        url: "https://www.ireb.org/en/cpre/"
      }
    ],
    resumeTips: [
      {
        title: "Highlight Project Impact",
        description: "Describe how your analysis contributed to business outcomes, such as cost savings or process improvements."
      },
      {
        title: "Showcase Technical Skills",
        description: "Include experience with relevant tools and methodologies (SQL, Excel, BPMN, Agile, etc.)."
      },
      {
        title: "Demonstrate Communication Skills",
        description: "Highlight experience in stakeholder management and translating business needs into technical requirements."
      },
      {
        title: "Include Problem-Solving Examples",
        description: "Describe complex business problems you've analyzed and the solutions you recommended."
      }
    ]
  },
  
  {
    id: "data-scientist",
    title: "Data Scientist",
    description: "Analyzes complex data to help organizations make better decisions through statistical analysis, machine learning, and data visualization.",
    color: "#7c3aed",
    keySkills: [
      "Statistics", 
      "Machine Learning", 
      "Python/R", 
      "Data Visualization", 
      "SQL", 
      "Big Data Technologies"
    ],
    skillLevels: [
      { name: "Statistics", level: 5 },
      { name: "Python/R", level: 5 },
      { name: "Machine Learning", level: 4 },
      { name: "Data Visualization", level: 4 },
      { name: "SQL", level: 4 },
      { name: "Big Data Technologies", level: 3 }
    ],
    responsibilities: [
      "Collect, analyze, and interpret large datasets",
      "Develop machine learning models to predict trends and outcomes",
      "Create data visualizations to communicate findings",
      "Collaborate with stakeholders to identify business questions",
      "Develop and implement data collection procedures",
      "Present insights and recommendations to non-technical stakeholders"
    ],
    salary: "$95,000 - $170,000",
    marketDemand: "Very High",
    industries: ["Tech", "Finance", "Healthcare", "Retail", "Manufacturing"],
    careerPath: [
      {
        title: "Junior Data Scientist",
        description: "Focus on data analysis and model implementation under guidance.",
        yearsExperience: "0-2 years"
      },
      {
        title: "Data Scientist",
        description: "Independently develop models and derive insights from data.",
        yearsExperience: "2-5 years"
      },
      {
        title: "Senior Data Scientist",
        description: "Lead complex data science projects and mentor junior team members.",
        yearsExperience: "5-8 years"
      },
      {
        title: "Lead Data Scientist / Director of Data Science",
        description: "Shape data strategy and oversee multiple data science initiatives.",
        yearsExperience: "8+ years"
      }
    ],
    certifications: [
      {
        name: "IBM Data Science Professional Certificate",
        description: "Covers data science methodology, programming, data analysis, and machine learning.",
        difficulty: "Beginner to Intermediate",
        url: "https://www.coursera.org/professional-certificates/ibm-data-science"
      },
      {
        name: "Microsoft Certified: Azure Data Scientist Associate",
        description: "Validates skills in applying data science and machine learning on Azure.",
        difficulty: "Intermediate",
        url: "https://learn.microsoft.com/en-us/certifications/azure-data-scientist/"
      },
      {
        name: "Google Professional Data Engineer",
        description: "Validates expertise in designing and building data processing systems on Google Cloud.",
        difficulty: "Advanced",
        url: "https://cloud.google.com/certification/data-engineer"
      }
    ],
    resumeTips: [
      {
        title: "Highlight Impact",
        description: "Quantify the business impact of your data science projects, such as revenue increase or cost savings."
      },
      {
        title: "Showcase Technical Skills",
        description: "List relevant programming languages, statistical techniques, and tools you're proficient in."
      },
      {
        title: "Include Domain Knowledge",
        description: "Highlight any specific industry expertise that complements your data science skills."
      },
      {
        title: "Describe Complex Projects",
        description: "Detail challenging data science problems you've solved, the approach taken, and the outcomes achieved."
      }
    ]
  },
  
  {
    id: "cybersecurity-analyst",
    title: "Cybersecurity Analyst",
    description: "Protects computer systems and networks from threats, vulnerabilities, and cyber attacks through monitoring, analyzing, and responding to security incidents.",
    color: "#06b6d4",
    keySkills: [
      "Network Security", 
      "Threat Detection", 
      "Security Tools", 
      "Vulnerability Assessment", 
      "Incident Response", 
      "Security Compliance"
    ],
    skillLevels: [
      { name: "Network Security", level: 5 },
      { name: "Threat Detection", level: 5 },
      { name: "Security Tools", level: 4 },
      { name: "Vulnerability Assessment", level: 4 },
      { name: "Operating Systems Security", level: 4 },
      { name: "Incident Response", level: 3 }
    ],
    responsibilities: [
      "Monitor systems for security breaches and investigate violations",
      "Perform vulnerability assessments and penetration testing",
      "Implement security measures and controls",
      "Develop security policies and procedures",
      "Respond to security incidents and provide remediation recommendations",
      "Stay updated with emerging threats and security trends"
    ],
    salary: "$85,000 - $160,000",
    marketDemand: "Very High",
    industries: ["Finance", "Healthcare", "Government", "Defense", "Tech"],
    careerPath: [
      {
        title: "Jr. Security Analyst",
        description: "Focus on monitoring security tools and basic incident handling.",
        yearsExperience: "0-2 years"
      },
      {
        title: "Cybersecurity Analyst",
        description: "Independently handle security incidents and implement controls.",
        yearsExperience: "2-5 years"
      },
      {
        title: "Senior Security Analyst",
        description: "Lead complex security initiatives and mentor junior analysts.",
        yearsExperience: "5-8 years"
      },
      {
        title: "Security Architect / CISO",
        description: "Define security strategy and oversee enterprise-wide security programs.",
        yearsExperience: "8+ years"
      }
    ],
    certifications: [
      {
        name: "CompTIA Security+",
        description: "Covers network security, compliance, threats, vulnerabilities, and security architecture.",
        difficulty: "Beginner to Intermediate",
        url: "https://www.comptia.org/certifications/security"
      },
      {
        name: "Certified Information Systems Security Professional (CISSP)",
        description: "Validates expertise across various domains of information security.",
        difficulty: "Advanced",
        url: "https://www.isc2.org/Certifications/CISSP"
      },
      {
        name: "Certified Ethical Hacker (CEH)",
        description: "Focuses on ethical hacking methodology and techniques.",
        difficulty: "Intermediate",
        url: "https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh/"
      }
    ],
    resumeTips: [
      {
        title: "Highlight Security Tools",
        description: "List specific security tools and technologies you're experienced with (SIEM, IDS/IPS, etc.)."
      },
      {
        title: "Showcase Incident Response",
        description: "Describe your experience handling security incidents and the resolution processes you followed."
      },
      {
        title: "Include Compliance Knowledge",
        description: "Mention familiarity with relevant regulations and frameworks (GDPR, HIPAA, ISO 27001, etc.)."
      },
      {
        title: "Demonstrate Technical Skills",
        description: "Highlight technical skills relevant to cybersecurity (network protocols, operating systems, programming)."
      }
    ]
  },
  
  {
    id: "cloud-engineer",
    title: "Cloud Engineer",
    description: "Designs, implements, and manages cloud-based solutions and infrastructure to meet organizational needs and optimize performance.",
    color: "#3b82f6",
    keySkills: [
      "Cloud Platforms (AWS/Azure/GCP)", 
      "Infrastructure as Code", 
      "Containerization", 
      "Security", 
      "Networking", 
      "Automation"
    ],
    skillLevels: [
      { name: "Cloud Platforms", level: 5 },
      { name: "Infrastructure as Code", level: 4 },
      { name: "Containerization", level: 4 },
      { name: "Cloud Security", level: 4 },
      { name: "Networking", level: 3 },
      { name: "Automation & Scripting", level: 4 }
    ],
    responsibilities: [
      "Design and implement cloud infrastructure and solutions",
      "Migrate applications and services to cloud environments",
      "Optimize cloud resources for performance, cost, and security",
      "Implement infrastructure as code for automated deployments",
      "Monitor cloud systems and troubleshoot issues",
      "Stay updated with new cloud services and best practices"
    ],
    salary: "$90,000 - $165,000",
    marketDemand: "Very High",
    industries: ["Tech", "Finance", "Healthcare", "Retail", "Media"],
    careerPath: [
      {
        title: "Junior Cloud Engineer",
        description: "Focus on building and managing basic cloud resources under guidance.",
        yearsExperience: "0-2 years"
      },
      {
        title: "Cloud Engineer",
        description: "Independently design and implement cloud solutions.",
        yearsExperience: "2-5 years"
      },
      {
        title: "Senior Cloud Engineer",
        description: "Lead complex cloud projects and architect enterprise solutions.",
        yearsExperience: "5-8 years"
      },
      {
        title: "Cloud Architect",
        description: "Define cloud strategy and oversee enterprise-wide cloud initiatives.",
        yearsExperience: "8+ years"
      }
    ],
    certifications: [
      {
        name: "AWS Certified Solutions Architect",
        description: "Validates expertise in designing and deploying systems on AWS.",
        difficulty: "Intermediate",
        url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/"
      },
      {
        name: "Microsoft Certified: Azure Administrator",
        description: "Validates skills in implementing, monitoring, and maintaining Azure resources.",
        difficulty: "Intermediate",
        url: "https://learn.microsoft.com/en-us/certifications/azure-administrator/"
      },
      {
        name: "Google Professional Cloud Architect",
        description: "Validates expertise in designing, developing, and managing solutions on Google Cloud.",
        difficulty: "Advanced",
        url: "https://cloud.google.com/certification/cloud-architect"
      }
    ],
    resumeTips: [
      {
        title: "Highlight Cloud Platforms",
        description: "Specify which cloud platforms you have experience with (AWS, Azure, GCP) and the services you've used."
      },
      {
        title: "Showcase Infrastructure as Code",
        description: "Highlight experience with IaC tools like Terraform, CloudFormation, or ARM templates."
      },
      {
        title: "Demonstrate Cost Optimization",
        description: "Mention any cost savings achieved through cloud optimization techniques."
      },
      {
        title: "Include Migration Experience",
        description: "Describe your experience migrating applications or services to the cloud."
      }
    ]
  },
  
  {
    id: "mobile-app-developer",
    title: "Mobile App Developer",
    description: "Creates applications for mobile devices, focusing on user experience, functionality, and performance across different platforms and operating systems.",
    color: "#10b981",
    keySkills: [
      "iOS/Android Development", 
      "Programming Languages", 
      "UI/UX Design", 
      "Cross-Platform Frameworks", 
      "API Integration", 
      "Performance Optimization"
    ],
    skillLevels: [
      { name: "Mobile Programming", level: 5 },
      { name: "UI/UX Implementation", level: 4 },
      { name: "Cross-Platform Frameworks", level: 4 },
      { name: "API Integration", level: 4 },
      { name: "Testing & Debugging", level: 3 },
      { name: "Performance Optimization", level: 3 }
    ],
    responsibilities: [
      "Design and build mobile applications for iOS and/or Android platforms",
      "Collaborate with designers to implement user interfaces",
      "Integrate APIs and backend services",
      "Optimize applications for performance and responsiveness",
      "Test applications for bugs and usability issues",
      "Stay updated with mobile development trends and best practices"
    ],
    salary: "$85,000 - $150,000",
    marketDemand: "High",
    industries: ["Tech", "E-commerce", "Healthcare", "Finance", "Entertainment"],
    careerPath: [
      {
        title: "Junior Mobile Developer",
        description: "Focus on implementing components and features under guidance.",
        yearsExperience: "0-2 years"
      },
      {
        title: "Mobile Developer",
        description: "Independently develop mobile applications from design to deployment.",
        yearsExperience: "2-5 years"
      },
      {
        title: "Senior Mobile Developer",
        description: "Lead complex mobile projects and mentor junior developers.",
        yearsExperience: "5-8 years"
      },
      {
        title: "Mobile Lead / Architect",
        description: "Define mobile strategy and architecture for the organization.",
        yearsExperience: "8+ years"
      }
    ],
    certifications: [
      {
        name: "Google Associate Android Developer",
        description: "Validates your Android development skills and knowledge.",
        difficulty: "Intermediate",
        url: "https://developers.google.com/certification/associate-android-developer"
      },
      {
        name: "React Native Certification by Meta",
        description: "Demonstrates proficiency in building cross-platform mobile apps with React Native.",
        difficulty: "Intermediate",
        url: "https://www.coursera.org/specializations/meta-react-native-specialization"
      },
      {
        name: "iOS App Development with Swift Specialization",
        description: "Learn the fundamentals of iOS app development using Swift.",
        difficulty: "Beginner to Intermediate",
        url: "https://www.coursera.org/specializations/app-development"
      }
    ],
    resumeTips: [
      {
        title: "Showcase Your Portfolio",
        description: "Include links to mobile apps you've developed or contributed to, with download statistics if available."
      },
      {
        title: "Highlight Platform Experience",
        description: "Specify which platforms you specialize in (iOS, Android) and your proficiency with relevant technologies (Swift, Kotlin, React Native, Flutter)."
      },
      {
        title: "Demonstrate UI/UX Knowledge",
        description: "Highlight your understanding of mobile design principles and implementation of user-friendly interfaces."
      },
      {
        title: "Include App Store Experience",
        description: "Mention experience with app store submission processes, guidelines, and optimization."
      }
    ]
  },
  
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    description: "Bridges development and operations by implementing automated processes, continuous integration, and infrastructure management to improve software delivery.",
    color: "#f59e0b",
    keySkills: [
      "CI/CD", 
      "Infrastructure as Code", 
      "Containerization", 
      "Cloud Platforms", 
      "Automation", 
      "Monitoring & Logging"
    ],
    skillLevels: [
      { name: "CI/CD Pipelines", level: 5 },
      { name: "Infrastructure as Code", level: 5 },
      { name: "Containerization", level: 4 },
      { name: "Cloud Platforms", level: 4 },
      { name: "Scripting & Automation", level: 4 },
      { name: "Monitoring & Logging", level: 3 }
    ],
    responsibilities: [
      "Implement and maintain CI/CD pipelines",
      "Automate infrastructure provisioning and configuration",
      "Design and maintain containerized environments",
      "Monitor system performance and respond to incidents",
      "Collaborate with development teams to improve deployment processes",
      "Implement security best practices in the DevOps workflow"
    ],
    salary: "$95,000 - $170,000",
    marketDemand: "Very High",
    industries: ["Tech", "Finance", "E-commerce", "Healthcare", "Media"],
    careerPath: [
      {
        title: "Junior DevOps Engineer",
        description: "Focus on implementing and maintaining existing DevOps processes.",
        yearsExperience: "0-2 years"
      },
      {
        title: "DevOps Engineer",
        description: "Independently design and implement DevOps solutions.",
        yearsExperience: "2-5 years"
      },
      {
        title: "Senior DevOps Engineer",
        description: "Lead DevOps initiatives and mentor junior engineers.",
        yearsExperience: "5-8 years"
      },
      {
        title: "DevOps Architect / Director",
        description: "Define DevOps strategy and oversee enterprise-wide DevOps transformation.",
        yearsExperience: "8+ years"
      }
    ],
    certifications: [
      {
        name: "AWS Certified DevOps Engineer",
        description: "Validates technical expertise in provisioning and operating distributed applications on AWS.",
        difficulty: "Advanced",
        url: "https://aws.amazon.com/certification/certified-devops-engineer-professional/"
      },
      {
        name: "Certified Kubernetes Administrator (CKA)",
        description: "Validates your ability to install, configure, and manage Kubernetes.",
        difficulty: "Intermediate to Advanced",
        url: "https://www.cncf.io/certification/cka/"
      },
      {
        name: "HashiCorp Certified: Terraform Associate",
        description: "Validates your understanding of infrastructure as code using Terraform.",
        difficulty: "Intermediate",
        url: "https://www.hashicorp.com/certification/terraform-associate"
      }
    ],
    resumeTips: [
      {
        title: "Highlight CI/CD Experience",
        description: "Describe your experience with CI/CD tools (Jenkins, GitHub Actions, GitLab CI) and how you've improved deployment processes."
      },
      {
        title: "Showcase Automation",
        description: "Highlight infrastructure automation achievements, including tools used and time/resources saved."
      },
      {
        title: "Demonstrate Container Expertise",
        description: "Emphasize experience with containerization technologies (Docker, Kubernetes) and container orchestration."
      },
      {
        title: "Include Monitoring Solutions",
        description: "Mention experience with monitoring and logging tools (Prometheus, Grafana, ELK Stack) and how you've used them to improve system reliability."
      }
    ]
  },
  
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    description: "Creates user-centered digital experiences by designing intuitive interfaces, conducting user research, and enhancing overall user satisfaction.",
    color: "#ec4899",
    keySkills: [
      "User Research", 
      "Wireframing", 
      "Prototyping", 
      "Visual Design", 
      "Usability Testing", 
      "Design Systems"
    ],
    skillLevels: [
      { name: "User Research", level: 5 },
      { name: "Wireframing & Prototyping", level: 5 },
      { name: "Visual Design", level: 4 },
      { name: "Interaction Design", level: 4 },
      { name: "Design Tools", level: 4 },
      { name: "Usability Testing", level: 3 }
    ],
    responsibilities: [
      "Conduct user research to understand user needs and behaviors",
      "Create wireframes, prototypes, and high-fidelity designs",
      "Develop user flows and information architecture",
      "Collaborate with developers to ensure design implementation",
      "Conduct usability testing and iterate based on feedback",
      "Create and maintain design systems and style guides"
    ],
    salary: "$80,000 - $150,000",
    marketDemand: "High",
    industries: ["Tech", "E-commerce", "Finance", "Healthcare", "Entertainment"],
    careerPath: [
      {
        title: "Junior UI/UX Designer",
        description: "Focus on executing design tasks under guidance and learning fundamentals.",
        yearsExperience: "0-2 years"
      },
      {
        title: "UI/UX Designer",
        description: "Independently create user-centered designs for products and features.",
        yearsExperience: "2-5 years"
      },
      {
        title: "Senior UI/UX Designer",
        description: "Lead design for complex projects and mentor junior designers.",
        yearsExperience: "5-8 years"
      },
      {
        title: "UX Lead / Design Director",
        description: "Define design strategy and oversee design teams and processes.",
        yearsExperience: "8+ years"
      }
    ],
    certifications: [
      {
        name: "Google UX Design Professional Certificate",
        description: "Learn foundational UX concepts and create a professional UX portfolio.",
        difficulty: "Beginner to Intermediate",
        url: "https://www.coursera.org/professional-certificates/google-ux-design"
      },
      {
        name: "Nielsen Norman Group UX Certification",
        description: "Comprehensive UX training covering multiple aspects of user experience design.",
        difficulty: "Intermediate to Advanced",
        url: "https://www.nngroup.com/ux-certification/"
      },
      {
        name: "Interaction Design Foundation UX Courses",
        description: "Specialized courses in various aspects of UX design.",
        difficulty: "Various levels",
        url: "https://www.interaction-design.org/courses"
      }
    ],
    resumeTips: [
      {
        title: "Showcase Your Portfolio",
        description: "Include a link to your design portfolio showcasing your best work with case studies."
      },
      {
        title: "Highlight Research Skills",
        description: "Describe your experience with user research methods and how they informed your design decisions."
      },
      {
        title: "Demonstrate Process",
        description: "Outline your design process and how you approach solving user problems."
      },
      {
        title: "Include Metrics",
        description: "Where possible, quantify the impact of your designs on user engagement, conversion rates, or other relevant metrics."
      }
    ]
  }
];