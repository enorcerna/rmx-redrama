import {ComponentProps} from "react";

interface Props extends ComponentProps<"h2"> {}
function H2({className, ...rest}: Props) {
  return (
    <h2
      className={`font-semibold mb-3 ${className}`}
      {...rest}
    ></h2>
  );
}

export default H2;
