import Image from "next/image";
import React from "react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  full?: boolean;
  variant:
    | "btn_dark_green"
    | "btn_green"
    | "btn_white_text"
    | "btn_white"
    | "btn_dark_green_outline";
};
function Button({ type, title, icon, variant, full }: ButtonProps) {
  return (
    <button
      type={type}
      className={`flex justify-center items-center gap-3 rounded-full border ${variant} ${
        full && "w-full"
      }`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="text-[16] font-[700] whitespace-nowrap">{title}</label>
    </button>
  );
}

export default Button;
