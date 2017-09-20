import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {

  questions: Question[];

  constructor() {
    this.questions = [
      {
        text: 'Question',
        answer: 'Answer',
        hide: true
      },
      {
        text: 'Question',
        answer: 'Answer',
        hide: true
      },
      {
        text: 'Question',
        answer: 'Answer',
        hide: true
      }
    ];
  }

  getQuestions() {
    return this.questions;
  }

}
