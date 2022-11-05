interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  showIcon?: React.ReactElement;
}

export function Input({ name, showIcon, ...rest }: InputProps) {
  return (
    <div className="flex justify-center items-center gap-2">
      {showIcon && (
        <>
          <div className="text-xl">{showIcon}</div>
        </>
      )}
      <input
        className="text-black outline-none mt-1 py-1 px-4 rounded-md bg-transparent border focus:border-b-[1px] focus:border-black focus:animate-bounce"
        name={name}
        {...rest}
      />
    </div>
  );
}
