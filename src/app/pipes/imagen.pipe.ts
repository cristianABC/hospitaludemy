import { Pipe, PipeTransform } from '@angular/core';
import { URL_HOST } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: any, tipo:string='usuario'): any {
    let url = URL_HOST + '/img';
    if(!img){
      return url+'/usuarios/xxx'
    }
    switch(tipo){
      case 'usuario':
      url += '/usuarios/'+img;
      break;
      case 'doctor':
      url += '/doctores/'+img;
      break;
      case 'hospital':
      url += '/usuarios/'+img;
      break;
      default: 
      console.log('tipo de imagen no existe, usuario, medicos, hospitales');
      url += '/usuarios/xxx'
    }
    return url;
  }

}
