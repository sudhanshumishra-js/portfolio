import React from "react";
import { useStyles } from "./Contact.styles";
import { InlineWidget } from "react-calendly";
import emailIcon from "../../assets/Images/icons8-email-64.png";
import linkedInIcon from "../../assets/Images/linkedInIcon.png";
import githubIcon from "../../assets/Images/githubIcon.png";
import twitterIcon from "../../assets/Images/twitterIcon.png";
import telegramIcon from "../../assets/Images/icons8-telegram-48.png";
import instagramIcon from "../../assets/Images/icons8-instagram-64.png";
import Tooltip, { TooltipProps } from "@mui/material/Tooltip";
import styled from "@emotion/styled";

const Contact = () => {
  const [emailTooltipOpen, setEmailTooltipOpen] =
    React.useState<boolean>(false);
  React.useEffect(() => {
    if (emailTooltipOpen) {
      const timer = setTimeout(() => {
        setEmailTooltipOpen(false);
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [emailTooltipOpen]);
  const classes = useStyles();
  return (
    <>
      <div className="container">
        <h1 className="margin-top-100" style={{ fontFamily: "Bebas Neue" }}>
          Lets connect
        </h1>
        <span style={{ fontFamily: "Raleway", marginBottom: "20px" }}>
          Whether you have an opportunity to share, need help with a project, or
          just want to say hi, I&apos;d love to hear from you!
          <br />
          Here&apos;s how you can reach me
        </span>
        <div className={classes.contactsDiv}>
          <StyledTooltip
            open={emailTooltipOpen}
            onClose={() => setEmailTooltipOpen(false)}
            onBlur={() => setEmailTooltipOpen(false)}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title={
              <div className="tooltip-text-container">
                Email copied to clipboard!
              </div>
            }
            placement="top"
          >
            <button
              className={classes.btnContacts}
              onClick={() => {
                setEmailTooltipOpen(true);
                navigator.clipboard.writeText("smishra007123@gmail.com");
              }}
            >
              <img src={emailIcon} className="contacts-icon-img" />
              Email
            </button>
          </StyledTooltip>
          <a
            href="https://www.linkedin.com/in/sudhanshu-mishra-34a429166/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={classes.btnContacts}>
              <img src={linkedInIcon} className="contacts-icon-img" /> LinkedIn
            </button>
          </a>

          <a
            href="https://twitter.com/siuuudhanshu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={classes.btnContacts}>
              <img src={twitterIcon} className="contacts-icon-img" /> Twitter(X)
            </button>
          </a>

          <a
            href="https://t.me/sudhanshumishra07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={classes.btnContacts}>
              <img src={telegramIcon} className="contacts-icon-img" /> Telegram
            </button>
          </a>

          <a
            href="https://github.com/donOO7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={classes.btnContacts}>
              <img src={githubIcon} className="contacts-icon-img" /> GitHub
            </button>
          </a>
          <a
            href="https://www.instagram.com/siuudhanshu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={classes.btnContacts}>
              <img src={instagramIcon} className="contacts-icon-img" />
              Instagram
            </button>
          </a>
        </div>
        <span
          style={{
            fontFamily: "Raleway",
            marginBottom: "20px",
            marginTop: "40px",
          }}
        >
          Eager to collaborate or have a question? Let&apos;s have a detailed
          conversation - book a meeting time that suits you.
        </span>

        <div className="calendly-widget-container">
          <InlineWidget url="https://calendly.com/sudhanshumishra/30min" />
        </div>
      </div>
    </>
  );
};

export default Contact;

const StyledTooltip = styled((props: TooltipProps) => (
  <Tooltip classes={{ popper: props.className }} {...props} />
))`
  & .MuiTooltip-tooltip {
    background-color: white;
    color: #f67622;

    font-size: 14px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
