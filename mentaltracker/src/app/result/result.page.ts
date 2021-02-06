import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {
  resultIndex = 0;
  currentValue = 0;
  constructor(public quizData: DataService, private router: Router, private storage: Storage) { }
  ionViewWillEnter() {
    console.log('ionViewDidEnter');
    this.quizData.result.subscribe(data => {

      this.storage.get('results').then((val) => {
        if (val) {
          val.push({
            score: this.quizData.maximalValue - data,
            timestamp: new Date().toLocaleDateString("en-US")
          });
          this.storage.set('results', val);
        } else {
          this.storage.set('results', [{
            score: data,
            timestamp: new Date().toLocaleDateString("en-US")
          }]);
        }


      });

      this.currentValue = data;
      this.resultIndex = this.getResultIndex(data);
    });
  }
  ngOnInit() {}
  getResultIndex(score) {
    let previousElement = 0;
    let result = 0;
    console.log('score', score);
    this.quizData.maximalValues.forEach((max, index) => {
      if (score >= previousElement && score <= max) {
        result = index;
      }
      previousElement = max;
    });
    return result;
  }

  goToMain() {
    this.router.navigate(['/home']);
  }
}
