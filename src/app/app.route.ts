import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AuthorizeGuard } from './guards/authorize.guard';
import { FriendsComponent} from './friends/friends.component';
import {LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {HomeComponent} from './home/home.component';

export const appRoutes: Routes = [
  { path: 'user', component: UserComponent, canActivate: [AuthorizeGuard] },
  { path: 'friends', component: FriendsComponent, canActivate: [AuthorizeGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthorizeGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent },
];
