import { Fragment } from "react";

export default function Button({
  children,
  className,
  outlined,
  Icon,
  color,
  bg,
  onClick,
  disabled,
  small,
  loading,
  non,
  normal,
  danger,
  light,
  styles,
  to,
  rounded,
  noRightIcon,
}: any) {
  const style = ` ${className}  ${
    disabled ? "pointer-events-none opacity-60 text-gray-600" : undefined
  }  ${
    outlined
      ? "border bg-transparent"
      : normal
      ? "border border-gray-200 text-gray-500 "
      : danger
      ? "bg-red-500 text-white"
      : light
      ? "bg-white text-gray-800"
      : non
      ? "bg-transparent text-gray-800"
      : `bg-primary text-white`
  }  font-medium  text-[14px] ${rounded ? "rounded-3xl " : "rounded-[3px]"} ${
    loading ? "loading-btn opacity-70" : undefined
  } flex ${
    small && "text-[13px] py-[4px] px-[22px]"
  }  py-[8px] group text-[14px] px-[16px] truncate hover:bg-opacity-80- items-center font-bold justify-center capitalize  cursor-pointer relative`;
  return (
    <a style={styles} onClick={onClick} className={style}>
      <span className={`${loading ? "invisible" : ""} flex items-center`}>
        {children}
      </span>

      {Icon && <Icon strokeWidth={4} className="ml-3" size={12} />}
    </a>
  );
}
