import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TestComponent } from "./test/test.component";
import { MaterialModule } from "./material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { QuizComponent } from "./quiz/quiz.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HttpClientModule } from "@angular/common/http";
import { QuizService } from "./services/quiz.service";
import { FormsModule } from "@angular/forms";

const appRoutes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "quiz", component: QuizComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    QuizComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule {}
