import backgroundImage from "../Assets/background.JPG";

export default {
  container: {
    textAlign: "center",
    background: "rgba(0, 0, 0, 0.30)",
  },
  mainContainer: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "center",
    backgroundPositionY: "-50px",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    // backgroundColor: "blue",
  },
};
