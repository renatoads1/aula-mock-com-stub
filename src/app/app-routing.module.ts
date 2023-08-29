import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StubcComponent } from './feature/stubc/stubc.component';
import { HomeComponent } from './feature/home/home.component';

const routes: Routes = [
  { path: 'stubc', component: StubcComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
