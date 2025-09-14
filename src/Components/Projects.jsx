import React from "react";

const projects = [
  {
    title: "ProcVue – Task Manager (MERN Stack)",
    desc: "Built a full-stack task manager with deadline tracking and role-based user access control.",
    img: "https://img.icons8.com/ios-filled/100/000000/source-code.png", // placeholder black & white
  },
  {
    title: "modLRN – AI-driven Learning Platform",
    desc: "Full-stack platform with dynamic quiz generation, Gemini API integration, and Judge0 for real-time execution.",
    img: "https://img.icons8.com/ios-filled/100/000000/artificial-intelligence.png",
    link: "https://modlrn.vercel.app/",
  },
  {
    title: "ServerWell – SAP Hackathon Project",
    desc: "End-to-end hotel solution for supply chain optimization with ML models & Flask backend.",
    img: "https://img.icons8.com/ios-filled/100/000000/cloud.png",
  },
  {
    title: "Online Examination System – Java",
    desc: "Developed a scalable exam portal with performance analytics & Amazon S3 integration.",
    img: "https://img.icons8.com/ios-filled/100/000000/exam.png",
  },
  {
    title: "Food Delivery System – C",
    desc: "Shortest path & Apriori algorithm for restaurant recommender & frequent itemsets.",
    img: "https://img.icons8.com/ios-filled/100/000000/restaurant.png",
  },
  {
    title: "Food Inventory Manager – Java + MySQL",
    desc: "Backend with real-time order tracking & assignment features.",
    img: "https://img.icons8.com/ios-filled/100/000000/meal.png",
  },
  {
    title: "Flutter – Chat Bot",
    desc: "Built a chatbot in Flutter using Gemini API.",
    img: "https://img.icons8.com/ios-filled/100/000000/chat.png",
  },
  {
    title: "UI/UX Design – OTT Platform",
    desc: "1st Prize winning Figma prototypes converted to responsive designs.",
    img: "https://img.icons8.com/ios-filled/100/000000/design.png",
  },
];

export default function Projects() {
  return (
    <section className="bg-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-red-500 mb-10">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border border-red-500 rounded-lg shadow-md hover:shadow-lg p-4 flex flex-col items-center text-center transition-transform transform hover:-translate-y-1 min-h-[220px]"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-16 h-16 mb-3 object-contain"
            />
            <h3 className="text-lg font-semibold text-red-500 mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-gray-700 mb-3">{project.desc}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
