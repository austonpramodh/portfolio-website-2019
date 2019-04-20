// eslint-disable-next-line no-undef
const isMobile = window.innerWidth < 700;

export default {
  container: {
    /* background-color: #282c34; */
    // background: "url(/assets/background.svg) bottom center",
    // background: #0f0c29;  /* fallback for old browsers */
    // background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
    background:
      "linear-gradient(to right, #24243e, #302b63, #0f0c29)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
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
  header: {
    fontSize: isMobile ? "1.5rem" : "2.5rem",
    marginBottom: isMobile ? "8rem" : "",
    padding: isMobile ? "0rem 2rem" : "",
  },
};
