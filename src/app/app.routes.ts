import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ContectComponent } from './Components/contect/contect.component';
import { WorkComponent } from './Components/work/work.component';
import { EducationComponent } from './Components/education/education.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:'contect', component: ContectComponent},
    {path:'work', component: WorkComponent},
    {path:'education', component: EducationComponent}
];
