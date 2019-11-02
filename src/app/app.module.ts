import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotpagefoundComponent } from './shared/notpagefound/notpagefound.component';
//import { DashboardComponent } from './pages/dashboard/dashboard.component';
//import { ProgressComponent } from './pages/progress/progress.component';
//import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { APP_ROUTES } from './app.routes';
import { RegisterComponent } from './login/register.component';

import { PagesModule } from './pages/pages.module';
import { SettingsService } from './services/settings/settings.service';
import { ServiceModule } from './services/service.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule, APP_ROUTES, PagesModule, FormsModule, ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
