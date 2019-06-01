export default {
  container: {
    marginTop: 0,
    backgroundColor: "black",
  },
  button: {
    marginBottom: "1rem",
    transform: "translateY(-40%)",
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
    paddingBottom: "1rem",
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
