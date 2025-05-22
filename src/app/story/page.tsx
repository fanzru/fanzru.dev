import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PageContainer from "../components/PageContainer";

export default function Story() {
  const experiences = [
    {
      year: "2024",
      title: "Product Engineering Manager 🔥",
      company: "Astabyte",
      period: "Jan 2024 - Present",
      description:
        "Leading technology and product development while managing cross-functional teams.",
      achievements: [
        "Meeting and gathering requirements with clients like Telkom University, Telkom Indonesia, Puri Group",
        "Managing growth together with Product Manager, Designer, Engineer teams",
        "Successfully delivered enterprise-level projects for notable clients",
      ],
      technologies: [
        "Go",
        "PostgreSQL",
        "MySQL",
        "Next.js",
        "TypeScript",
        "Docker",
        "Nginx",
      ],
    },
    {
      year: "2023",
      title:
        "Software Engineer - Fintech (Payment, Refund, Disbursement, Wishlist) 🔥",
      company: "Tiket.com",
      period: "Oct 2022 - Present",
      description:
        "Part of Refund, Disbursement, and Order Team, focusing on high-performance microservices and system optimization.",
      achievements: [
        "Engineered and standardized company-wide wishlist microservice from ground zero",
        "Designed high-performance service handling 80,000+ RPM with minimal infrastructure (0.5 CPU core, 512MB RAM)",
        "Led development of critical business features including Refund 4.0, Multi-Currency Refund, and Blibli Integration",
        "Automated rebooking relocation process improving customer experience",
        "Implemented robust error handling and monitoring systems",
      ],
      technologies: [
        "Golang",
        "Java",
        "Spring",
        "MongoDB",
        "Kafka",
        "MySQL",
        "Camunda",
        "Kubernetes",
        "Redis",
      ],
    },
    {
      year: "2024",
      title: "Senior Full Stack Engineer",
      company: "Waizly",
      period: "Jun 2024 - Jan 2025",
      description:
        "Led development team focused on Sales Management System optimization.",
      achievements: [
        "Revitalized critical Sales Management System through comprehensive refactoring",
        "Reduced system latency by 65% and increased feature deployment velocity by 3x",
        "Led and mentored specialized development team",
      ],
      technologies: ["Laravel", "PostgreSQL", "Redis", "React.js", "Bootstrap"],
    },
    {
      year: "2023",
      title: "Product Engineering - Digital Marketing",
      company: "Kerjago",
      period: "May 2023 - Jan 2025",
      description:
        "Led digital marketing and product development initiatives for Kerjago platform in Bandung.",
      achievements: [
        "Handling content writing, ideation, brainstorming and planning",
        "A/B testing content TikTok and Instagram to know audience",
        "SEO handling to increase Social Media and Website traffic 70k++ visitor",
        "Increase Google search result until 100K++",
      ],
      technologies: [
        "Content Strategy",
        "SEO",
        "Social Media Marketing",
        "Analytics",
      ],
    },
    {
      year: "2023",
      title: "Chief Executive Officer",
      company: "Kerjago",
      period: "Jan 2022 - Jan 2025",
      description:
        "Led organization with multiple divisions including Technology, Creative & Design, Marketing, and People.",
      achievements: [
        "Led an organization with several divisions: Technology, Creative & Design, Marketing, People",
        "Successfully collaborated with several universities to discuss CV issues, Hiring Process, Internship, Study Period",
        "Active discussions with other C-Level executives",
      ],
      technologies: [
        "Leadership",
        "Business Development",
        "Strategic Planning",
        "Team Management",
      ],
    },
    {
      year: "2023",
      title: "Mentor Product Engineer",
      company: "Braincore.id",
      period: "Oct 2023 - Dec 2023",
      description: "Mentoring and guiding aspiring product engineers.",
      achievements: [
        "Provided guidance on product development methodologies",
        "Helped mentees develop practical engineering skills",
        "Conducted code reviews and technical assessments",
      ],
      technologies: [
        "Product Development",
        "Engineering Practices",
        "Technical Leadership",
      ],
    },
    {
      year: "2023",
      title: "Mentor Fellowship Program",
      company: "YABB - Generasi Gigih 3.0",
      period: "Apr 2023 - Sep 2023",
      description: "Class Facilitator for Fullstack Engineering program.",
      achievements: [
        "Delivered comprehensive technical training to 50+ emerging developers",
        "Facilitated collaborative learning sessions with industry engineers",
        "80% of mentees secured industry positions within 3 months",
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "React.js"],
    },
    {
      year: "2022",
      title: "Software Engineer",
      company: "Kerjago",
      period: "Jan 2022 - Jul 2023",
      description:
        "Led technical development and implementation of Kerjago platform.",
      achievements: [
        "Created clean code repository using domain driven design with team",
        "Supported team in translating business concepts to code",
        "Implemented best practices and coding standards across the platform",
      ],
      technologies: [
        "TypeScript",
        "TailwindCSS",
        "Next.js",
        "Ubuntu",
        "Nginx",
        "Cloud Server",
        "DNS Resolver",
        "Redux",
        "Golang",
        "Domain Driven Design",
      ],
    },
    {
      year: "2022",
      title: "Research Assistant",
      company: "Telkom University",
      period: "Feb 2022 - Jan 2023",
      description: "Research in Natural Language Generation and Processing.",
      achievements: [
        "Worked with Seq2Seq, PyTorch, Neural Networks, Transformers",
        "Built Scientific Science Summarization Tools",
        "Published research paper on sentiment analysis",
      ],
      technologies: [
        "Golang",
        "MySQL",
        "Next.js",
        "Tailwind",
        "Java",
        "Python",
      ],
    },
    {
      year: "2022",
      title: "Software Engineer",
      company: "Tokopedia",
      period: "May 2022 - Aug 2022",
      description: "Developed enterprise systems within IT Finance team.",
      achievements: [
        "Built tax generation system for 10M+ Tokopedia merchants",
        "Implemented highly configurable computation engine",
        "Created RESTful APIs improving system response time",
      ],
      technologies: ["Golang", "MySQL", "Redis", "NSQ"],
    },
    {
      year: "2021",
      title: "Full Stack Engineer",
      company: "XL Axiata",
      period: "Aug 2021 - Jan 2022",
      description:
        "Full stack development in Technology and Assurance department.",
      achievements: [
        "Created XL Axiata Future Leader National Conference Website",
        "Rebuilt the X-CAMP website",
        "Developed and supported various IoT APIs",
      ],
      technologies: [
        "TailwindCSS",
        "DaisyUI",
        "Next.js",
        "MySQL",
        "Node.js",
        "GCP",
        "Nginx",
      ],
    },
    {
      year: "2021",
      title: "Backend Engineer & System Analyst",
      company: "Buangin",
      period: "Sep 2021 - Jan 2022",
      description:
        "Led development of award-winning waste management platform.",
      achievements: [
        "Top 2 Project in Bangkit Program by Google, Gojek, Traveloka",
        "Implemented comprehensive microservices infrastructure",
        "Managed IoT-enabled smart bins and vehicle fleet management",
      ],
      technologies: [
        "Express.js",
        "MongoDB",
        "Docker",
        "Kubernetes",
        "Node.js",
        "GCP",
      ],
    },
    {
      year: "2020",
      title: "Support Team Manager",
      company: "Esports Kebumen",
      period: "Jan 2020 - Jun 2021",
      description: "Managed esports platform and events.",
      achievements: [
        "Conceptualized and executed events and advertising campaigns",
        "Built and managed MLBB team",
        "Organized successful game tournaments and streaming events",
      ],
      technologies: ["Event Management", "Team Leadership", "Content Creation"],
    },
  ];

  return (
    <>
      <Navigation />
      <PageContainer>
        <div className="relative">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-start">
            <span className="pr-3 bg-[#0B1120] text-sm text-[#9333EA]">
              STORY
            </span>
          </div>
        </div>

        <h1 className="mt-8 text-4xl font-bold text-white">My Journey</h1>
        <p className="mt-4 text-xl text-gray-400">
          A chronicle of my professional evolution through technology,
          innovation, and leadership.
        </p>

        <div className="mt-12">
          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute top-0 left-8 h-full w-px bg-gray-800"
              aria-hidden="true"
            ></div>

            <div className="space-y-16">
              {experiences.map((experience, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-8 -ml-[9px] h-[18px] w-[18px] rounded-full border-2 border-[#9333EA] bg-[#0B1120]"></div>

                  <div className="ml-24">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-[#9333EA] font-mono">
                        {experience.year}
                      </span>
                      <span className="text-sm text-gray-500 font-mono">
                        {experience.period}
                      </span>
                      <div className="h-px flex-1 bg-gray-800"></div>
                    </div>

                    <div className="mt-6 bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-[#9333EA] transition-colors duration-300">
                      <h3 className="text-xl font-semibold text-white">
                        {experience.title}
                      </h3>
                      <p className="mt-1 text-[#9333EA]">
                        {experience.company}
                      </p>
                      <p className="mt-4 text-gray-400">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      <div className="mt-6">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-[#9333EA] mr-2">•</span>
                              <span className="text-gray-400">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mt-6">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#9333EA]/10 text-[#9333EA] hover:bg-[#9333EA]/20 transition-colors duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
      <Footer />
    </>
  );
}
