import React from "react";
import TopHeader from "./TopHeader";
import MainNav from "./MainNav";
import Menu from "./Menu";

const Header = () => {
  return (
    <div className="divoneandtwo">
      <TopHeader />
      <Menu/>
      {/* پارت دوم */}
      <MainNav />
    </div>
  );
};

export default Header;