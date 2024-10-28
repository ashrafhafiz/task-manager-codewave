import React from "react";
import clsx from "clsx";

// eslint-disable-next-line react/display-name
const Textbox = React.forwardRef(
  // eslint-disable-next-line react/prop-types
  ({ placeholder = "", type, name, label, className, register, error }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1">
        {label && (
          <label htmlFor={name} className="text-slate-800">
            {label}
          </label>
        )}

        <div>
          <input
            id={name}
            type={type}
            name={name}
            placeholder={placeholder}
            ref={ref}
            {...register}
            aria-invalid={error ? "true" : "false"}
            className={clsx(
              "bg-transparent px-3 py-2.5 2xl:py-3 border border-gray-300 placeholder:text-gray-400 text-gray-800 outline-none text-base focus:ring-2 ring-blue-300",
              className
            )}
          />
        </div>
        {error && (
          <span className="text-[#f64949] text-xs mt-0.5">{error}</span>
        )}
      </div>
    );
  }
);

export default Textbox;
