import "./Portfolio.css";
import budget from "../Images/budget.png";

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

      <img className="budget-photo" src={budget} width="300" alt="budget-bae" />

      <a
        href="https://rockthecode.netlify.app/"
        target="_blank"
        rel="noreferrer"
        alt="rock-the-code"
      >
        <h3 className="proj-desc">Rock The Code</h3>
      </a>
    </div>
  );
}

export default Portfolio;
