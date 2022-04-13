import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ViewReposComponent } from './view-repos/view-repos.component';
import { ViewSingleRepoComponent } from './view-single-repo/view-single-repo.component';

const routes: Routes = [
  {path: '', component: AppComponent },

    {path: 'viewAll', component: ViewReposComponent },
    {path: 'viewsingle/:id', component: ViewSingleRepoComponent },

    {path: '**', component: AppComponent, pathMatch:'full' },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
