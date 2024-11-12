import type {HtmlHTMLAttributes} from "react";

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {}
function ResponsiveContainer({children, className, ...rest}: Props) {
  return (
    <div
      className={`mx-auto lg:w-3/4 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export default ResponsiveContainer;
