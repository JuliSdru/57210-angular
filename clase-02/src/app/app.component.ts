import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'clase-02';
  contador = 0;

  //saludar boton
  saludar(){
    console.log('hola!');
    alert('hola');
  }

  //sumar boton
  sumar(){
    this.contador++;
    alert(this.contador);
  }
}
