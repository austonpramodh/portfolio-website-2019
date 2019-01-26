export default {
  container: {
    marginTop: 0,
    backgroundColor: "black",
  },
  button: {
    marginBottom: "2rem",
  },
  icon: {
    "&:hover": {
      backgroundColor: "white",
      transition: "background-color 0.5s",
      borderRadius: "1rem",
    },
  },
  name: {
    marginTop: "2rem",
    color: "white",
    paddingBottom: "2px",
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
