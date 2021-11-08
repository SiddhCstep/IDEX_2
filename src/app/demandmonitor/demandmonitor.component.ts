import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-demandmonitor',
  templateUrl: './demandmonitor.component.html',
  styleUrls: ['./demandmonitor.component.css']
})


export class DemandmonitorComponent {
  title = 'chartproject';
  canvas: any;
  ctx: any;

  canvas1: any;
  ctx1: any;


  ngOnInit() {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');

    let data = [250, 240, 300, 400, 500, 300];

    let myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: ['REP', 'RPP', 'RDD', 'SDT', 'Other'],

        datasets: [{
          data: data, 
          backgroundColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
          ],

          borderWidth: 0
        }]
      },
      options: {
        title: {
          display: false,

        },
        legend:{
          display:false,
        }
      }
    });


    this.canvas1 = document.getElementById('myChart1');
    this.ctx1 = this.canvas1.getContext('2d');
    let myChart1 = new Chart(this.ctx1, {
      type: 'bar',
      data: {
        labels: ['X', 'Y', 'Z', 'U', 'Others'],
        datasets: [{
          label: '',
          fill: false,
          data: data,
          backgroundColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          borderColor: "#ffbd35",
          borderWidth: 0
        }]
      },
      options: {
        responsive: false,
        scales: {
          yAxes: [{ display: true }], xAxes: [{
            display: true }]
        },
        legend:{
          display: false
        }
      },
    });

  }
}