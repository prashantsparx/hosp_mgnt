import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { notFoundComponent } from './notfound/notFound.component';

const routes: Routes = [
  {path: "dashboard", component: DashboardComponent},
  {path: "login", component: LoginComponent},
  {path: "", pathMatch: "full", redirectTo: "login"},
  {path: "**", component: notFoundComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    notFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
