import React from "react";
// import Loader from "../../components/Loader";
// import { useQuery } from "@tanstack/react-query";
// import { Octokit } from "octokit";
import Card from "../../components/Card";
import GitHubCalendar from "react-github-calendar";
import WorkIcon from "@mui/icons-material/Work";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// interface Repository {
//   id: number;
//   full_name: string;
//   [key: string]: string | number;
// }

const Project = () => {
  // const fetchAllProjects = async () => {
  //   const data = await octokit.request("/users/donOO7/repos", {
  //     type: "collaborator",
  //     visibility: "public",
  //     headers: {
  //       "X-GitHub-Api-Version": "2022-11-28",
  //     },
  //   });
  //   return data;
  // };
  // const { data, isLoading, isFetching } = useQuery({
  //   queryKey: ["project"],
  //   queryFn: fetchAllProjects,
  // });

  // const octokit = new Octokit({
  //   auth: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,
  // });

  // if (isLoading || isFetching) return <Loader />;
  // else
  return (
    <>
      <div className="container">
        <h1 className="headline" style={{ marginTop: "15vh" }}>
          Work
        </h1>

        <div className="center" style={{ marginBottom: "20px" }}>
          <GitHubCalendar username="sudhanshumishra-js" colorScheme="light" />
        </div>

        <h2 className="subheading" style={{ marginTop: "40px" }}>
          professional work
        </h2>
        <div>
          <VerticalTimeline
            animate={true}
            layout={"1-column-left"}
            lineColor="green"
          >
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "antiqueWhite",
                color: "black",
                boxShadow: "0px 2px 0px 0px green",
              }}
              contentArrowStyle={{
                borderRight: "10px solid  antiqueWhite",
              }}
              date="June 2022 - July 2023"
              icon={<WorkIcon />}
              iconStyle={{
                color: "#f67622",
                backgroundColor: "black",
              }}
            >
              <h3 className="vertical-timeline-element-title">Solis.Io</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Software Consultant
              </h4>
              <p>Full Time (Remote) </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "antiquewhite",
                color: "black",
                boxShadow: "0px 2px 0px 0px green",
              }}
              contentArrowStyle={{
                borderRight: "10px solid  antiqueWhite",
              }}
              date="October 2021 - May 2022"
              icon={<WorkIcon />}
              iconStyle={{ color: "#f67622", backgroundColor: "black" }}
            >
              <h3 className="vertical-timeline-element-title">Solis.Io</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Software Consultant Intern
              </h4>
              <p>Internship (Remote)</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "antiqueWhite",
                color: "black",
                boxShadow: "0px 2px 0px 0px green",
              }}
              contentArrowStyle={{
                borderRight: "10px solid  antiqueWhite",
              }}
              date="August 2021 - October 2021"
              icon={<WorkIcon />}
              iconStyle={{
                color: "#f67622",
                backgroundColor: "black",
              }}
            >
              <h3 className="vertical-timeline-element-title">Nodeberry</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Junior Backend Developer
              </h4>
              <p>Internship (Remote) </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>

        <h2 className="subheading" style={{ marginTop: "40px" }}>
          personal projects
        </h2>
        <div className="cards-grid">
          <Card
            heading="Portfolio"
            description={
              "React app illustrating my journey and growth in software development. This portfolio not only showcases my various projects, but also provides an insight into who I am as a person, highlighting my personal interests and passions alongside my technical skills"
            }
            techStack={["ReactJs", "NodeJs"]}
            githubLink={"https://github.com/sudhanshumishra-js/portfolio"}
            deployedLink={"https://sudhanshumishra.netlify.app/"}
          />
          <Card
            heading="Stack Digest"
            description={
              "Stackdigest is a webapp to implement quora like features for stackoverflow which will help in growth of user's knowledge. It constructs a feed which has commonly asked/trending questions on stackoverflow. Through this user can get through most common problems of computer programming and avoid them which would save user's time too. "
            }
            techStack={["HTML", "CSS", "Sprringboot", "MySQL"]}
            githubLink={"https://github.com/sudhanshumishra-js/stackdigest"}
            deployedLink={"https://stackdigest.herokuapp.com/"}
          />

          <Card
            heading="Crypto Price Tracker React"
            description={
              "A react app which fetches current crypto prices from CoinGecko API and having a dynamic search option."
            }
            githubLink={
              "https://github.com/sudhanshumishra-js/CryptoPriceTracker-React"
            }
            deployedLink={"https://crypto-price-checker-react.vercel.app/"}
            techStack={["React", "MUI"]}
          />
        </div>
        {/* <h2 className="subheading" style={{ marginTop: "15vh" }}>
            Complete projects overview (Fteched from GitHub)
          </h2>
          <div className="cards-grid">
            {data?.data.map((repo: Repository, key: number) => {
              return (
                <div key={key} className="project-card">
                  {repo.full_name}
                </div>
              );
            })}
          </div> */}
        <button
          className="btn-primary"
          onClick={() =>
            window.open(
              "https://github.com/sudhanshumishra-js?tab=repositories",
              "_blank",
              "nooperner,noreferrer"
            )
          }
        >
          View on Github
        </button>
      </div>
    </>
  );
};

export default Project;
