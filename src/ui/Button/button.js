import PropTypes from "prop-types";
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
