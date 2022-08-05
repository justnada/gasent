import React from "react";

interface ReachedItemProps {
  count: string;
  title: string;
}

const ReachedItem = (props: ReachedItemProps) => {
  const { count, title } = props;

  return (
    <div className="me-lg-35 ms-lg-35">
      <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
        {count}
      </p>
      <p className="text-lg text-lg-start text-center color-palette-2 m-0">
        {title}
      </p>
    </div>
  );
};

export default ReachedItem;
