import React from "react";
import ReachedItem from "../../molecules/ReachedItem";
import Divider from "./Divider";

const Reached = () => {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReachedItem count="290M+" title="Players Top Up" />
          <Divider />
          <ReachedItem count="12.500" title="Games Available" />
          <Divider />
          <ReachedItem count="99,9%" title="Happy Players" />
          <Divider />
          <ReachedItem count="4.7" title="Rating Worldwide" />
        </div>
      </div>
    </section>
  );
};

export default Reached;
