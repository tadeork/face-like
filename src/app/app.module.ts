import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FriendsComponent } from './friends/friends.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthorizeGuard } from './guards/authorize.guard';

import { UserService } from './services/user.service';
import { AlertService } from './services/alert.service';
import { FriendsListService } from './services/friends-list.service';
import { AuthenticationService } from './services/authentication.service';
import { FriendsService } from './friends/friends.service';

import { appRoutes} from './app.route';
import { AppComponent } from './app.component';
import { FriendsPipe } from './pipes/friends.pipe';
import { UserComponent } from './user/user.component';
import { PostsComponent } from './home/posts/posts.component';
import { PostsService } from './services/posts.service';
import { AlreadyFriendPipe } from './pipes/already-friend.pipe';
import { NameDirective } from './directives/name.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FriendsComponent,
    NotFoundComponent,
    ProfileComponent,
    FriendsPipe,
    UserComponent,
    PostsComponent,
    AlreadyFriendPipe,
    NameDirective
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
    FriendsListService,
    PostsService,
    FriendsService,
  ] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
