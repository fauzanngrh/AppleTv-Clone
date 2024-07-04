import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
};

export const Button = ({ children, size = "md", className }: Props) => {
  const sizeClassNames = {
    // 12px
    sm: "text-xs px-2 py-1",
    // 14px
    md: "text-sm px-5 py-3",
    // 17px
    lg: "text-base px-8 py-4",
  };
  return (
    <button
      className={twMerge(
        "bg-white text-textBlack rounded-full ",
        sizeClassNames[size],
        className
      )}
    >
      {children}
    </button>
  );
};
