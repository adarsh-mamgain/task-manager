import React from "react";

interface ButtonProps {
  title: string;
}

export default function Button({ title }: ButtonProps) {
  return (
    <div>
      <button className="bg-white text-blue-400 font-bold py-2 px-4 rounded-md">
        {title}
      </button>
    </div>
  );
}
