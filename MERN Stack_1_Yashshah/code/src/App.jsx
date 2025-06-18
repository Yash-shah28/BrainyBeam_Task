/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./App.css";
import CodeIcon from '@mui/icons-material/Code';
import JavascriptIcon from '@mui/icons-material/Javascript';


function App() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleInputChange = (
    e,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...formErrors };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setFormErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form submission logic would go here
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  const skills =
  [
    // Web Development
    { name: "Web Development", proficiency: 90, icon: "fa-solid fa-code" },
    { name: "HTML & CSS", proficiency: 95, icon: "fa-solid fa-code" },
    { name: "JavaScript", proficiency: 90, icon: "fa-brands fa-js" },
    { name: "React.js", proficiency: 75, icon: "fa-brands fa-react" },
    { name: "Node.js", proficiency: 95, icon: "fa-brands fa-node-js" },
    { name: "PHP", proficiency: 60, icon: "fa-brands fa-php" },

    // Backend & APIs
    { name: "RESTful APIs", proficiency: 90, icon: "fa-solid fa-plug" },
    { name: "Database Management", proficiency: 90, icon: "fa-solid fa-database" },

    // Version Control / DevOps
    { name: "Git & Version Control", proficiency: 96, icon: "fa-brands fa-git-alt" },

    // Python / ML
    { name: "Python", proficiency: 85, icon: "fa-brands fa-python" },
    { name: "Machine Learning", proficiency: 70, icon: "fa-solid fa-robot" }
  ];

