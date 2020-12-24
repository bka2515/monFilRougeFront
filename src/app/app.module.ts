import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';







import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { JwtInterceptor } from './_helpers/jwt.interceptor'

// import { LoginComponentComponent } from './login-component/login-component.component';

import { RouterModule, Routes }  from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { Route } from '@angular/compiler/src/core';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { ResistorComponent } from './resistor/resistor.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { ProfilsModule } from './profils/profils.module';
import { ProfilsListComponent } from './profils-list/profils-list.component';
import { ListUserComponent } from './list-user/list-user.component';





const appRoutes: Routes=[
  // {path: 'connexion', component: LoginComponentComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    ResistorComponent,
    ProfilsListComponent,
    ListUserComponent,
    // LoginComponentComponent,
    
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule,
    ReactiveFormsModule, MatCardModule,
    MatInputModule, MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    MatIconModule,
    MatRadioModule,
    MatGridListModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass :'toast-bottom-right'
    }),
    ProfilsModule
    

    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
    ToastrService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
