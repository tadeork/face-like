import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { appRoutes} from './app.route';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FriendsComponent } from './friends/friends.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthorizeGuard } from './guards/authorize.guard';
import { AlertService } from './services/alert.service';
import {AuthenticationService} from './services/authentication.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FriendsComponent,
    NotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    HttpModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [
    UserService,
    AuthorizeGuard,
    AlertService,
    AuthenticationService,
  ] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
