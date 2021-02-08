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
  result = '0';
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
      console.log('val', val);
      if (val && val.length > 0) {
        this.emptyChart = false;
        this.result = (100 * ( val.reduce((sum, value) => {
          return sum + value.score;
        }, 0) / val.length ) / 63).toFixed(1);
        console.log('result', this.result);
      }
    }
    );
  }

  goToMain() {
    this.router.navigate(['/home']);
  }

}
