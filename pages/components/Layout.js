import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div>{children}</div>
          <div>
            <Navbar />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
