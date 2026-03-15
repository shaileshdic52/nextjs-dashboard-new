import React from "react";

export function Button({ children, ...props }: any) {
  return (
    <button
      className="px-4 py-2 rounded bg-black text-white hover:opacity-80"
      {...props}
    >
      {children}
    </button>
  );
}