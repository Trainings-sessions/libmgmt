import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu'
import {MatBadgeModule} from '@angular/material/badge';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import { GalaryComponent } from './galary/galary.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRegiterationComponent } from './user-regiteration/user-regiteration.component';
import { MatchPasswordDirective } from './match-password.directive';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NoopInterceptor } from './noop.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    GalaryComponent,
    NavigationbarComponent,
    PageNotFoundComponent,
    LoginComponent,
    UserRegiterationComponent,
    MatchPasswordDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatToolbarModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS,useClass:NoopInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
