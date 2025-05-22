import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import PageContainer from "./components/PageContainer";
import PageTitle from "./components/PageTitle";

export default function Home() {
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
            <span className="pr-3 text-sm text-[#9333EA] bg-transparent">
              WELCOME TO MY SPACE
            </span>
          </div>
        </div>

        <h1 className="mt-8 text-4xl sm:text-6xl font-bold tracking-tight text-white">
          Building the Future with
          <span className="block text-[#9333EA]">Web Technology</span>
        </h1>

        <p className="mt-6 text-xl text-gray-400 max-w-3xl">
          Software Engineer passionate about web development, distributed
          systems, and creating innovative solutions for modern applications.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Section Cards */}
          <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-[#9333EA] transition-colors">
            <h3 className="text-lg font-semibold text-white">
              Latest Projects
            </h3>
            <p className="mt-2 text-gray-400">
              Explore my recent work in web development and distributed systems
            </p>
          </div>

          <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-[#9333EA] transition-colors">
            <h3 className="text-lg font-semibold text-white">Technical Blog</h3>
            <p className="mt-2 text-gray-400">
              Insights and thoughts about modern web development
            </p>
          </div>

          <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-[#9333EA] transition-colors">
            <h3 className="text-lg font-semibold text-white">Experience</h3>
            <p className="mt-2 text-gray-400">
              My journey through the tech landscape and achievements
            </p>
          </div>
        </div>
      </PageContainer>
      <Footer />
    </>
  );
}
