import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements AfterViewInit, OnInit   {

  statusView: any = 1;
  projectID : number = 0;

  constructor(
    private elementRef: ElementRef,
    private route: ActivatedRoute,
  ) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.projectID = params['id'];
    });
  }
  ngAfterViewInit() {
    this.drawChart();
    this.drowChart();
  }

  drawChart() {
    const ctx = this.elementRef.nativeElement.querySelector('#myChart');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug5', 'Sep', 'Oct', 'Nơv', 'Dec', 'Jan', 'Feb', 'Mar'],
        datasets: [{
          label: 'Dữ liệu 1',
          data: [3, 1, 3, 5, 2, 8, 1, 5, 10, 12, 12, 7],
          backgroundColor: '#5CB1FF',
          barThickness: 50
        },
        {
          label: 'Dữ liệu 2',
          data: [11, 9, 12, 8, 3, 11, 6, 9, 15, 17, 13, 8],
          backgroundColor: '#3366FF',
          barThickness: 50
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          },
          x: {
            stacked: true
          }
        },
      }
    });
  }

  drowChart() {
    const ctx = this.elementRef.nativeElement.querySelector('#trangthai');
    const trangthai = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Highest', 'High', 'Medium', 'Low'],
        datasets: [{
          label: 'Dữ liệu 1',
          data: [3, 1, 3, 5],
          backgroundColor: '#5CB1FF',
          barThickness: 20
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          },
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }
}
