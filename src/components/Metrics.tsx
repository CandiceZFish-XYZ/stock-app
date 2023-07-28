import React, { useState } from "react";

export default function Metrics() {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [mean, setMean] = useState<number | undefined>(undefined);
  const [pDelta, setPDelta] = useState<number | undefined>(undefined);
  const [dDelta, setDDelta] = useState<number | undefined>(undefined);
  const [threshold, setThreshold] = useState<number>(5);

  const ApplyBacktest = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    // TODO to be completed
    e.preventDefault();
    console.log("===Applying backtest with following metrics: ===");
    console.log("startDate: ", startDate);
    console.log("endDate: ", endDate);
    console.log("mean: ", mean);
    console.log("percent Delta: ", pDelta);
    console.log("dollar Delta: ", dDelta);
    console.log("preset threshold: ", threshold);
    console.log("===End metrics===");
  };

  return (
    <div className="col">
      <div className="row mb-3">
        <div className="col-sm-2"></div>
        <div className="col-sm-7">
          <span className="badge text-bg-primary me-3">1 yr</span>
          <span className="badge text-bg-primary me-3">3 yr</span>
          <span className="badge text-bg-primary me-3">5 yr</span>
          <span className="badge text-bg-primary">10 yr</span>
        </div>
      </div>
      <form>
        <div className="row mb-3">
          <label htmlFor="backtestDate" className="col-sm-2 col-form-label">
            Date
          </label>
          <div className="col-sm-3">
            <input
              type="date"
              className="form-control"
              aria-label="Backtest start and ending date"
              id="backtestStartDate"
              value={
                startDate === undefined
                  ? ""
                  : startDate.toISOString().split("T")[0]
              }
              onChange={(e) =>
                setStartDate(
                  e.target.value === "" ? undefined : new Date(e.target.value),
                )
              }
            />
          </div>
          <div className="col-sm-1">to</div>
          <div className="col-sm-3">
            <input
              type="date"
              className="form-control"
              aria-label="Backtest start and ending date"
              id="backtestEndDate"
              value={
                endDate === undefined ? "" : endDate.toISOString().split("T")[0]
              }
              onChange={(e) =>
                setEndDate(
                  e.target.value === "" ? undefined : new Date(e.target.value),
                )
              }
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="mean" className="col-sm-2 col-form-label">
            Mean
          </label>
          <div className="col-sm-4">
            <input
              type="number"
              min="0"
              step="0.01"
              className="form-control"
              aria-label="Stock mean value of set range"
              id="mean"
              value={mean === undefined ? "" : dDelta}
              onChange={(e) =>
                setMean(
                  e.target.value === ""
                    ? undefined
                    : parseFloat(e.target.value),
                )
              }
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="percntDelta" className="col-sm-2 col-form-label">
            % delta
          </label>
          <div className="col-sm-4">
            <input
              type="number"
              min="0"
              step="0.01"
              className="form-control"
              aria-label="percent delta"
              id="percntDelta"
              value={pDelta ?? ""}
              onChange={(e) =>
                setPDelta(
                  e.target.value === ""
                    ? undefined
                    : parseFloat(e.target.value),
                )
              }
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="dollarDelta" className="col-sm-2 col-form-label">
            $ delta
          </label>
          <div className="col-sm-4">
            <input
              type="number"
              min="0"
              step="0.01"
              className="form-control"
              aria-label="dollar delta"
              id="dollarDelta"
              value={dDelta ?? ""}
              onChange={(e) =>
                setDDelta(
                  e.target.value === ""
                    ? undefined
                    : parseFloat(e.target.value),
                )
              }
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="threshold" className="col-sm-2 col-form-label">
            Threshold
          </label>
          <div className="col-sm-4">
            <div className="input-group">
              <span className="input-group-text text-body">
                <svg
                  fill="currentColor"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  role="img"
                  focusable="false"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m 2.448276,11.8621 0,-1.138 4.551724,0 4.551724,0 0,1.138 0,1.1379 L 7,13 l -4.551724,0 0,-1.1379 z m 3.517241,-3.6207 0,-1.6552 -1.75862,0 -1.758621,0 0,-1.1379 0,-1.138 1.758621,0 1.75862,0 0,-1.6551 0,-1.6552 L 7,1 l 1.034483,0 0,1.6552 0,1.6551 1.758621,0 1.75862,0 0,1.138 0,1.1379 -1.75862,0 -1.758621,0 0,1.6552 0,1.6552 -1.034483,0 -1.034483,0 0,-1.6552 z" />
                </svg>
              </span>
              <input
                type="text"
                readOnly
                className="form-control form-control-plaintext ps-2"
                aria-label="threshold"
                value={threshold}
              />
            </div>
          </div>
        </div>
        <button className="btn btn-primary" onClick={ApplyBacktest}>
          Backtest
        </button>
      </form>
    </div>
  );
}
