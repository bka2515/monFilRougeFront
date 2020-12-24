import { ResistorComponent } from './resistor/resistor.component';
import { ListUserComponent } from './list-user/list-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfilsListComponent } from './profils-list/profils-list.component';
// import { LoginComponentComponent } from './login-component/login-component.component';



const routes: Routes = [
  { path: 'connexion', component: LoginComponent },
 { path: 'profils', component: ProfilsListComponent },
 { path: 'users', component: ListUserComponent },
 { path: 'register', component: ResistorComponent },
//   { path: 'owner', loadChildren: () => import('./Profils/Profils.module').then(m => m.ProfilsModule) }, 
//   { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
