import { GraduationCap, Briefcase, Code } from 'lucide-react';
import { education, experience, skills } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto" />
        </div>

        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Briefcase className="text-blue-600" size={24} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Work Experience</h3>
          </div>
          <div className="space-y-8">
            {experience.map((exp) => (
              <div
                key={exp.id}
                className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-1">
                      {exp.title}
                    </h4>
                    <p className="text-lg text-blue-600 font-medium mb-1">
                      {exp.company}
                    </p>
                    <p className="text-gray-600">{exp.location}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-gray-600 font-medium">
                    {exp.startDate} - {exp.endDate}
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, index) => (
                    <li key={index} className="text-gray-700 flex items-start">
                      <span className="text-blue-600 mr-2 mt-1.5">•</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <GraduationCap className="text-blue-600" size={24} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Education</h3>
          </div>
          <div className="space-y-8">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-lg text-blue-600 font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-gray-600">{edu.location}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-gray-600 font-medium">
                    {edu.graduationDate}
                  </div>
                </div>
                {edu.gpa && (
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">GPA:</span> {edu.gpa}
                  </p>
                )}
                {edu.honors && edu.honors.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {edu.honors.map((honor, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {honor}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Code className="text-blue-600" size={24} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Technical Skills</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillCategory, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {skillCategory.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
