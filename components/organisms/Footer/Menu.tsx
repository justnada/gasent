import React from "react";

interface MenuProps {
  title: string;
  children: React.ReactNode;
}

const Menu = (props: MenuProps) => {
  const { title, children } = props;
  return (
    <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
      <ul className="list-unstyled">{children}</ul>
    </div>
  );
};

export default Menu;
