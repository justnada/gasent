import Link from "next/link";
import React from "react";

interface MenuItemProps {
  link: string;
  title: string;
}

const MenuItem = (props: MenuItemProps) => {
  const { link, title } = props;
  return (
    <li className="mb-6">
      <Link href={link}>
        <a
          className="text-lg color-palette-1 text-decoration-none"
          target="_blank"
        >
          {title}
        </a>
      </Link>
    </li>
  );
};

export default MenuItem;
