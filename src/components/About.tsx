import { personalInfo } from '../data/portfolioData';
import { Sparkles, Target, Leaf } from 'lucide-react';

const About = () => {
  const iconMap = {
    'Computational Modeling': Sparkles,
    'Advanced Manufacturing': Target,
    'Sustainable Design': Leaf
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            {personalInfo.about}
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            My Interests
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {personalInfo.interests.map((interest, index) => {
              const Icon = iconMap[interest.title as keyof typeof iconMap];
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <Icon className="text-blue-600" size={32} />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {interest.title}
                  </h4>
                  <p className="text-gray-600 text-center">
                    {interest.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
