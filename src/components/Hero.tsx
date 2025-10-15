import { ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onScrollToNext: () => void;
}

const Hero = ({ onScrollToNext }: HeroProps) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
              {personalInfo.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
              {personalInfo.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={onScrollToNext}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                View My Work
              </button>
              <a
                href={personalInfo.resumeUrl}
                download
                className="px-8 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl border border-gray-200"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="flex-shrink-0 animate-fade-in-delayed">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse" />
              <img
                src={personalInfo.photo}
                alt={personalInfo.name}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 animate-bounce">
          <button
            onClick={onScrollToNext}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <ChevronDown size={48} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
