import React from "react";
import ContentOverview from "../../components/organisms/ContentOverview";
import Sidebar from "../../components/organisms/Sidebar";

const Overview = () => {
  return (
    <section className="overview overflow-auto">
      <Sidebar />
      <ContentOverview />
    </section>
  );
};

export default Overview;
