interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  showIcon?: boolean;
}

export function Button({ title, ...props }: ButtonProps) {
  return (
    <button
      className=" w-60 p-1 bg-black rounded-lg hover:opacity-70 transition-transform focus:animate-pulse"
      {...props}
    >
      {title}
    </button>
  );
}
