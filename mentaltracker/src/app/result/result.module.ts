import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultPageRoutingModule } from './result-routing.module';

import { ResultPage } from './result.page';
import {QuizPageModule} from '../quiz/quiz.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ResultPageRoutingModule,
        QuizPageModule
    ],
  declarations: [ResultPage]
})
export class ResultPageModule {}
