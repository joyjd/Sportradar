import "./label.css";
import PropTypes from "prop-types";

/**
 *
 * @param {*} children
 * @param {*} bold
 * @returns
 * This functional components is responsible for providing the Label UI element
 */
const Label = ({ children, bold = false }) => {
  return (
    <span data-testid='custom-label' className={bold ? "bold label" : "label"}>
      {children}
    </span>
  );
};
Label.propTypes = {
  children: PropTypes.node.isRequired,
  bold: PropTypes.bool,
};
export default Label;
