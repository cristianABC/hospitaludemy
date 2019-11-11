import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
   this.contarTres().then(
      ()=>console.log("Fini")
    ).catch( error => console.error("Error en la promesa", error));


  }

  ngOnInit() {
  }

  contarTres(){
    let promesa = new Promise((resolve, reject)=>{
      let contador = 0 ;
      let inter = setInterval(()=>{
        contador +=1;
        if(contador===3){
          resolve();
          clearInterval(inter);
        }
      },1000)
    });
  
    return promesa;
  }

}
