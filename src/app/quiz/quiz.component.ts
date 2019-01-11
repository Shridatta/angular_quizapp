import { Component, OnInit } from "@angular/core";
import { QuizService } from "../services/quiz.service";
import { Router } from "@angular/router";
import { Option, Question, Quiz, Config } from "../models/index";
import { MatButtonModule } from "@angular/material/button";
import { CompileMetadataResolver } from "@angular/compiler";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"],
  providers: [QuizService]
})
export class QuizComponent implements OnInit {
  page = {
    index: 0,
    size: 1,
    count: 1
  };
  quizes: any[];
  quiz: Quiz = new Quiz(null);
  mode = "quiz";
  quizName: string;
  config: Config = {
    goback: true,
    size: 1,
    showpage: true
  };
  // quiz: Quiz = new Quiz(null);
  constructor(private router: Router, private quizService: QuizService) {}

  ngOnInit() {
    this.quizes = this.quizService.getAll();
    this.quizName = this.quizes[0].id;
    this.generateQuiz(this.quizName);
  }

  onSubmit() {
    let answers = [];
    this.quiz.questions.forEach(x =>
      answers.push({
        quizId: this.quiz.id,
        questionId: x.id,
        answered: x.answered
      })
    );
    this.mode = "result";
  }

  generateQuiz(quizName: string) {
    this.quizService.get(quizName).subscribe(res => {
      this.quiz = new Quiz(res);
      this.page.count = this.quiz.questions.length;
    });
    this.mode = "quiz";
  }

  get filteredQuestions() {
    return this.quiz.questions
      ? this.quiz.questions.slice(
          this.page.index,
          this.page.index + this.page.size
        )
      : [];
  }

  onSelect(question: Question, option: Option) {
    question.options.forEach(x => {
      if (x.id !== option.id) x.selected = false;
    });
  }

  goTo(index: number) {
    if (index >= 0 && index < this.page.count) {
      this.page.index = index;
      this.mode = "quiz";
    }
  }
}
