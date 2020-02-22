import { Injectable } from '@angular/core';
import { URL_HOST } from '../../config/config';
import { XhrFactory } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CargarArchivoService {

  constructor() { }

  subirArchivo(archivo: File, tipo:string, id: string){
    return new Promise((resolve, reject)=>{
      let formData = new FormData();
      let xhr = new XMLHttpRequest();
      formData.append('imagen', archivo,archivo.name);
      xhr.onreadystatechange= function(){
        if(xhr.readyState === 4){
          if(xhr.status == 200){
            console.log('imagen subida');
            resolve(JSON.parse(xhr.response));
          }else{
            console.log('Fallo la subida');
            reject(xhr.response);
          }
        }
      };

      let url = URL_HOST + '/upload/'+tipo+'/'+ id;
      
      xhr.open('PUT', url, true);
      xhr.setRequestHeader("Access-Control-Allow-Headers", "x-requested-with");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.withCredentials = true;
      xhr.send(formData);
    }) ;


  }

}
