// eslint-disable-next-line no-undef

// eslint-disable-next-line no-undef
const isMobile = window.innerWidth < 700;

export default {
  container: {
    /* background-color: #282c34; */
    // background: "url(/assets/background.svg) bottom center",
    // background: #0f0c29;  /* fallback for old browsers */
    // background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
    background: "transparent",
    // "linear-gradient(to right, #24243e, #302b63, #0f0c29)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
    // "linear-gradient(to right,#a6ffcb,#12d8fa,#1fa2ff)",
    // marginTop: "54px",
    minHeight: `calc( 100vh - ${isMobile ? "0px" : "0px"} )`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
    position: "relative",
  },
  icon: {
    position: "absolute",
    bottom: isMobile ? "60px" : "20px",
    // transition: "2s transform ease-in-out",
    fill: "white",
    animation: "headerIcon",
    animationDuration: "1s",
    animationIterationCount: "infinite",
    animationTimingFunction: "ease-in-out",
    animationDirection: "alternate",
  },
  innerContainer: {
    marginTop: "25%",
    marginBottom: isMobile ? "8rem" : "",
  },
  header1: {
    fontSize: isMobile ? "1.5rem" : "2.5rem",
    padding: isMobile ? "0rem 2rem" : "0px 4px",
    background: "rgba(0,0,0,0.4)",
    borderRadius: "8px",
  },
  header2: {
    padding: isMobile ? "0rem 2rem" : "0px 4px",
    background: "rgba(0,0,0,0.4)",
    borderRadius: "8px",
  },
  textBox: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "8px",
  },
  header3: {
    padding: isMobile ? "0rem 2rem" : "0px 4px",
    background: "rgba(0,0,0,0.4)",
    borderRadius: "8px",
  },
  typerBox: {
    background: "rgba(0,0,0,0.4)",
    borderRadius: "8px",
    maxHeight: "41px",
    padding: "0px 8px",
    position: "relative",
  },
};
