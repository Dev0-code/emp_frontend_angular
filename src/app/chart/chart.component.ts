import { Component } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import Highcharts from 'highcharts';
@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent {
  Highcharts: any = Highcharts;
  chartOptions = {}
  constructor() {
    this.chartOptions = {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Employee Performance Chart'
      },
      tooltip: {
        valueSuffix: '%'
      },
      subtitle: {
        text:
        'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>'
      },
      plotOptions: {
        series: {
          allowPointSelect: true,
            cursor: 'pointer',
              dataLabels: [{
                enabled: true,
                distance: 20
              }, {
                enabled: true,
                distance: -40,
                format: '{point.percentage:.1f}%',
                style: {
                  fontSize: '1.2em',
                  textOutline: 'none',
                  opacity: 0.7
                },
                filter: {
                  operator: '>',
                  property: 'percentage',
                  value: 10
                }
              }]
        }
      },
      series: [
        {
          name: 'Percentage',
          colorByPoint: true,
          data: [
            {
              name: 'Accounts',
              y: 55.02
            },
            {
              name: 'Fat',
              sliced: true,
              selected: true,
              y: 26.71
            },
            {
              name: 'Carbohydrates',
              y: 1.09
            },
            {
              name: 'Protein',
              y: 15.5
            },
            {
              name: 'Ash',
              y: 1.68
            }
          ]
        }
      ]
    };

  }

}
