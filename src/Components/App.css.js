import backgroundImage from "../Assets/background.JPG";

export default {
  container: {
    textAlign: "center",
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
