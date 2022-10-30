import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  Root: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",
    flexDirection: "column",
  },
  uploadText: {
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "24px",
  },
  uploadDiv: {
    width: "500px",
    height: "250px",
    background: "#F0EBF8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px dashed #673AB7",
    borderRadius: "15px",
    marginTop: "1rem",
  },
  uploadButton: {
    width: "200px",
    height: "50px",
    background: "#673AB7 !important",
    borderRadius: "15px !important",
    textTransform: "none !important",
    boxShadow: "0px 7px 18px -2px rgba(103, 58, 183, 0.56) !important",
    fontSize: "18px !important",
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "center !important",
    gap: "5px",
    position: "absolute !important",
  },
  inputFile: {
    opacity: 0,
    zIndex: 2,
    position: "relative",
    width: "200px",
    height: "50px",
    cursor: "pointer",
  },
  addIcon: {
    width: "18px",
    height: "18px",
  },
  ListItems: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
    background: "#F0EBF8",
    padding: "0.5rem 1rem",
    borderRadius: "10px",
    gap: "0.5rem",
  },
  deleteIcon: {
    color: "#673AB7",
    cursor: "pointer",
  },
}));
export default useStyles;
