interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function Button({ title, ...props }: ButtonProps) {
  return (
    <button
      className="w-56 p-1 ml-7 bg-black rounded-lg hover:opacity-70 transition-transform focus:animate-pulse"
      {...props}
    >
      {title}
    </button>
  );
}
