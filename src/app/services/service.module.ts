import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from './usuario/usuario.service';


import{SettingsService,SidebarService, SharedService} from './service.index';
import { HttpClientModule } from '@angular/common/http';
import { LoginGuardGuard } from './service.index';
import { CargarArchivoService } from './cargarArchivo/cargar-archivo.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,HttpClientModule
  ],
  providers:[SettingsService,SidebarService,SharedService, UsuarioService, LoginGuardGuard, CargarArchivoService]
})
export class ServiceModule { }
