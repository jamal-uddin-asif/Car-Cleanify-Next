import DashboardSideBar from "@/components/shared/DashboardSideBar";
import React from "react";

const dashboardLayout = ({ children }) => {
  return (
    <div className="flex ">
      <DashboardSideBar />
      <div>{children}</div>
    </div>
  );
};

export default dashboardLayout;
