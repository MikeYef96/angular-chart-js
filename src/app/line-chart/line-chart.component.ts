import { Component, OnInit, ViewChild } from "@angular/core";
import { ChartConfiguration, ChartEvent, ChartType } from "chart.js";
import { BaseChartDirective } from "ng2-charts";

@Component({
  selector: "app-line-chart",
  templateUrl: "./line-chart.component.html",
  styleUrls: ["./line-chart.component.scss"],
})
export class LineChartComponent {
  public lineChartData: ChartConfiguration["data"] = {
    datasets: [
      {
        order: 4,
        data: [-44.69, -13.21, -4.47, 40.23, 80.12],
        label: "1 Previous Orders",
        backgroundColor: "rgba(40, 78, 245,1)",
        pointBackgroundColor: "rgba(40, 78, 245,0)",
        borderColor: "rgba(42, 160, 7, 0)",
        pointBorderColor: "rgba(40, 78, 245,0)",
        pointHoverBackgroundColor: "rgba(40, 78, 245,0)",
        pointHoverBorderColor: "rgba(40, 78, 245,0)",
        fill: "origin",
      },
      {
        order: 3,
        data: [-26.83, -4.89, 3.61, 18.59, 35.26],
        label: "2 Previous Orders",
        backgroundColor: "rgba(252, 36, 21,1)",
        pointBackgroundColor: "rgba(40, 78, 245,0)",
        borderColor: "rgba(42, 160, 7, 0)",
        pointBorderColor: "rgba(40, 78, 245,0)",
        pointHoverBackgroundColor: "rgba(40, 78, 245,0)",
        pointHoverBorderColor: "rgba(40, 78, 245,0)",
        fill: "origin",
      },
      {
        order: 2,
        data: [-16.52, -1, 5.17, 13.32, 20.89],
        label: "3 Previous Orders",
        backgroundColor: "rgba(231, 151, 31, 1)",
        borderColor: "rgba(42, 160, 7, 0)",
        pointBackgroundColor: "rgba(40, 78, 245,0)",
        pointBorderColor: "rgba(40, 78, 245,0)",
        pointHoverBackgroundColor: "rgba(40, 78, 245,0)",
        pointHoverBorderColor: "rgba(40, 78, 245,0)",
        fill: "origin",
      },
      {
        order: 1,
        data: [-1.82, 7.06, 11.28, 10.39, 16.79],
        label: "4-12 Previous Orders",
        backgroundColor: "rgba(42, 160, 7, 1)",
        pointBackgroundColor: "rgba(40, 78, 245,0)",
        borderColor: "rgba(42, 160, 7, 0)",
        pointBorderColor: "rgba(40, 78, 245,0)",
        pointHoverBackgroundColor: "rgba(40, 78, 245,0)",
        pointHoverBorderColor: "rgba(40, 78, 245,0)",
        fill: "origin",
      },
    ],
    labels: [1, 2, 3, 4, 5],
  };

  public lineChartOptions: ChartConfiguration["options"] = {
    responsive: true,
    elements: {
      line: {
        tension: 0.1,
      },
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        stacked: false,
        title: {
          display: true,
          text: "Value",
        },
        min: -80,
        max: 100,
      },
    },

    plugins: {
      title: {
        display: true,
      },
      tooltip: {
        mode: "index",
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
  };

  public lineChartType: ChartType = "line";

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }

  public hideOne(): void {
    const isHidden = this.chart?.isDatasetHidden(1);
    this.chart?.hideDataset(1, !isHidden);
  }
}
