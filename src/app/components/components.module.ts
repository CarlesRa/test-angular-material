import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

// Custom Components
import { ToolbarComponent } from './shared/toolbar/toolbar.component';

// Angular Material imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './shared/card/card.component';

@NgModule({
  declarations: [
    HomeComponent,
    ToolbarComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
  ],
  exports: [
    HomeComponent,
    ToolbarComponent,
    CardComponent,
  ],
})
export class ComponentsModule { }
