import "./label.css";
import PropTypes from "prop-types";
const Label = ({ children, bold = false }) => {
  return <span className={bold ? "bold label" : "label"}> {children} </span>;
};
Label.propTypes = {
  children: PropTypes.node.isRequired,
  bold: PropTypes.bool,
};
export default Label;
