import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pipe } from 'rxjs';
import { DataService } from '../services/data.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {
  currentIndex = 0;
  constructor(public quizData: DataService,
              private router: Router
              ) { }
  ionViewWillEnter() {
    console.log('ionViewDidEnter');
    this.initQuiz();
  }
  ngOnInit() {}

  initQuiz() {
    this.currentIndex = 0;
    for (let i = 0; i < this.quizData.matrixOfAnswers.length; i++) {
      this.quizData.matrixOfAnswers[i].forEach(data => {
        data.selected = false;
      });
    }
  }

  resetAnswers(matrixOfAnswers: any) {
    for (let i = 0; i < matrixOfAnswers.length; i++) {
      matrixOfAnswers[i].forEach(data => {
        data.selected = false;
      });
    }
  }

  forwardIndex(index: number) {
    this.quizData.matrixOfAnswers[this.currentIndex].forEach(data => {
      data.selected = false;
    });
    this.quizData.matrixOfAnswers[this.currentIndex][index].selected = true;
    this.currentIndex ++;
    if (this.currentIndex === this.quizData.matrixOfQuestions.length) {
      this.createResult();
      this.router.navigate(['/result']);
    }
  }

  createResult() {
    let result = 0;
    this.quizData.matrixOfAnswers.forEach(data => {
      const dataElement = data.find(element => element.selected);
      result += dataElement.score;
    });
    this.quizData.result.next(result);
  }

  getProgress() {
    return this.currentIndex > 0 ? this.currentIndex  / this.quizData.matrixOfQuestions.length : 0;
  }

  checkIndexForward() {
    if (this.currentIndex > 0 && this.currentIndex < this.quizData.matrixOfQuestions.length) {
      return true;
    }
    return false;
  }
  checkIndexBackward() {

  }
  changeIndex(direction :boolean) {
    if (!direction) {
      this.currentIndex --;
    }
  }
}
