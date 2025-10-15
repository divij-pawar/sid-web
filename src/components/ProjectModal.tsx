import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handlePrevMedia = () => {
    setCurrentMediaIndex((prev) =>
      prev === 0 ? project.media.length - 1 : prev - 1
    );
  };

  const handleNextMedia = () => {
    setCurrentMediaIndex((prev) =>
      prev === project.media.length - 1 ? 0 : prev + 1
    );
  };

  const currentMedia = project.media[currentMediaIndex];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="sticky top-4 float-right mr-4 mt-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
          >
            <X size={24} />
          </button>

          <div className="p-8">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                  {project.category}
                </span>
                <span className="text-gray-500 font-medium">{project.year}</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {project.title}
              </h2>
              <p className="text-lg text-gray-700">{project.fullDescription}</p>
            </div>

            {project.media.length > 0 && (
              <div className="mb-8">
                <div className="relative bg-gray-100 rounded-xl overflow-hidden aspect-video">
                  {currentMedia.type === 'video' ? (
                    <video
                      src={currentMedia.url}
                      controls
                      className="w-full h-full object-contain"
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={currentMedia.url}
                      alt={currentMedia.caption || project.title}
                      className="w-full h-full object-contain"
                    />
                  )}
                  {project.media.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevMedia}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={handleNextMedia}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </>
                  )}
                </div>
                {currentMedia.caption && (
                  <p className="text-center text-gray-600 mt-3 text-sm">
                    {currentMedia.caption}
                  </p>
                )}
                {project.media.length > 1 && (
                  <div className="flex justify-center gap-2 mt-4">
                    {project.media.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentMediaIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentMediaIndex
                            ? 'bg-blue-600 w-8'
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Objectives
                </h3>
                <ul className="space-y-2">
                  {project.objectives.map((objective, index) => (
                    <li key={index} className="text-gray-700 flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Results</h3>
                <ul className="space-y-2">
                  {project.results.map((result, index) => (
                    <li key={index} className="text-gray-700 flex items-start">
                      <span className="text-green-600 mr-2 mt-1">✓</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Key Takeaways
                </h3>
                <ul className="space-y-2">
                  {project.keyTakeaways.map((takeaway, index) => (
                    <li key={index} className="text-gray-700 flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">→</span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
