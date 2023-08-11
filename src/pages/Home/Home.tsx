import React from "react";
import { useStyles } from "./Home.styles";
import profilePhoto from "../../assets/Images/profilePhoto.jpg";
import resumeImage from "../../assets/Images/resumeImage.png";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useSpring, animated, config } from "react-spring";

const Home: React.FC = () => {
  const calc = (x: number, y: number) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1,
  ];

  const trans = (x: number, y: number, s: number) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
  const [resumeImageProps, setResumeImageProps] = useSpring(() => ({
    xys: [0, 0, 1],
    config: config.gentle,
  }));

  const classes = useStyles();
  return (
    <>
      <div className={classes.homeContainer}>
        <section className={classes.homeSlides}>
          <div className={classes.introSlide}>
            <div className={classes.nameDiv}>
              <span className="bold-font">Hi I&apos;m</span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  lineHeight: "90%",
                }}
              >
                <span className="bold-font">Sudhanshu</span>
                <span className="bold-font">Mishra</span>
              </div>
            </div>
            <div className={classes.introDescription}>
              <div className="flex-column" style={{ gap: "20px" }}>
                <span className="bold">
                  <RoughNotation
                    animate={true}
                    animationDelay={5}
                    animationDuration={800}
                    type="highlight"
                    color="#FF4E17"
                    show={true}
                  >
                    Portfolio-V2
                  </RoughNotation>
                </span>
                <div className="flex-column">
                  <span>Previous update: V1 (2019)</span>
                  <span>Upcoming update: V3 (Expected : Nov. 2023)</span>
                </div>
              </div>
              <div className="flex-column" style={{ gap: "30px" }}>
                <span className="bold">
                  <RoughNotation
                    animate={true}
                    animationDelay={5}
                    animationDuration={800}
                    type="box"
                    color="#FF4E17"
                    show={true}
                  >
                    Software Engineer/Developer
                  </RoughNotation>
                </span>
                <span>2022 CS grad (IIITV)</span>
              </div>
            </div>
          </div>
        </section>
        <section
          className={classes.homeSlides}
          style={{ top: "-30vh", position: "sticky" }}
        >
          <div className={classes.aboutSlide}>
            <div className={classes.imageAndDescriptionContainer}>
              <h1 className="headline">
                I architect build and optimize web experiences
              </h1>
              <div>
                <img src={profilePhoto} className={classes.imageCicularDiv} />
              </div>
              <div className={classes.description}>
                <RoughNotationGroup show={true}>
                  <RoughNotation
                    animate={true}
                    animationDelay={5}
                    animationDuration={800}
                    type="bracket"
                    color="#FF4E17"
                    show={true}
                    brackets={["left", "right"]}
                  >
                    <article className="text">
                      Currently I am working as a
                      <RoughNotation
                        animate={true}
                        animationDelay={5}
                        animationDuration={800}
                        type="highlight"
                        color="pink"
                        show={true}
                      >
                        <span className="no-break">&nbsp;full stack&nbsp;</span>
                      </RoughNotation>
                      developer consultant at a web3 startup building&nbsp;
                      <a
                        href="https://www.solis.market"
                        target="_blank"
                        rel="noreferrer"
                      >
                        NFT marketplace
                      </a>
                      <br />
                      <br />I bring a strong foundation in both front-end and
                      back-end development to every project. My expertise spans
                      from crafting dynamic&nbsp;
                      <RoughNotation
                        animate={true}
                        animationDelay={5}
                        animationDuration={800}
                        type="box"
                        color="orange"
                        show={true}
                      >
                        <span className="no-break">
                          &nbsp;user interfaces&nbsp;
                        </span>
                      </RoughNotation>
                      &nbsp;integrating blockchain wallets , to writing
                      optimized &nbsp;
                      <RoughNotation
                        animate={true}
                        animationDelay={5}
                        animationDuration={800}
                        type="highlight"
                        color="yellow"
                        show={true}
                      >
                        <span className="no-break">
                          {" "}
                          &nbsp;smart contracts&nbsp;{" "}
                        </span>
                      </RoughNotation>
                      <br />
                      <br />I am proficient in an array of technologies
                      including React, Node.js, MySQL, and Solidity. With a
                      solid grounding in HTML5, CSS, and modern JavaScript, I am
                      equipped to tackle challenges and build efficient,
                      scalable solutions
                      <br />
                      <br />
                      <br />
                      <br />
                    </article>
                  </RoughNotation>
                </RoughNotationGroup>
              </div>
            </div>
          </div>
        </section>
        <section className={classes.homeSlides}>
          <div className={classes.contactSlide}>
            <h1 className="headline">Resume</h1>
            <div className={classes.resumeSectionContainer}>
              <animated.img
                src={resumeImage}
                className="resume-image"
                onMouseMove={({ clientX: x, clientY: y }) =>
                  setResumeImageProps({ xys: calc(x, y) })
                }
                onMouseLeave={() => setResumeImageProps({ xys: [0, 0, 1] })}
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1G-bJ6OhLne3xAZvxYx0wa6hNdZxdwJyy/view?usp=sharing",
                    "_blank"
                  )
                }
                style={{ transform: resumeImageProps.xys.interpolate(trans) }}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
