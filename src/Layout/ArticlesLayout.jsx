import React from "react";
import { Outlet } from "react-router-dom";

function ArticlesLayout() {
  return (
    // <div style={{width: '100%', height: "100vh", backgroundColor: "red"}}>
    <div>
      <Outlet />
    </div>
  );
}

export default ArticlesLayout;
