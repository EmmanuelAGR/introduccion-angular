import { Component } from "@angular/core";


@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})
export class HeroeComponent{

  name: string = 'IronMan';
  age  : number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }
 
  getNombre(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeName(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    console.log('hey...')
    this.age = 30;
  }
  
}