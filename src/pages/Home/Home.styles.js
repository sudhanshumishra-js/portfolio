import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  homeContainer: {
    width: "100%",
    position: "relative",
  },
  homeSlides: {
    position: "sticky",
    top: "0",
    minHeight: "100vh",
    maxHeight: "200vh",
  },

  introSlide: {
    backgroundColor: "black",
    color: "white",
    display: "flex",
    minHeight: "100vh",
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    "@media (min-width: 768px)": {
      paddingLeft: "2rem",
      paddingRight: "2rem",
    },
    "@media (min-width: 992px)": {
      paddingLeft: "3rem",
      paddingRight: "3rem",
    },
    "@media (max-width: 767px)": {
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
  },
  aboutSlide: {
    background: "white",
    color: "black",
    minHeight: "120vh",
    width: "100%",
    "@media (min-width: 768px)": {
      paddingLeft: "2rem",
      paddingRight: "2rem",
      borderTopLeftRadius: "70px",
      borderTopRightRadius: "70px",
    },
    "@media (min-width: 992px)": {
      paddingLeft: "3rem",
      paddingRight: "3rem",
      borderTopLeftRadius: "80px",
      borderTopRightRadius: "80px",
    },
    "@media (max-width: 767px)": {
      paddingLeft: "1rem",
      paddingRight: "1rem",
      borderTopLeftRadius: "50px",
      borderTopRightRadius: "50px",
    },
  },
  contactSlide: {
    background:
      "radial-gradient(at right top, rgb(254, 215, 170), rgb(219, 234, 254), rgb(252, 231, 243))",
    color: "black",
    minHeight: "100vh",
    width: "100%",
    paddingTop: "100px",
    marginTop: "-10vh",
    "@media (min-width: 768px)": {
      paddingLeft: "2rem",
      paddingRight: "2rem",
      borderTopLeftRadius: "70px",
      borderTopRightRadius: "70px",
    },
    "@media (min-width: 992px)": {
      paddingLeft: "3rem",
      paddingRight: "3rem",
      borderTopLeftRadius: "80px",
      borderTopRightRadius: "80px",
    },
    "@media (max-width: 767px)": {
      paddingLeft: "1rem",
      paddingRight: "1rem",
      borderTopLeftRadius: "50px",
      borderTopRightRadius: "50px",
    },
  },
  nameDiv: {
    fontSize: "8rem",
    fontWeight: "300",
    display: "flex",
    flexDirection: "column",
    gap: "50px",
    maxWidth: "100%",
    overflow: "hidden",
    flexWrap: "wrap",
    wordBreak: "break-all",
    "@media(max-width:1199px)": {
      fontSize: "6rem",
    },
    "@media(max-width:786px)": {
      fontSize: "2rem",
      lineHeight: "100%",
    },
  },
  introDescription: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "40px",
  },
  imageAndDescriptionContainer: {
    paddingTop: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "25px",
  },
  imageCicularDiv: {
    height: "100%",
    width: "100%",
    maxWidth: "200px",
    maxHeight: "200px",
    borderRadius: "50%",
    border: "2px solid grey",
    cursor: "pointer",
    "&:hover": {
      border: "2px solid #00FF00",
      boxShadow: "0px 0px 10px 0px green",
    },
    "@media(min-width:786px)": {
      maxWidth: "300px",
      maxHeight: "300px",
    },
  },
  imageLoadingDiv: {
    height: "200px",
    width: "200px",
    borderRadius: "50%",
    cursor: "pointer",
    "&:hover": {
      border: "2px solid #00FF00",
      boxShadow: "0px 0px 10px 0px green",
    },
    "@media(min-width:786px)": {
      maxWidth: "300px",
      maxHeight: "300px",
    },
  },
  description: {
    width: "90%",
    "@media(min-width:786px)": {
      width: "60%",
    },
  },
  resumeSectionContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    marginTop: "100px",
    "@media(max-width:786px)": {
      marginTop: "100px",
    },
  },
});
