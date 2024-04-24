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

          <a
            href="https://github.com/TaylorWill94/budget-app-frontend"
            target="_blank"
            rel="noreferrer"
            alt="budget-bae-frontend"
          >
            <h2 className="git">GitHub</h2>
          </a>
        </a>

        <img
          className="budget-photo"
          src={budget}
          width="300"
          alt="budget-bae"
        />
      </div>

      {/* <div className="rock-sec">
        <a
          href="https://rockthecode.netlify.app/"
          target="_blank"
          rel="noreferrer"
          alt="rock-the-code"
        >
          <h3 className="proj-desc">rock the code</h3>
        </a>
      </div> */}
    </div>
  );
}

export default Portfolio;