const projects = [
  {
    id: 1,
    title: "Advocate Accounting System",
    description:
      "Developed a real-life legal case and billing management portal using HTML, CSS, JavaScript, PHP, and MySQL. Built a 3-tier system for advocates, judges, and super admins with advanced case tracking features. Finalist in SSIP Hackathon 2023.",
    image:
      "https://readdy.ai/api/search-image?query=Legal%20case%20management%20portal%20UI%20showing%20case%20list%20and%20billing%20features%20in%20a%20clean%20dashboard%20interface%20with%20minimalist%20design&width=600&height=400&orientation=landscape",
    category: "web",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    link: "https://github.com/Yash-shah28/AdvocateAccountingSystem" 
  },
  {
    id: 2,
    title: "WanderLust - Travel Listing Platform",
    description:
      "A full-stack web application for exploring and managing global travel accommodations with user authentication, dynamic listing creation, and reviews.",
    image: "Wanderlust.jpeg",
    category: "web",
    technologies: ["Node.js", "Express", "MongoDB", "EJS", "Multer", "Cloudinary"],
    link: "https://wanderlust-0fb4.onrender.com/listings"
  },
  {
    id: 3,
    title: "Agrivista – Precision Agriculture Platform",
    description:
      "A full-stack ML-driven application for crop prediction, yield estimation, and fertilizer recommendation with Flask backend and Scikit-learn models.",
    image: "banner.jpg",
    category: "ai",
    technologies: ["Flask", "Python", "Scikit-learn", "Pandas", "NumPy","Node.js", "Express", "MongoDB", "EJS"],
    link: "https://agrivista.onrender.com/"
  }
];



  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const experience = [
    {
      id: 1,
      company: "Personal Projects",
      role: "Full Stack Developer",
      period: "2022 - Present",
      description:
      "Built projects including WanderLust (travel listing platform) and Agrivista (precision agriculture platform with ML)."
    },
    {
      id: 2,
      company: "SSIP Hackathon 2023",
      role: "Finalist",
      period: "Nov 2023",
      description:
      "Led the development of Advocate Accounting System for the backend in PHP — a real-life legal case and billing management portal using PHP and MySQL."
    },
   
  ];

  const education = [
    {
      id: 1,
      institution: "LDRP Institute of Technology and Research, Gandhinagar",
      degree: "B.E - Computer Engineering",
      period: "2022 - 2026",
      description: "Currently pursuing with a CPI of 8.73. Focus on full-stack development, machine learning, and project-based learning."
    },
    {
    id: 2,
    institution: "AES-AG Higher Secondary School ",
    degree: "12th Standard (HSC - Science)",
    period: "2021 - 2022",
    description: "Completed 12th grade with focus on Physics, Chemistry, Mathematics. Secured 70 percentage."
  },
  {
    id: 3,
    institution: "Sarvayogam School",
    degree: "10th Standard (SSC)",
    period: "2019 - 2020",
    description: "Completed 10th grade with 82 percentage."
  }
  ];

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-white bg-opacity-95 shadow-sm z-50 py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-indigo-600">
            Yash
          </a>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none cursor-pointer !rounded-button whitespace-nowrap"
            >
              <i
                className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}
              ></i>
            </button>
          </div>

          <div
            className={`md:flex items-center space-x-8 ${isMenuOpen ? "absolute top-16 left-0 right-0 bg-white shadow-md flex flex-col space-y-4 py-4 px-6" : "hidden"}`}
          >
            <a
              href="#home"
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium"
            >
              Home
            </a>
            <a
              href="#skills"
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium"
            >
              Projects
            </a>
            <a
              href="#resume"
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium"
            >
              Resume
            </a>
            <a
              href="#certificate"
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium"
            >
              Certificate
            </a>
            
          </div>
        </div>
      </nav>


      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20modern%20gradient%20background%20with%20soft%20blue%20to%20purple%20gradient%20on%20the%20right%20side%20and%20clean%20white%20space%20on%20the%20left%20creating%20perfect%20contrast%20for%20text%20visibility%2C%20minimalist%20design%20with%20subtle%20abstract%20shapes%20and%20professional%20atmosphere&width=1440&height=800&seq=7&orientation=landscape')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left md:pr-10 z-10 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              Hi, I&rsquo;m <span className="text-indigo-600">Yash</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-6">
              MERN  Stack Developer
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              I create exceptional digital experiences with clean code and
              thoughtful design. Specializing in modern web technologies and
              user-centered solutions.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="bg-indigo-600 text-white px-8 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer"
              >
                View My Work
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end z-10">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="yash.JPG"
                alt="Yash - Professional Headshot"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Professional Skills
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and
              professional capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mr-4">
                    <i className={`fas ${skill.icon} text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {skill.name}
                  </h3>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                  <div
                    className="bg-indigo-600 h-2.5 rounded-full"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
                <p className="text-right text-sm text-gray-600 font-medium">
                  {skill.proficiency}%
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore a selection of my recent work across various domains and
              technologies.
            </p>
          </div>

          <div className="flex flex-wrap justify-center mb-10">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-6 py-2 m-2 rounded-full font-medium transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer ${activeFilter === "all" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveFilter("web")}
              className={`px-6 py-2 m-2 rounded-full font-medium transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer ${activeFilter === "web" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              Web Development
            </button>
            <button
              onClick={() => setActiveFilter("ai")}
              className={`px-6 py-2 m-2 rounded-full font-medium transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer ${activeFilter === "ai" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              AI & ML
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="relative overflow-hidden h-60">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-white text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-200 text-sm">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors duration-300 flex items-center cursor-pointer"
                  >
                    View Project <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Professional Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A timeline of my professional experience, education, and career
              milestones.
            </p>
            <a
              href="/Yash_Shah_CV.pdf"
              className="inline-flex items-center mt-6 bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer"
            >
              <i className="fas fa-download mr-2"></i> Download Resume
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mr-3">
                  <i className="fas fa-briefcase"></i>
                </span>
                Work Experience
              </h3>

              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div
                    key={exp.id}
                    className="relative pl-8 border-l-2 border-indigo-200"
                  >
                    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-indigo-600"></div>
                    <div className="mb-1 text-indigo-600 font-medium">
                      {exp.period}
                    </div>
                    <h4 className="text-xl font-bold text-gray-800">
                      {exp.role}
                    </h4>
                    <div className="text-gray-600 font-medium mb-2">
                      {exp.company}
                    </div>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mr-3">
                  <i className="fas fa-graduation-cap"></i>
                </span>
                Education
              </h3>

              <div className="space-y-8">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="relative pl-8 border-l-2 border-indigo-200"
                  >
                    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-indigo-600"></div>
                    <div className="mb-1 text-indigo-600 font-medium">
                      {edu.period}
                    </div>
                    <h4 className="text-xl font-bold text-gray-800">
                      {edu.degree}
                    </h4>
                    <div className="text-gray-600 font-medium mb-2">
                      {edu.institution}
                    </div>
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                ))}

              </div>
            

             
            </div>

            
             
           
          </div>
        </div>
      </section>
      
      {/* Certificate Section */}
      <section id="certificate" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex justify-center items-center">
          <span className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mr-3">
            <i className="fas fa-certificate"></i>
          </span>
            Certifications
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
              SSIP Hackathon Finalist (Advocate Accounting System)
            </span>
            <span className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
              Machine Learning (NPTEL)
            </span>
            <span className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
              Tally ERP 9 (C-DAC)
            </span>
            <span className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
              Enhancing Soft Skills and Personality (NPTEL)
            </span>
            <span className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
              SARVA NETRUTVA (KSV)
            </span>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Yash</h3>
              <p className="text-gray-400 mb-6 max-w-md">
                Creating exceptional digital experiences through clean code and
                thoughtful design. Let&apos;s build something amazing together.
              </p>
              
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#resume"
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Resume
                  </a>
                </li>
                <li>
                  <a
                    href="#certificate"
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Certificate
                  </a>
                </li>
              </ul>
            </div>

            <div >
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <i className="fas fa-envelope mr-2"></i> yashshah28072004@gmail.com
                </li>
                <li className="flex items-center text-gray-400">
                  <i className="fas fa-phone mr-2"></i> +91 9316137101
                </li>
                <li className="flex items-center text-gray-400">
                  <i className="fas fa-map-marker-alt mr-2"></i> Ahmedabad, Gujarat, India
                </li>
              </ul>
              
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/yash-shah-584b64248/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                <i className="fab fa-linkedin text-xl"></i>
                </a>

                <a
                  href="https://github.com/Yash-shah28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                <i className="fab fa-github text-xl"></i>
                </a>
              </div>
              
            </div>
            
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Yash. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300 cursor-pointer"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300 cursor-pointer"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300 cursor-pointer"
              >
                Cookies Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
