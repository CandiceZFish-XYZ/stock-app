import React, { useState, createContext, useContext } from "react";

const StockDataContext = createContext();

// data
let firstDate = new Date();
let lastDate;
let value = 1200;

function generateChartData() {
  let chartData: any = [];

  for (var i = 0; i < 50; i++) {
    let newDate = new Date(firstDate);
    newDate.setMinutes(newDate.getMinutes() - i);

    value += Math.round((Math.random() < 0.49 ? 1 : -1) * Math.random() * 10);

    let open = value + Math.round(Math.random() * 16 - 8);
    let low = Math.min(value, open) - Math.round(Math.random() * 5);
    let high = Math.max(value, open) + Math.round(Math.random() * 5);

    chartData.unshift({
      Date: newDate.getTime(),
      Close: value,
      Open: open,
      Low: low,
      High: high,
    });

    lastDate = newDate;
  }
  return chartData;
}

const data = generateChartData();
const StockDataProvider = ({ children }: any) => {
  const [stockData, setStockData] = useState(data);

  return (
    <StockDataContext.Provider value={{ stockData }}>
      {children}
    </StockDataContext.Provider>
  );
};

export const useStockDataContext = () => useContext(StockDataContext);

export default StockDataProvider;
