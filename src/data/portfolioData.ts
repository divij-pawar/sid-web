import { Project, Publication, Experience, Education, Skill } from '../types';

export const personalInfo = {
  name: "Alex Chen",
  title: "Mechanical Engineer & Researcher",
  tagline: "Designing innovative solutions through computational modeling and advanced manufacturing",
  photo: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
  email: "alex.chen@email.com",
  linkedin: "https://linkedin.com/in/alexchen",
  github: "https://github.com/alexchen",
  resumeUrl: "/resume.pdf",
  about: "I'm a mechanical engineer passionate about pushing the boundaries of design and simulation. With expertise in CAD modeling, finite element analysis, and computational fluid dynamics, I bridge theoretical concepts with practical engineering solutions. My work spans from optimizing thermal management systems to developing novel manufacturing processes.",
  interests: [
    {
      title: "Computational Modeling",
      description: "Leveraging FEA and CFD to solve complex engineering challenges"
    },
    {
      title: "Advanced Manufacturing",
      description: "Exploring additive manufacturing and precision machining techniques"
    },
    {
      title: "Sustainable Design",
      description: "Creating energy-efficient solutions that minimize environmental impact"
    }
  ]
};

export const education: Education[] = [
  {
    id: "edu1",
    degree: "Master of Science in Mechanical Engineering",
    institution: "Massachusetts Institute of Technology",
    location: "Cambridge, MA",
    graduationDate: "May 2022",
    gpa: "3.9/4.0",
    honors: ["Outstanding Graduate Research Award", "Dean's List"]
  },
  {
    id: "edu2",
    degree: "Bachelor of Science in Mechanical Engineering",
    institution: "University of California, Berkeley",
    location: "Berkeley, CA",
    graduationDate: "May 2020",
    gpa: "3.8/4.0",
    honors: ["Magna Cum Laude", "Tau Beta Pi Engineering Honor Society"]
  }
];

export const experience: Experience[] = [
  {
    id: "exp1",
    title: "Senior Mechanical Engineer",
    company: "Innovative Dynamics Corp",
    location: "San Francisco, CA",
    startDate: "June 2022",
    endDate: "Present",
    responsibilities: [
      "Lead thermal management system design for next-generation electric vehicles",
      "Perform advanced CFD simulations to optimize cooling performance",
      "Collaborate with cross-functional teams to integrate thermal solutions",
      "Mentor junior engineers in simulation methodologies and CAD best practices"
    ]
  },
  {
    id: "exp2",
    title: "Research Assistant",
    company: "MIT Mechanical Engineering Department",
    location: "Cambridge, MA",
    startDate: "September 2020",
    endDate: "May 2022",
    responsibilities: [
      "Conducted research on novel heat transfer mechanisms in microfluidic devices",
      "Developed custom MATLAB scripts for data analysis and visualization",
      "Published findings in peer-reviewed journals",
      "Presented research at international conferences"
    ]
  },
  {
    id: "exp3",
    title: "Engineering Intern",
    company: "SpaceTech Solutions",
    location: "Los Angeles, CA",
    startDate: "June 2019",
    endDate: "August 2019",
    responsibilities: [
      "Assisted in structural analysis of satellite components using ANSYS",
      "Created detailed CAD models for manufacturing documentation",
      "Participated in design reviews and contributed optimization suggestions"
    ]
  }
];

export const skills: Skill[] = [
  {
    category: "CAD & Design",
    items: ["SolidWorks", "CATIA", "AutoCAD", "Fusion 360", "Inventor"]
  },
  {
    category: "Simulation & Analysis",
    items: ["ANSYS", "COMSOL", "Abaqus", "OpenFOAM", "Simulink"]
  },
  {
    category: "Programming",
    items: ["Python", "MATLAB", "C++", "JavaScript", "R"]
  },
  {
    category: "Manufacturing",
    items: ["3D Printing", "CNC Machining", "Sheet Metal Fabrication", "Injection Molding"]
  },
  {
    category: "Tools & Software",
    items: ["Git", "LaTeX", "Paraview", "Tecplot", "LabVIEW"]
  }
];

