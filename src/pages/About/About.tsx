import React from "react";
import { useStyles } from "./About.styles";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
// import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import Tooltip, { TooltipProps } from "@mui/material/Tooltip";
import styled from "@emotion/styled";
const About: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <div className="container">
        <h1 className={classes.aboutMeHeading}>About Me</h1>

        <span className={classes.aboutMeSpan}>
          Hello there! I&apos;m Sudhanshu Mishra, a software developer with a
          passion for building and developing revolutionary products. Born and
          raised in{" "}
          <a
            href="https://goo.gl/maps/tfMz7i9vrpwoN95N7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lucknow
          </a>{" "}
          , I have always been fascinated with gadgets and tech. This
          fascination led me to pursue a degree in Computer Science from IIIT
          (Vadodara) . Throughout my studies, I had the opportunity to delve
          deep into various aspects of computer science. This helped cement my
          interest in this field and motivated me to further hone my skills in
          this area. After graduation, I worked at&nbsp;
          <a
            href="https://www.solis.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Solis.Io
          </a>
          &nbsp;building{" "}
          <a
            href="https://www.solis.market"
            target="_blank"
            rel="noopener noreferrer"
          >
            NFT Marketplace
          </a>
          . In my free time, I can be found working on some side projects,
          playing cricket, playing some online games or planning for the next
          travel destination.
        </span>
        <h2 className={classes.subheading}>Setup/Uses</h2>
        <div className={classes.setupList}>
          <div className={classes.productRowDiv}>
            <div>
              <span className={classes.productRowKeySpan}>
                Primary development system
              </span>
            </div>
            <span className={classes.productRowValueSpan}>
              Macbook Pro M1 pro (2021 version)
            </span>
          </div>
          <div className={classes.productRowDiv}>
            <div>
              <span className={classes.productRowKeySpan}>
                Secondary laptop
              </span>
            </div>
            <span className={classes.productRowValueSpan}>
              Lenovo Ideapad 330s (2018)
            </span>
          </div>
          <div className={classes.productRowDiv}>
            <div>
              <span className={classes.productRowKeySpan}>
                Monitor/Display system
              </span>
            </div>
            <span className={classes.productRowValueSpan}>
              Samsung 21 inch monitor (not in use)
            </span>
          </div>
          <div className={classes.productRowDiv}>
            <div>
              <span className={classes.productRowKeySpan}>Keyboard/Mouse</span>
            </div>
            <span className={classes.productRowValueSpan}>
              Some random keyboard and mouse :)
            </span>
          </div>
          <div className={classes.productRowDiv}>
            <div>
              <span className={classes.productRowKeySpan}>
                Prospective upgrades
              </span>
            </div>
            <span className={classes.productRowValueSpan}>
              Keychron Q1
              <a
                href="https://keychron.in/product/keychron-q1-qmk-custom-mechanical-keyboard/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <OpenInNewIcon />
              </a>
              Standing desk
              <a
                href="https://www.ergoyou.in/products/ergoyou-height-adjustable-desk-with-wood-grain-table-top-dual-motor-3-stage?variant=35910890389661"
                target="_blank"
                rel="noopener noreferrer"
              >
                <OpenInNewIcon />
              </a>{" "}
            </span>
          </div>
        </div>
        <h2 className={classes.subheading}>Interests/Hobbies</h2>
        <div className={classes.setupList}>
          <div className={classes.hobbyRowDiv}>
            <div>
              <span className={classes.hobbyRowKeySpan}>Outdoor sports</span>
            </div>
            <span className={classes.productRowValueSpan}>
              Cricket
              <StyledTooltip
                title={"Right handed batsman/Right arm pace"}
                placement="top"
              >
                <SportsCricketIcon
                  sx={{ color: "lightblue", cursor: "pointer" }}
                />
              </StyledTooltip>
              Football
              <StyledTooltip placement="top" title={"Goalkeeper"}>
                <SportsSoccerIcon sx={{ color: "black", cursor: "pointer" }} />
              </StyledTooltip>
            </span>
          </div>
          <div className={classes.hobbyRowDiv}>
            <div>
              <span className={classes.hobbyRowKeySpan}>online games</span>
            </div>
            <span className={classes.productRowValueSpan}>
              FPS PC games, Battlegrounds mobile{" "}
              <StyledTooltip
                placement="top"
                title={"Some fav games: GTA series, NFS series, PUBG mobile"}
              >
                <VideogameAssetIcon
                  sx={{ color: "silver", cursor: "pointer" }}
                />
              </StyledTooltip>{" "}
            </span>
          </div>
          <div className={classes.hobbyRowDiv}>
            <div>
              <span className={classes.hobbyRowKeySpan}>Books</span>
            </div>
            {/* <span className={classes.productRowValueSpan}>
              Exploring
              <StyledTooltip
                placement="top"
                title={
                  "Started reading again after a very long time. Used to read novels in school time..."
                }
              >
                <AutoStoriesIcon sx={{ color: "black", cursor: "pointer" }} />
              </StyledTooltip>
            </span> */}
          </div>
          <div className={classes.hobbyRowDiv}>
            <div>
              <span className={classes.hobbyRowKeySpan}>
                Writing stories / rap music
              </span>
            </div>
          </div>
        </div>
        <div className={classes.noteDiv}>
          * Stay tuned for Portfolio Version 3 - featuring innovative and
          engaging interaction options for users!
        </div>
      </div>
    </>
  );
};

export default About;

const StyledTooltip = styled((props: TooltipProps) => (
  <Tooltip classes={{ popper: props.className }} {...props} />
))`
  & .MuiTooltip-tooltip {
    background-color: white;
    color: black;
    border: 2px solid pink;
    font-size: 14px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
