import Image from "next/image";
import Link from "next/link";
import React from "react";
import cx from "classnames";

interface MenuItemProps {
  title: string;
  icon: string;
  active?: boolean;
  link: string;
}

const MenuItem = (props: Partial<MenuItemProps>) => {
  const { title, icon, active, link = "/" } = props;
  const menuItemClass = cx({
    item: true,
    "mb-30": true,
    active,
  });

  return (
    <div className={menuItemClass}>
      <div className="icon me-3">
        <img src={`/icon/${icon}.svg`} width={25} height={25} alt="" />
      </div>

      <p className="item-title m-0">
        <Link href={link}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
};

export default MenuItem;
