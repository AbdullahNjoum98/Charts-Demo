import ReactApexChart from "react-apexcharts";
import "./App.css";
import { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    //data declaration
    const series = [
      {
        name: "Series 1",
        data: [
          {
            x: "W1",
            y: 22,
          },
          {
            x: "W2",
            y: 29,
          },
          {
            x: "W3",
            y: 13,
          },
          {
            x: "W4",
            y: 32,
          },
        ],
      },
      {
        name: "Series 2",
        data: [
          {
            x: "W1",
            y: 43,
          },
          {
            x: "W2",
            y: 43,
          },
          {
            x: "W3",
            y: 43,
          },
          {
            x: "W4",
            y: 43,
          },
        ],
      },
    ];

     //standard options
     const options = {
      colors: ["#008FFB", "#39e575"]
    };

    this.state = {
      series,
      options,
    };
  }
  
  render() {
    const charts = [
      { 
        type: "heatmap",
        colors: ["#dac912", "#008FFB"],
        title: { text: 'HeatMap Chart', align: 'center' } 
      },
      { 
        type: "line",
        title: { text: 'Line Chart', align: 'center'}
      },
      { 
        type: "bar",
        title: { text: 'Bar Chart', align: 'center'}
      },
      //Add more chart objects here
    ];

    return (
      <div className="app">
        <h2 className="header">Charts Demo App</h2>
        {charts.map(chart => (
          <ReactApexChart
          className="chart"
          //overwrite properties if specified at char object level
          options={
            { 
              ...this.state.options,
              colors: chart.colors,
              title: chart.title
            }
          }
          series={this.state.series}
          type={chart.type}
          colors={chart.colors}
          height="350"
        />
        ))}
      </div>
    );
  }
}
