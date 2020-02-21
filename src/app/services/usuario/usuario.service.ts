import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import {HttpClient} from '@angular/common/http';
import { URL_HOST } from '../../config/config';

@Injectable()
export class UsuarioService {

  constructor(public http: HttpClient) {
    console.log("Servicio funcionando")
   }

   crearUsuario(usuario: Usuario){
    let url = URL_HOST + '/usuario';
    console.log(url)
    return this.http.post(url,usuario);
   }
}
