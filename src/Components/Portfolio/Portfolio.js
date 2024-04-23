import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="Portfolio">
      <h1 className="project-title">Projects I've Created</h1>
      <a
        href="https://taylor-budget-app-frontend.netlify.app/"
        target="_blank"
        rel="noreferrer"
        alt="budget-bae"
      >
        <h3 className="proj-desc">Budget Bae</h3>
      </a>
      <h3 className="proj-desc">Rock The Code</h3>
    </div>
  );
}

export default Portfolio;
