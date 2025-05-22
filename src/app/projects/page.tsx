import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PageContainer from "../components/PageContainer";

export default function Projects() {
  const projects = [
    {
      title: "Modern E-commerce Platform",
      description:
        "A full-stack e-commerce solution built with Next.js, featuring real-time inventory management, payment processing, and an intuitive admin dashboard.",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      link: "https://github.com/fanzru/ecommerce",
      image: "/projects/ecommerce.jpg",
    },
    {
      title: "Cloud Infrastructure Manager",
      description:
        "A web application for managing cloud infrastructure across multiple providers, with automated deployment and monitoring capabilities.",
      tags: ["React", "Go", "Docker", "Kubernetes"],
      link: "https://github.com/fanzru/cloud-manager",
      image: "/projects/cloud.jpg",
    },
    {
      title: "Real-time Analytics Dashboard",
      description:
        "A real-time analytics platform that processes and visualizes data streams, built with modern web technologies and scalable architecture.",
      tags: ["React", "Node.js", "WebSocket", "Redis"],
      link: "https://github.com/fanzru/analytics",
      image: "/projects/analytics.jpg",
    },
    {
      title: "Content Management System",
      description:
        "A headless CMS built for performance and flexibility, featuring a GraphQL API and customizable content types.",
      tags: ["GraphQL", "Node.js", "MongoDB", "React"],
      link: "https://github.com/fanzru/cms",
      image: "/projects/cms.jpg",
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
              PROJECTS
            </span>
          </div>
        </div>

        <h1 className="mt-8 text-4xl font-bold text-white">
          Featured Projects
        </h1>
        <p className="mt-4 text-xl text-gray-400">
          A collection of my work in web development and distributed systems.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/50 rounded-lg border border-gray-800 hover:border-[#9333EA] transition-all duration-300 overflow-hidden group"
            >
              <div className="aspect-video w-full bg-gray-800">
                {/* Project image placeholder */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white group-hover:text-[#9333EA] transition-colors">
                  {project.title}
                </h3>
                <p className="mt-3 text-gray-400">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#9333EA]/10 text-[#9333EA]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#9333EA] hover:text-white transition-colors"
                  >
                    View Project
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
      <Footer />
    </>
  );
}
