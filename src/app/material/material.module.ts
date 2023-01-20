import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

const MODULES = [
  MatIconModule,
  MatTooltipModule,
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatTableModule,
  MatProgressBarModule,
  MatInputModule,
];
@NgModule({
  imports: [MODULES],
  exports: [MODULES],
})
export class MaterialModule {}
