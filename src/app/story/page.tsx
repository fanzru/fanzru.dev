import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PageContainer from "../components/PageContainer";

export default function Story() {
  const experiences = [
    {
      year: "2023",
      title: "Senior Software Engineer",
      company: "Tech Company",
      description:
        "Leading development of scalable web applications and distributed systems. Mentoring junior developers and implementing modern development practices.",
      achievements: [
        "Reduced application load time by 40% through performance optimizations",
        "Led migration to microservices architecture",
        "Implemented automated CI/CD pipeline",
      ],
      technologies: ["Next.js", "Go", "Kubernetes", "AWS"],
    },
    {
      year: "2022",
      title: "Software Engineer",
      company: "Digital Agency",
      description:
        "Developed and maintained web applications using modern JavaScript frameworks and cloud infrastructure.",
      achievements: [
        "Built real-time analytics dashboard for client projects",
        "Improved API response times by 60%",
        "Implemented automated testing suite",
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
    },
    {
      year: "2021",
      title: "Junior Developer",
      company: "Startup",
      description:
        "Worked on various projects involving full-stack development and cloud services.",
      achievements: [
        "Developed e-commerce platform features",
        "Integrated payment processing systems",
        "Created admin dashboard interface",
      ],
      technologies: ["JavaScript", "Python", "MySQL", "Redis"],
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
          Exploring the intersection of technology, innovation, and
          problem-solving.
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
                      <div className="h-px flex-1 bg-gray-800"></div>
                    </div>

                    <div className="mt-6 bg-gray-900/50 p-6 rounded-lg border border-gray-800">
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
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#9333EA]/10 text-[#9333EA]"
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
