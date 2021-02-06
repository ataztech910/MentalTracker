import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { enter } from '../api/store/actions/user-enter.actions';
import { Chart } from 'chart.js';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  enter$: Observable<boolean>;
  @ViewChild('barChart') barChart;
  bars: any;
  colorArray: any;
  emptyChart = true;
  constructor(private store: Store<{ firstLoad: boolean, quit: boolean }>,
              private storage: Storage,
              private router: Router) {
    this.enter$ = store.select('firstLoad');
    this.store.dispatch(enter());
  }

  ionViewDidEnter() {
    this.createBarChart();
  }

  createBarChart() {
    this.storage.get('results').then((val) => {
      if (val.length > 0) {
        this.emptyChart = false;
        const labels = [];
        const data = [];
        val.forEach(element => {
          labels.push(element.timestamp);
          data.push(element.score);
        });
        this.bars = new Chart(this.barChart.nativeElement, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: 'Ваше настроение',
              data: data,
              backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
              borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });
      }
    }
  )
  }

  goToMain() {
    this.router.navigate(['/home']);
  }

}
