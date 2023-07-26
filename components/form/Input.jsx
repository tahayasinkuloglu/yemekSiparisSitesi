const Input = (props, className) => {
  const { type, errorMessage, touched, placeholder, ...inputProps } = props;

  return (
    <div className="w-full">
      <label className="relative block cursor-wait w-full">
        <input
          type={type}
          className={`h-14 w-full border outline-none px-4 peer ${
            touched && errorMessage ? "border-danger" : "border-primary"
          }`}
          required
          {...inputProps}
        />
        <span
          className="absolute flex top-0 left-0 px-4 h-full items-center cursor-text duration-200 opacity-40
        peer-focus:h-5 peer-focus:text-[12px] peer-valid:h-5 peer-valid:text-[12px]"
        >
          {placeholder}
        </span>
      </label>
      {touched && <span className="text-xs text-danger">{errorMessage}</span>}
    </div>
  );
};

export default Input;
