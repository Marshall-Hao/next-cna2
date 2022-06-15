import React from "react";

const CustomLink = React.forwardRef((props, ref) => {
  console.log(props, ref);
  return (
    <a
      href={props.href}
      ref={ref}
      style={{ color: "blue" }}
      onClick={props.onClick}
    >
      functional wrap a component : /book/one
    </a>
  );
});

export default CustomLink;
