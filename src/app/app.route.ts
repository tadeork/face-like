import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { AuthorizeGuard } from './guards/authorize.guard';
import { FriendsComponent} from './friends/friends.component';
import {LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const appRoutes: Routes = [
  { path: 'user', component: HomeComponent, canActivate: [AuthorizeGuard] },
  { path: 'friends', component: FriendsComponent, canActivate: [AuthorizeGuard] },
  { path: 'home', component: FriendsComponent, canActivate: [AuthorizeGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent },
];