export const projects: Project[] = [
  {
    id: "proj1",
    title: "Electric Vehicle Battery Thermal Management",
    category: "Thermal Analysis",
    description: "Optimized cooling system for high-performance EV battery packs using advanced CFD simulations",
    fullDescription: "Designed and analyzed an innovative liquid cooling system for electric vehicle battery packs to maintain optimal operating temperatures under extreme conditions. The project combined computational fluid dynamics with heat transfer analysis to achieve superior thermal performance.",
    objectives: [
      "Reduce maximum battery temperature by 15°C under high-load conditions",
      "Minimize temperature variation across cell modules",
      "Optimize coolant flow distribution for energy efficiency"
    ],
    results: [
      "Achieved 18°C temperature reduction compared to baseline design",
      "Improved temperature uniformity by 23%",
      "Reduced pumping power requirements by 12%"
    ],
    keyTakeaways: [
      "Strategic placement of cooling channels significantly impacts thermal performance",
      "Multi-objective optimization enables balanced design trade-offs",
      "CFD validation with experimental data is critical for accurate predictions"
    ],
    thumbnail: "https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=600",
    media: [
      {
        type: "image",
        url: "https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=1200",
        caption: "Battery pack thermal distribution analysis"
      },
      {
        type: "image",
        url: "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=1200",
        caption: "Cooling channel geometry optimization"
      }
    ],
    tools: ["ANSYS Fluent", "SolidWorks", "MATLAB", "Python"],
    year: "2023"
  },
  {
    id: "proj2",
    title: "Microfluidic Heat Exchanger Design",
    category: "Research",
    description: "Novel microscale heat exchanger with enhanced heat transfer coefficients for electronics cooling",
    fullDescription: "Developed an innovative microfluidic heat exchanger design that leverages microscale flow phenomena to achieve exceptional heat transfer performance. This research project combines experimental validation with detailed numerical simulations.",
    objectives: [
      "Design compact heat exchanger for high-power electronics",
      "Maximize heat transfer coefficient while minimizing pressure drop",
      "Validate performance through experimental testing"
    ],
    results: [
      "Achieved 250% improvement in heat transfer coefficient",
      "Maintained pressure drop within acceptable limits",
      "Successfully fabricated and tested prototype devices"
    ],
    keyTakeaways: [
      "Microscale effects significantly enhance heat transfer mechanisms",
      "Surface roughness plays critical role in performance",
      "Additive manufacturing enables complex geometries previously impossible"
    ],
    thumbnail: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600",
    media: [
      {
        type: "image",
        url: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1200",
        caption: "Microfluidic channel network design"
      },
      {
        type: "image",
        url: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1200",
        caption: "Heat transfer performance comparison"
      }
    ],
    tools: ["COMSOL", "MATLAB", "Python", "Fusion 360"],
    year: "2022"
  },
  {
    id: "proj3",
    title: "Aerospace Component Structural Analysis",
    category: "FEA",
    description: "Stress and fatigue analysis of critical aircraft structural components under flight loads",
    fullDescription: "Conducted comprehensive finite element analysis of aircraft wing components to ensure structural integrity under operational loads. The project included static, dynamic, and fatigue analyses to validate design against aerospace standards.",
    objectives: [
      "Verify structural adequacy under maximum design loads",
      "Identify critical stress concentration areas",
      "Optimize component weight while maintaining safety factors"
    ],
    results: [
      "Achieved 15% weight reduction through topology optimization",
      "Confirmed safety factors exceed regulatory requirements",
      "Identified and mitigated potential failure modes"
    ],
    keyTakeaways: [
      "Proper boundary condition definition is crucial for accurate FEA results",
      "Modal analysis reveals potential resonance issues early in design",
      "Topology optimization provides non-intuitive yet effective design solutions"
    ],
    thumbnail: "https://images.pexels.com/photos/2693529/pexels-photo-2693529.jpeg?auto=compress&cs=tinysrgb&w=600",
    media: [
      {
        type: "image",
        url: "https://images.pexels.com/photos/2693529/pexels-photo-2693529.jpeg?auto=compress&cs=tinysrgb&w=1200",
        caption: "Stress distribution under maximum load"
      },
      {
        type: "image",
        url: "https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=1200",
        caption: "Topology optimization results"
      }
    ],
    tools: ["ANSYS Mechanical", "CATIA", "Python", "nCode"],
    year: "2023"
  },
  {
    id: "proj4",
    title: "Autonomous Drone Frame Design",
    category: "CAD Models",
    description: "Lightweight carbon fiber drone frame optimized for payload capacity and flight stability",
    fullDescription: "Designed a custom quadcopter frame for autonomous delivery applications, balancing structural requirements with weight constraints. The project included CAD modeling, FEA validation, and prototype fabrication using carbon fiber composites.",
    objectives: [
      "Design frame supporting 5kg payload",
      "Minimize overall weight for extended flight time",
      "Ensure vibration isolation for sensitive electronics"
    ],
    results: [
      "Created 800g frame with 5kg payload capacity",
      "Achieved first natural frequency above 50 Hz",
      "Successfully integrated all electronic components"
    ],
    keyTakeaways: [
      "Carbon fiber layup orientation significantly affects stiffness-to-weight ratio",
      "Vibration damping requires careful material selection and mounting design",
      "Modular design enables rapid prototyping and iteration"
    ],
    thumbnail: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=600",
    media: [
      {
        type: "image",
        url: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1200",
        caption: "CAD model of drone frame assembly"
      },
      {
        type: "image",
        url: "https://images.pexels.com/photos/1982126/pexels-photo-1982126.jpeg?auto=compress&cs=tinysrgb&w=1200",
        caption: "Modal analysis showing vibration modes"
      }
    ],
    tools: ["SolidWorks", "ANSYS", "Composites Modeler", "3D Printing"],
    year: "2022"
  },
  {
    id: "proj5",
    title: "Industrial Robot Gripper Mechanism",
    category: "CAD Models",
    description: "Adaptive gripper design for handling objects of varying sizes and geometries in manufacturing",
    fullDescription: "Developed a sophisticated robotic gripper mechanism capable of securely grasping objects ranging from 10mm to 150mm in diameter. The design incorporates compliant mechanisms for adaptive grasping and force sensing capabilities.",
    objectives: [
      "Create versatile gripper for diverse object geometries",
      "Implement force feedback for delicate object handling",
      "Design for manufacturing using standard machining processes"
    ],
    results: [
      "Successfully grips objects from 10mm to 150mm diameter",
      "Integrated force sensing with 0.1N resolution",
      "Reduced manufacturing cost by 40% compared to commercial alternatives"
    ],
    keyTakeaways: [
      "Compliant mechanisms provide inherent adaptability",
      "Design for assembly significantly reduces production time",
      "Proper material selection balances durability and cost"
    ],
    thumbnail: "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=600",
    media: [
      {
        type: "image",
        url: "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=1200",
        caption: "Gripper mechanism CAD assembly"
      },
      {
        type: "image",
        url: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1200",
        caption: "Kinematic motion analysis"
      }
    ],
    tools: ["Inventor", "MATLAB", "CNC Machining", "Arduino"],
    year: "2021"
  },
  {
    id: "proj6",
    title: "Wind Turbine Blade Aerodynamic Optimization",
    category: "Simulations",
    description: "CFD-driven design optimization to maximize energy capture efficiency across operating conditions",
    fullDescription: "Performed comprehensive aerodynamic analysis and optimization of wind turbine blade profiles to maximize annual energy production. The project utilized high-fidelity CFD simulations coupled with optimization algorithms to explore design space.",
    objectives: [
      "Increase annual energy production by 10%",
      "Reduce blade loading and fatigue stresses",
      "Maintain structural manufacturability"
    ],
    results: [
      "Achieved 12.3% increase in energy capture",
      "Reduced maximum blade loading by 8%",
      "Validated performance through wind tunnel testing"
    ],
    keyTakeaways: [
      "Multi-point optimization accounts for varying wind conditions",
      "Blade twist distribution critically affects performance",
      "Trade-offs between efficiency and structural loads require careful balancing"
    ],
    thumbnail: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=600",
    media: [
      {
        type: "image",
        url: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1200",
        caption: "Blade surface pressure distribution"
      },
      {
        type: "image",
        url: "https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=1200",
        caption: "Velocity flow field visualization"
      }
    ],
    tools: ["OpenFOAM", "Python", "ANSYS CFX", "Paraview"],
    year: "2023"
  }
];

