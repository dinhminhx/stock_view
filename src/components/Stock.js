import React, { useState, useEffect, useContext  } from "react";
import Plot from "react-plotly.js";
import "./Stock.css";
import axios from 'axios';
import _ from 'lodash';
import SearchContext from "./SearchContext";

const Stock = () => {
  axios.defaults.baseURL = 'https://stock-view-backend.onrender.com';
  const [stockChartXValues, setStockChartXValues] = useState([]);
  const [stockChartYValues, setStockChartYValues] = useState([]);
  const [stockData, setStockData] = useState([]);
  const { searchSymbol } = useContext(SearchContext);
  useEffect(() => {
    if (searchSymbol) {
      axios.get(`/api/stock-data/${searchSymbol}`)
        .then(response => {
          setStockData(response.data);
          const data = response.data;
          setStockChartYValues(data.map(data => data.close));
          setStockChartXValues(data.map(data => data.timestamp));
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    } else {
        axios.get(`/api/stock-data/AAPL`)
          .then(response => {
            setStockData(response.data);
            const data = response.data;
            setStockChartYValues(data.map(data => data.close));
            setStockChartXValues(data.map(data => data.timestamp));
          })
          .catch(error => {
              console.error('Error fetching data:', error);
          });
    }
  }, [searchSymbol]);

  return (
    <div>
      <h2 className='company'>{stockData[0]?.symbol}</h2>
      <div className='graph'>
        <Plot
          data={[
            {
              x: stockChartXValues,
              y: stockChartYValues,
              "marker.colorbar": "#000000",
              type: "scatter",
              mode: "lines",
              marker: { color: "#01db33" },
            },
          ]}
          layout={{
            width: "1500",
            height: "600",
            xaxis: { showgrid: false },
            yaxis: { showgrid: false },
            plot_bgcolor: "#070a1b",
            paper_bgcolor: "#070a1b",
            
          }}
          config={{ responsive: true }}
          className="plot"
        />
      </div>
    </div>
  );
};

export default Stock;
