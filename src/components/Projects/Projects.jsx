const projectList = [
  {
    title: "Product List",
    image: "./assets/images/productlist.png",
    description: "A simple product listing application.",
    link: " https://github.com/Victor645/Product-List",
  },


   {
    title: "Tic-Tac-Toe Game",
    image: "./assets/images/Output 1.png",
    description: "A simple Tic-Tac-Toe game.",
    link: "https://github.com/Victor645/Tic-tac-toe-game",
  },

   {
    title: "Easy Bank Website",
    image: "./assets/images/Easybank.png",
    description: "A simple banking website.",
    link: "https://easy-bank-app-uuq7.vercel.app/",
  },
  ]

export default function Projects() {
  return (
    <div className="projects-section" id="projects">
      <h1>Projects</h1>
      <div className="projects-container">
          {projectList.map((project, index) => (
            <div key={index} className="project-item">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="cta-box">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <div>
                    <h2>{project.title}</h2>
                    <small>{project.description}</small>
                  </div>
                  <span className="arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}
