import { Mail, Linkedin, Github, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 text-center mb-12">
            I'm always interested in hearing about new opportunities, collaborations, or just connecting with fellow engineers. Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 hover:shadow-lg transition-all group"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <Mail className="text-blue-600 group-hover:text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 text-sm text-center break-all">
                {personalInfo.email}
              </p>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 hover:shadow-lg transition-all group"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <Linkedin className="text-blue-600 group-hover:text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">LinkedIn</h3>
              <p className="text-gray-600 text-sm">Connect with me</p>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 hover:shadow-lg transition-all group"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <Github className="text-blue-600 group-hover:text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">GitHub</h3>
              <p className="text-gray-600 text-sm">View my code</p>
            </a>
          </div>

          <div className="text-center">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Send Me a Message
            </a>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <button
            onClick={scrollToTop}
            className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors group"
          >
            <ArrowUp className="text-gray-600 group-hover:text-gray-900" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
