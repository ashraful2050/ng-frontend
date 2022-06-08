import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './user/add-user/add-user.component';
import { ViewUserComponent } from './user/view-user/view-user.component';

//manual import kora lagbena, auto import kore niba, tate kostho kom hobe
//oho okay.. back kore auto ta dekhao

//all import or ekta ekta kore import

const routes: Routes = [
  { path: '', component: ViewUserComponent },
  { path: 'user/view', component: ViewUserComponent },
  { path: 'user/add', component: AddUserComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
