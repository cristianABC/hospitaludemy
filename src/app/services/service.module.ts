import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from './usuario/usuario.service';


import{SettingsService,SidebarService, SharedService} from './service.index';
import { HttpClientModule } from '@angular/common/http';
import { LoginGuardGuard } from './service.index';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,HttpClientModule
  ],
  providers:[SettingsService,SidebarService,SharedService, UsuarioService, LoginGuardGuard]
})
export class ServiceModule { }
