import React from "react";
import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";

interface SidebarProps {
  activeMenu: "overview" | "transactions" | "settings";
}

const Sidebar = (props: SidebarProps) => {
  const { activeMenu } = props;

  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            icon="menu-overview"
            active={activeMenu === "overview"}
            link="/member"
          />
          <MenuItem
            title="Transactions"
            icon="menu-transaction"
            link="/member/transactions"
            active={activeMenu === "transactions"}
          />
          <MenuItem title="Messages" icon="menu-message" link="#" />
          <MenuItem title="Card" icon="menu-card" link="#" />
          <MenuItem title="Rewards" icon="menu-reward" link="#" />
          <MenuItem
            title="Setting"
            icon="menu-setting"
            link="/member/edit-profile"
            active={activeMenu === "settings"}
          />
          <MenuItem title="Logout" icon="menu-logout" link="/sign-in" />
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Sidebar;
