import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccordianComponent } from './accordian/accordian.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: '', component:  HomeComponent},
  { path: 'home', component:  HomeComponent},
  { path: 'accordian', component:  AccordianComponent},
  { path: 'table', component:  TableComponent},
  { path: '**', component:  HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
