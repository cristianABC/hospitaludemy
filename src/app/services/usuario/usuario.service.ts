import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import {HttpClient} from '@angular/common/http';
import { URL_HOST } from '../../config/config';

import {map} from 'rxjs/operators';


@Injectable()
export class UsuarioService {

  constructor(public http: HttpClient) {
    console.log("Servicio funcionando")
   }

   login(usuario:Usuario, recordar: boolean = false){
    let url = URL_HOST + '/login';
    return this.http.post(url, usuario).pipe(map((resp:any)=>{
        localStorage.setItem('id', resp.id);
        localStorage.setItem('token', resp.token);
        localStorage.setItem('usuario', JSON.stringify(resp.usuario));
        return true;
    }));
   }


   crearUsuario(usuario: Usuario){
    let url = URL_HOST + '/usuario';
    console.log(url)
    return this.http.post(url,usuario).pipe(map((res:any)=>{
     // swal('Usuario creado ', usuario.correo, 'success');
        return res.usuario;
    }));
   }
}
