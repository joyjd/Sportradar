const Button = ({ title, handleClick, disabled }) => {
  return (
    <button disabled={disabled} onClick={handleClick}>
      {title}
    </button>
  );
};

export default Button;
