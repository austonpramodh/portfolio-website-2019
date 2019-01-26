export default {
  container: {
    marginTop: 0,
    backgroundColor: "black",
    height: "12rem",
  },
  button: {
    marginBottom: "2rem",
  },
  icon: {
    "&:hover": {
      backgroundColor: "white",
      transition: "background-color 0.5s",
    },
  },
  name: {
    marginTop: "2rem",
    color: "white",
  },
  year: {
    color: "red",
  },
  upIcon: {
    "& path": {
      transition: "fill 0.5s",
      fill: "white",
    },
    "&:hover": {
      "& path": {
        fill: "grey",
      },
    },
  },
};
