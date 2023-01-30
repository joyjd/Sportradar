import PropTypes from "prop-types";

/**
 *
 * @param {*} title
 * @param {*} handleClick
 * @param {*} disabled
 * @returns
 * This functional components is responsible for providing the Button UI element
 */
const Button = ({ title = "", handleClick = () => {}, disabled }) => {
  return (
    <button disabled={disabled} onClick={handleClick}>
      {title}
    </button>
  );
};
Button.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
export default Button;
