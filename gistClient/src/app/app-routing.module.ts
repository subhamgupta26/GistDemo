import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { CreateDiseaseComponent } from "app/create-disease/create-disease.component";



const routes: Routes = [
// {
// path: 'surveys',
// component: SurveyPostListComponent,
// },
// {
//     path:'surveys/:id',
//     component:SurveyPostDetailsComponent,
// },
{
path: '',
redirectTo: '/admin',
pathMatch: 'full'
},
{
    path:'admin',
    component:CreateDiseaseComponent
},
// {
//     path:'consumer',
//     component:
// }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule{}