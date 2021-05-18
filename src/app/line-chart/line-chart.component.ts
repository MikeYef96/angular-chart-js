import { Component, OnInit, ViewChild } from "@angular/core";
import { ChartConfiguration, ChartEvent, ChartType } from "chart.js";
import { BaseChartDirective } from "ng2-charts";
import * as database from "../../../db.json";

const DATA_COUNT = 5;
const NUMBER_CFG = { count: DATA_COUNT, min: -80, max: 100 };

@Component({
  selector: "app-line-chart",
  templateUrl: "./line-chart.component.html",
  styleUrls: ["./line-chart.component.scss"],
})
export class LineChartComponent {
  public lineChartData: ChartConfiguration["data"] = {
    datasets: [
      {
        data: [-44.69, 5.03, 13.32, 40.23, 43.22],
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
        data: [-16.52, -3, 2.73, 9.28, 20.89],
        label: "3 Previous Orders",
        yAxisID: "y-axis-1",
        backgroundColor: "rgba(231, 151, 31, 1)",
        borderColor: "rgba(42, 160, 7, 0)",
        pointBackgroundColor: "rgba(40, 78, 245,0)",
        pointBorderColor: "rgba(40, 78, 245,0)",
        pointHoverBackgroundColor: "rgba(40, 78, 245,0)",
        pointHoverBorderColor: "rgba(40, 78, 245,0)",
        fill: "origin",
      },
      {
        data: [-1.82, 7.06, 11.28, 10.39, 16.79],
        label: "4-12 Previous Orders",
        yAxisID: "y-axis-1",
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
        stacked: true,
        title: {
          display: true,
          text: "Value",
        },
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

  private static generateNumber(i: number): number {
    return Math.floor(Math.random() * (i < 2 ? 100 : 1000) + 1);
  }

  public randomize(): void {
    for (let i = 0; i < this.lineChartData.datasets.length; i++) {
      for (let j = 0; j < this.lineChartData.datasets[i].data.length; j++) {
        this.lineChartData.datasets[i].data[
          j
        ] = LineChartComponent.generateNumber(i);
      }
    }
    this.chart?.update();
  }

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

  public pushOne(): void {
    this.lineChartData.datasets.forEach((x, i) => {
      const num = LineChartComponent.generateNumber(i);
      x.data.push(num);
    });
    this.lineChartData?.labels?.push(
      `Label ${this.lineChartData.labels.length}`
    );

    this.chart?.update();
  }

  public changeColor(): void {
    this.lineChartData.datasets[2].borderColor = "green";
    this.lineChartData.datasets[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;

    this.chart?.update();
  }

  public changeLabel(): void {
    if (this.lineChartData.labels) {
      this.lineChartData.labels[2] = ["1st Line", "2nd Line"];
    }

    this.chart?.update();
  }
}
