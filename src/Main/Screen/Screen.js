import React from "react";
import "./Screen.css";
import { Outlet } from "react-router-dom";

export default function Screen() {
  return (
    <div className="screen">
        <Outlet />
    </div>
  );
}
