"use client";
import { useState } from "react";
import {
  Cloud,
  Database,
  GitBranch,
  Github,
  Server,
  Terminal,
  Play,
  PieChart,
  Settings,
  Check,
  Codesandbox,
  Workflow,
} from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState("all");

  // Course topics with detailed descriptions
  const topics = [
    {
      icon: <Cloud className="w-10 h-10 text-blue-500" />,
      title: "Cloud Infrastructure",
      category: "cloud",
      description:
        "Understanding cloud service models (IaaS, PaaS, SaaS) and deployment strategies across AWS, Azure, and GCP. We learned infrastructure provisioning, scaling strategies, and cost optimization techniques.",
      skills: ["AWS", "Azure", "GCP", "Cloud Architecture"],
    },
    {
      icon: <Codesandbox className="w-10 h-10 text-blue-500" />,
      title: "Docker & Containerization",
      category: "containers",
      description:
        "Mastered container fundamentals and best practices for creating efficient Docker images. We built multi-container applications with Docker Compose and implemented container security measures.",
      skills: ["Docker", "Container Orchestration", "Docker Compose", "Image Optimization"],
    },
    {
      icon: <Server className="w-10 h-10 text-blue-500" />,
      title: "Kubernetes",
      category: "orchestration",
      description:
        "Deployed and managed applications using Kubernetes. We configured pods, deployments, services, and implemented advanced features like horizontal pod autoscaling and volume management.",
      skills: ["K8s Architecture", "Helm Charts", "Pod Management", "Service Mesh"],
    },
    {
      icon: <Workflow className="w-10 h-10 text-blue-500" />,
      title: "CI/CD Pipelines",
      category: "automation",
      description:
        "Built automated pipelines for continuous integration and deployment using GitHub Actions, Jenkins, and GitLab CI. We implemented testing strategies and deployment safeguards like canary releases.",
      skills: ["Jenkins", "GitHub Actions", "GitLab CI", "ArgoCD"],
    },
    {
      icon: <GitBranch className="w-10 h-10 text-blue-500" />,
      title: "Git & Version Control",
      category: "collaboration",
      description:
        "Applied Git branching strategies like GitFlow and trunk-based development. We practiced collaborative workflows with pull requests, code reviews, and implemented automated testing gates.",
      skills: ["Git Flow", "Branch Management", "Merge Strategies", "Code Reviews"],
    },
    {
      icon: <Database className="w-10 h-10 text-blue-500" />,
      title: "Infrastructure as Code",
      category: "iac",
      description:
        "Automated infrastructure provisioning using Terraform and CloudFormation. We implemented modular, reusable infrastructure components and practiced state management techniques.",
      skills: ["Terraform", "CloudFormation", "Pulumi", "State Management"],
    },
    {
      icon: <Terminal className="w-10 h-10 text-blue-500" />,
      title: "Linux & Shell Scripting",
      category: "fundamentals",
      description:
        "Mastered Linux system administration and automation through shell scripting. We created deployment scripts, system monitoring tools, and implemented file management techniques.",
      skills: ["Bash", "Shell Scripting", "Linux Admin", "Cronjobs"],
    },
    {
      icon: <PieChart className="w-10 h-10 text-blue-500" />,
      title: "Monitoring & Observability",
      category: "operations",
      description:
        "Implemented comprehensive monitoring solutions with Prometheus and Grafana. We built custom dashboards, alerts, and practiced incident response procedures based on SLOs.",
      skills: ["Prometheus", "Grafana", "ELK Stack", "Log Management"],
    },
    {
      icon: <Settings className="w-10 h-10 text-blue-500" />,
      title: "Configuration Management",
      category: "automation",
      description:
        "Automated system configuration at scale using Ansible. We implemented idempotent playbooks, roles, and integrated with CI/CD pipelines for configuration deployment.",
      skills: ["Ansible", "Chef", "Puppet", "Configuration Drift"],
    },
  ];

  // Filter topics based on active tab
  const filteredTopics = activeTab === "all" ? topics : topics.filter((topic) => topic.category === activeTab);

  // Categories for filtering
  const categories = [
    { id: "all", label: "All Topics" },
    { id: "cloud", label: "Cloud" },
    { id: "containers", label: "Containers" },
    { id: "orchestration", label: "Orchestration" },
    { id: "automation", label: "Automation" },
    { id: "iac", label: "IaC" },
    { id: "operations", label: "Operations" },
    { id: "collaboration", label: "Collaboration" },
    { id: "fundamentals", label: "Fundamentals" },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white text-gray-800">
      {/* Navbar */}
      <nav className="w-full py-4 px-6 bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Server className="h-6 w-6 text-blue-600" />
            <h1 className="text-xl font-bold text-blue-600">DevOps Mastery</h1>
          </div>
          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#journey" className="text-white hover:text-blue-500 transition">
                Our Journey
              </a>
            </li>
            <li>
              <a href="#topics" className="text-gray-700 hover:text-blue-500 transition">
                Topics
              </a>
            </li>
            <li>
              <a href="#projects" className="text-gray-700 hover:text-blue-500 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-700 hover:text-blue-500 transition">
                Contact
              </a>
            </li>
          </ul>
          <div className="block md:hidden">
            <button className="p-2 text-gray-700 hover:text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-800">DevOps & Cloud Engineering Portfolio</h2>
          <div className="flex justify-center mb-6">
            <div className="h-1 w-24 bg-blue-500 rounded"></div>
          </div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Showcasing our journey through the "Essentials in Cloud and DevOps" course — where we transformed theory
            into practical skills.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#journey"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
            >
              <Play className="h-5 w-5 text-white" />
              <div className="text-white">About us</div>
            </a>
            <a
              href="#topics"
              className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              Explore Skills
            </a>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section id="journey" className="container mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">Our Learning Journey</h2>
        <div className="flex justify-center mb-10">
          <div className="h-1 w-16 bg-blue-500 rounded"></div>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:shrink-0 bg-blue-600 md:w-48 flex items-center justify-center p-6">
              <div className="text-white text-center">
                <h3 className="font-bold text-xl mb-2">Dhruv & Raja</h3>
                <p className="text-blue-100">DevOps Engineers</p>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-700 mb-4">
                Throughout the "Essentials in Cloud and DevOps" course, we developed a comprehensive understanding of
                modern DevOps practices and cloud technologies. Starting with fundamental concepts, we progressively
                built expertise in containerization, orchestration, CI/CD, and infrastructure automation.
              </p>
              <p className="text-gray-700 mb-4">
                The hands-on projects allowed us to implement real-world solutions, from setting up multi-stage CI/CD
                pipelines to deploying microservices on Kubernetes clusters. We learned to bridge the gap between
                development and operations, creating efficient, scalable, and automated workflows.
              </p>
              <p className="text-gray-700">
                Our portfolio showcases not just theoretical knowledge, but practical implementations that demonstrate
                our ability to solve complex deployment challenges and optimize infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Topics Section with filtering */}
      <section id="topics" className="container mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">Core Technologies & Skills</h2>
        <div className="flex justify-center mb-6">
          <div className="h-1 w-16 bg-blue-500 rounded"></div>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 text-center">
          Explore the key DevOps and cloud technologies we've mastered through comprehensive study and hands-on
          projects.
        </p>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeTab === category.id ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTopics.map((topic, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border border-gray-100 flex flex-col h-full"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-blue-50">{topic.icon}</div>
                <h3 className="text-xl font-semibold ml-4">{topic.title}</h3>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">{topic.description}</p>
              <div className="mt-auto">
                <h4 className="font-medium text-gray-700 mb-2">Key Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {topic.skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">Our Projects</h2>
          <div className="flex justify-center mb-6">
            <div className="h-1 w-16 bg-blue-500 rounded"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 text-center">
            Real-world implementations showcasing our DevOps expertise
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Project 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-700">Microservices Deployment Platform</h3>
                <p className="text-gray-600 mb-4">
                  Built a complete CI/CD pipeline for microservices using GitHub Actions, Docker, and Kubernetes.
                  Implemented automatic testing, versioning, and blue-green deployments.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Kubernetes</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Docker</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">GitHub Actions</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">ArgoCD</span>
                </div>
                <div className="mt-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    <Github className="h-4 w-4 mr-2" /> View Repository
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-700">Infrastructure as Code Framework</h3>
                <p className="text-gray-600 mb-4">
                  Created a reusable Terraform module library for rapid cloud provisioning. Implemented
                  multi-environment support with proper state management and security best practices.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Terraform</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">AWS</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Jenkins</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">GitOps</span>
                </div>
                <div className="mt-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    <Github className="h-4 w-4 mr-2" /> View Repository
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">Get In Touch</h2>
        <div className="flex justify-center mb-6">
          <div className="h-1 w-16 bg-blue-500 rounded"></div>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 text-center">
          Interested in collaborating or learning more about our DevOps journey? We'd love to connect!
        </p>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">contact@devopsmastery.com</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Github className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="ml-3 text-gray-700">github.com/dhruv-raja-devops</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4">Our Team</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <span className="text-gray-800 font-medium">Dhruv</span>
                    <p className="text-gray-600 text-sm">DevOps Engineer | Cloud Specialist</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <span className="text-gray-800 font-medium">Raja</span>
                    <p className="text-gray-600 text-sm">Infrastructure Engineer | CI/CD Specialist</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center"
                >
                  <Check className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Server className="h-6 w-6 text-blue-400 mr-2" />
              <span className="text-lg font-bold">DevOps Mastery</span>
            </div>
            <div className="text-gray-400 text-sm">© {new Date().getFullYear()} Dhruv & Raja. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
