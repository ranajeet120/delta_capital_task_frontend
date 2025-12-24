import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  mainContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxSizing: "border-box",
  },
  headerContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#000",
    height: "60px",
    boxSizing: "border-box",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  headerIconStyle: {
    width: "200px",
    height: "100%",
    objectFit: "contain",
  },
  fileIconStyle: {
    width: "200px",
    height: "200px",
    objectFit: "contain",
    "@media (max-width: 880px)": {
      width: "160px",
      height: "160px",
    },
    "@media (max-width: 480px)": {
      width: "120px",
      height: "120px",
    },
  },
  headerText: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff",

    "@media (max-width: 880px)": {
      fontSize: "14px",
    },
    "@media (max-width: 480px)": {
      fontSize: "12px",
    },
  },
  bodyContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxSizing: "border-box",
    paddingLeft: "15%",
    paddingRight: "15%",
    gap: "5%",
    paddingTop: "2.5%",
    paddingBottom: "2.5%",
    overflowY: "scroll",
    "@media (max-width: 880px)": {
      paddingLeft: "10%",
      paddingRight: "10%",
    },
    "@media (max-width: 480px)": {
      paddingLeft: "5%",
      paddingRight: "5%",
    },
  },
  headingText: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#000",
    textDecorationLine: "underline",
    "@media (max-width: 880px)": {
      fontSize: "24px",
    },
    "@media (max-width: 480px)": {
      fontSize: "20px",
    },
  },
  pdfContainer: {
    width: "100%",
    height: "600px",
    minHeight: "600px",
    maxHeight: "600px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 880px)": {
      height: "420px",
      minHeight: "420px",
      maxHeight: "420px",
    },
    "@media (max-width: 480px)": {
      height: "360px",
      minHeight: "360px",
      maxHeight: "360px",
    },
  },
  buttonContainer: {
    width: "100%",
    height: "400px",
    backgroundColor: "#f4ededff",
    justifyContent: "center",
    alignItems: "center",
    gap: "5%",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    borderRadius: "10px",
    border: "2px solid #a7a2a2ff",
    "@media (max-width: 880px)": {
      height: "350px",
    },
    "@media (max-width: 480px)": {
      height: "300px",
    },
  },
  buttonStyle: {
    width: "50%",
    height: "36px",
    maxHeight: "36px",
    minHeight: "36px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "bold",
    color: "#000",
    backgroundColor: "lightblue",
    borderRadius: "5px",
    "@media (max-width: 880px)": {
      width: "75%",
    },
    "@media (max-width: 480px)": {
      width: "75%",
    },
  },
});

export default useStyles;
