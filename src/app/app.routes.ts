import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NotpagefoundComponent } from './shared/notpagefound/notpagefound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';




const appRoutes: Routes = [
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path:'**', component:NotpagefoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes,{useHash: true});