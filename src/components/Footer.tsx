import React from "react";
import gmailIcon from "../assets/Images/gmailIcon.png";
import linkedInIcon from "../assets/Images/linkedInIcon.png";
import githubIcon from "../assets/Images/githubIcon.png";
import twitterIcon from "../assets/Images/twitterIcon.png";
// import FavoriteIcon from "@mui/icons-material/Favorite";
const Footer: React.FC = () => {
  // const location = useLocation();
  // if (location.pathname !== "/") {
  return (
    <footer>
      <div>
        <span style={{ fontFamily: "Raleway" }}>
          Last Edited: July 2023 &copy;
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <span style={{ fontFamily: "Raleway" }}>Sudhanshu Mishra</span>
        <a href="mailto:smishra007123@gmail.com">
          <img src={gmailIcon} className="social-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/sudhanshu-mishra-34a429166/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedInIcon} className="social-icon" />
        </a>
        <a
          href="https://github.com/sudhanshumishra-js"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} className="social-icon" />
        </a>
        <a
          href="https://twitter.com/siuuudhanshu"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitterIcon} className="social-icon" />
        </a>
      </div>
    </footer>
  );
  // } else return null;
};

export default Footer;
