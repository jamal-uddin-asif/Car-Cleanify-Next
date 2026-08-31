import Footer from "@/components/shared/Footer";
import Navber from "@/components/shared/Navber";
import React from "react";

const commonLayout = ({ children }) => {
  return (
    <div>
      <Navber />
      Commonlayout
      {children}
      <Footer />
    </div>
  );
};

export default commonLayout;
