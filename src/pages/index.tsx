import React from "react";
import AppHeader from "~/components/AppHeader";
import SideNavTab from "~/components/SideNavTab";
import SearchBar from "~/components/SearchBar";
// import StockGraph from "~/components/StockGraph";
import Metrics from "~/components/Metrics";
import Results from "~/components/Results";
import StockDataProvider from "~/providers/StockDataProvider";

import dynamic from "next/dynamic";

const StockGraph = dynamic(() => import("~/components/StockGraph"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="row">
      <div className="row p-5 bg-primary-subtle text-light">
        <AppHeader />
      </div>
      <div className="row">
        <div className="col-2 pe-0">
          <SideNavTab />
        </div>
        <main className="col-10 bg-dark">
          <div>hi</div>
          <StockDataProvider>
            <div className="p-3 vstack gap-4">
              <SearchBar />
              <StockGraph />
              <div className="row">
                <Metrics />
                <Results />
              </div>
            </div>
          </StockDataProvider>
        </main>
      </div>
    </div>
  );
}
