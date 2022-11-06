import { Controller } from "react-hook-form";

interface InputProps {
  name: string;
  control?: any;
  showIcon?: React.ReactNode;
  rest?: HTMLInputElement | any;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  errorMessage?: string;
}

export function Input({ name, control, showIcon, errorMessage, ...rest }: InputProps) {
  return (
    <div className="flex flex-col items-center ">
      <div className="flex justify-center items-center gap-2">
      {showIcon && (
        <>
          <div className="text-xl">{showIcon}</div>
        </>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            className="text-black outline-none py-1 px-4 rounded-md bg-transparent border focus:border-b-[1px] focus:border-black focus:animate-bounce"
            {...field}
            {...rest}
          />
        )}
      />
    </div>
          {errorMessage && <>
            <p className="text-red-700 text-base mt-1">
              {errorMessage}
            </p>
          </>}
    </div>
  );
}
