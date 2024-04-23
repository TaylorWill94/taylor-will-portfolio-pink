import "./Portfolio.css";
import budget from "../Images/budget.png";

function Portfolio() {
  return (
    <div className="Portfolio">
      <h1 className="project-title">Projects</h1>

      <div className="budget-bae-sec">
        <a
          href="https://taylor-budget-app-frontend.netlify.app/"
          target="_blank"
          rel="noreferrer"
          alt="budget-bae"
        >
          <h3 className="proj-desc">budget bae</h3>
          <h3 className="budget-desc">
            A project dedicated to finaical freedom. Keep a budget.
          </h3>
        </a>

        <img
          className="budget-photo"
          src={budget}
          width="300"
          alt="budget-bae"
        />
      </div>
      <a
        href="https://rockthecode.netlify.app/"
        target="_blank"
        rel="noreferrer"
        alt="rock-the-code"
      >
        <h3 className="proj-desc">rock the code</h3>
      </a>
    </div>
  );
}

export default Portfolio;
