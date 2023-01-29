import "./label.css";

const Label = ({ children, bold = false }) => {
  return <span className={bold ? "bold label" : "label"}> {children} </span>;
};

export default Label;
