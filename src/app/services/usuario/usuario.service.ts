import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import {HttpClient} from '@angular/common/http';
import { URL_HOST } from '../../config/config';

import {map} from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class UsuarioService {
  token:string;
  usuario:Usuario;
  constructor(public http: HttpClient, public router:Router) {
    console.log("Servicio funcionando")
    this.cargarStorage();
   }
  logout(){
    this.token=null;
    this.usuario = null;
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
    
  }

   estaLogeado(){
     if(this.token){
       return (this.token.length>5) ? true : false;
      }
   }

   cargarStorage(){
     if(localStorage.getItem('token')){
       this.token =  localStorage.getItem('token');
       this.usuario = JSON.parse(localStorage.getItem('usuario'));
     }
   }

   guardarStorage(id, token , usuario){
     localStorage.setItem('usuario',usuario);
     localStorage.setItem('_id', id);
     localStorage.setItem('usuario', JSON.stringify(usuario));
   }
   login(usuario:Usuario, recordar: boolean = false){

    if(recordar){
      localStorage.setItem('email', usuario.correo);
    }else{
      localStorage.removeItem('email');
    }
    let url = URL_HOST + '/login';
    return this.http.post(url, usuario).pipe(map((resp:any)=>{
      console.log(resp.usuario);
        localStorage.setItem('id', resp.id);
        localStorage.setItem('_id', resp.usuario.id);
        this.token = resp.token;
        localStorage.setItem('token', resp.token);
        localStorage.setItem('usuario', JSON.stringify(resp.usuario));
        this.usuario = resp.usuario;
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

   actualizarUsuario(usuario:Usuario){
     
     let url = URL_HOST + '/usuario/' + usuario._id;
     url += '?token='+this.token;
     return this.http.put(url, usuario).pipe(map((resp:any)=>{
       this.usuario = resp.usuario;

       this.guardarStorage(this.usuario.id, this.token,this.usuario);
       
     }));
   }
}
