import React from "react";

import "./i18n";

interface Props {
  children?: React.ReactNode;
}

const Decorator = ({ children }: Props) => (
  <div
    style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#E5E5E5", // For consistency with Figma's default background color
    }}
  >
    {children}
  </div>
);

export default Decorator;