export const publications: Publication[] = [
  {
    id: "pub1",
    title: "Enhanced Heat Transfer in Microfluidic Devices Using Surface Roughness Optimization",
    authors: ["A. Chen", "J. Smith", "M. Johnson"],
    venue: "International Journal of Heat and Mass Transfer",
    year: "2022",
    abstract: "This study investigates the effects of controlled surface roughness on heat transfer performance in microfluidic heat exchangers. Through a combination of numerical simulations and experimental validation, we demonstrate that optimized roughness patterns can enhance heat transfer coefficients by up to 250% compared to smooth channels, while maintaining acceptable pressure drop penalties.",
    pdfUrl: "/publications/chen2022_microfluidic.pdf",
    externalUrl: "https://doi.org/10.1016/j.ijheatmasstransfer.2022.xxxxx"
  },
  {
    id: "pub2",
    title: "Topology Optimization of Lightweight Structures for Aerospace Applications",
    authors: ["A. Chen", "R. Williams"],
    venue: "AIAA Journal of Aircraft",
    year: "2023",
    abstract: "We present a novel approach to topology optimization that incorporates manufacturing constraints specific to aerospace components. Our method achieves significant weight reduction while ensuring compliance with stringent safety factors and manufacturing feasibility. Case studies on aircraft wing ribs demonstrate 15-20% weight savings compared to conventional designs.",
    pdfUrl: "/publications/chen2023_topology.pdf",
    externalUrl: "https://doi.org/10.2514/1.C037xxx"
  },
  {
    id: "pub3",
    title: "Computational Fluid Dynamics Analysis of Battery Thermal Management Systems",
    authors: ["A. Chen", "K. Lee", "T. Brown", "S. Patel"],
    venue: "Journal of Power Sources",
    year: "2023",
    abstract: "This paper presents a comprehensive CFD study of liquid cooling strategies for lithium-ion battery packs in electric vehicles. We compare multiple cooling channel configurations and identify optimal designs that minimize temperature gradients while reducing pumping power requirements. The validated models provide insights for next-generation thermal management systems.",
    externalUrl: "https://doi.org/10.1016/j.jpowsour.2023.xxxxx"
  },
  {
    id: "pub4",
    title: "Design and Fabrication of Compliant Mechanisms for Robotic Grasping",
    authors: ["A. Chen", "D. Martinez"],
    venue: "IEEE Robotics and Automation Letters",
    year: "2021",
    abstract: "We introduce a systematic design methodology for compliant robotic grippers that adapt to object geometry through elastic deformation. The approach combines kinematic synthesis with finite element analysis to optimize grip force distribution and object security. Experimental results demonstrate superior performance on irregularly shaped objects compared to traditional rigid grippers.",
    pdfUrl: "/publications/chen2021_gripper.pdf",
    externalUrl: "https://doi.org/10.1109/LRA.2021.xxxxx"
  }
];
