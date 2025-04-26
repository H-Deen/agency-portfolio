import React from "react";

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

const Tag: React.FC<TagProps> = ({ className = "", variant = "default", ...props }) => {
  const baseStyles =
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    default: "bg-primary text-white border-transparent hover:bg-primary/80",
    secondary: "bg-secondary text-white border-transparent hover:bg-secondary/80",
    destructive: "bg-red-600 text-white border-transparent hover:bg-red-700",
    outline: "text-black border border-gray-300",
  };

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    />
  );
};

export default Tag;
