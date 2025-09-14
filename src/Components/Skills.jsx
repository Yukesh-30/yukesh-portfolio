import React from "react";

function Skills() {
  const skills = [
    { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "C++", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Firebase", img: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
    { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  ];

  return (
    <section className="w-screen min-h-screen bg-[#ffffff] text-white flex flex-col items-center px-6 py-12">
      {/* Section Heading */}
      <h2 className="text-4xl font-bold font-oswald text-red-500 mb-4">What I Know?</h2>
      <p className="font-poppins text-black text-center max-w-3xl mb-12">
        I am a developer with experience in frontend, backend, and deployment tools.
        I enjoy building scalable web applications and exploring new technologies.
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-[#ffffff] p-6 rounded-lg shadow-md hover:shadow-red-500/40 transition"
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="w-16 h-16 object-contain mb-4"
            />
            <p className="font-semibold text-black">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
