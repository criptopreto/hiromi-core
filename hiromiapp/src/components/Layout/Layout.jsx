import React from "react";
import "./Layout.css";

export default function Layout({ children }) {
  return <div className="bg-hiromi h-screen w-full">{children}</div>;
}
