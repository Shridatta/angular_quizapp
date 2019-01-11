import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";


@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatCardModule],
  exports: [MatButtonModule, MatToolbarModule, MatCardModule]
})
export class MaterialModule {}
