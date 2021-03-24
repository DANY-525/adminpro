import { Component } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {


  titulo:string = "ventas development";
  labels1: String[] = ['test', 'test2', 'test3'];
  data1: any = [
    [1, 2, 3],
  ];

  colors:any[] =[
    {backgroundColor:['#7B12AE','#DDD777','#FFd944']}

  ];

  



}
