import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Usuario } from '../models/usuario.model';
import { UsuarioService } from '../services/service.index';

declare function init_plugins();
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 recuerdame:boolean= false;
  constructor(public router:Router,public _usuarioService: UsuarioService) { }

  ngOnInit() {
    init_plugins();
  }
  ingresar(forma: NgForm){
    if(forma.invalid){
      return;
    }

    let usuario = new Usuario(null, forma.value.correo, forma.value.password )
  this._usuarioService.login(usuario, forma.value.recuerdame).subscribe(resp=>{
    console.log(resp);
  })

console.log(forma.valid);
console.log(forma.value)
  //this.router.navigate(['/dashboard']);
  }

}
