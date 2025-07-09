import React from "react";

const VARIANT_STYLES = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

export default function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded transition font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${VARIANT_STYLES[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
} 