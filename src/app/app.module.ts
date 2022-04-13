import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http'
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { ViewReposComponent } from './view-repos/view-repos.component';
import { ViewSingleRepoComponent } from './view-single-repo/view-single-repo.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewReposComponent,
    ViewSingleRepoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
