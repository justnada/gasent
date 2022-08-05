import Image from "next/image";
import React from "react";
import cx from "classnames";

interface TableRowProps {
  title: string;
  category: string;
  item: number;
  price: number;
  status: "Success" | "Pending" | "Failed";
  imgPath: string;
}
const TableRow = (props: TableRowProps) => {
  const { title, category, item, price, status, imgPath } = props;
  const statusClass = cx({
    "float-start icon-status": true,
    pending: status === "Pending",
    success: status === "Success",
    failed: status === "Failed",
  });

  return (
    <tr data-category={status.toLowerCase()} className="align-middle">
      <th scope="row">
        <div className="float-start me-3 mb-lg-0 mb-3">
          <Image
            src={`/img/${imgPath}.png`}
            width={80}
            height={60}
            alt="Game Thumbnail"
          />
        </div>
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {category}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{item} Gold</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">{price}</p>
      </td>
      <td>
        <div>
          <span className={statusClass} />
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
