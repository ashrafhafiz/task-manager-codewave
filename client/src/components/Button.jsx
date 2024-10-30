/* eslint-disable react/prop-types */
import clsx from "clsx";

const Button = ({
  type = "button",
  label,
  className,
  icon,
  onClick = () => {},
}) => {
  return (
    <button
      type={type}
      className={clsx("px-3 py-2 outline-none", className)}
      onClick={onClick}
    >
      <span>{label}</span>
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default Button;
