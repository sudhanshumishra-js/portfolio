import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
type CardProps = {
  heading: string;
  description?: string | null;
  deployedLink?: string | null;
  githubLink?: string | null;
  stars?: number;
  fork?: number;
  techStack?: Array<string> | null;
};

const Card = (props: CardProps) => {
  return (
    <div className="project-card">
      <div className="card-top">
        <GitHubIcon
          sx={{
            color: "gray",
            fontSize: "36px",
            ":hover": { color: "purple", cursor: "pointer" },
          }}
          className="icons"
          onClick={() =>
            props.githubLink ? window.open(props.githubLink, "_blank") : null
          }
        />
        <OpenInNewIcon
          sx={{
            color: "gray",
            fontSize: "36px",
            ":hover": { color: "purple", cursor: "pointer" },
          }}
          className="icons"
          onClick={() =>
            props.githubLink ? window.open(props.githubLink, "_blank") : null
          }
        />
      </div>
      <div className="card-body">
        <div className="card-body-top">
          <span className="card-heading">{props.heading}</span>
          <span className="card-description">{props.description}</span>
        </div>
        <div className="card-body-footer">
          <span className="card-footer-text">
            {" "}
            {props.techStack ? props.techStack.join(" - ") : null}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
