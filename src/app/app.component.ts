import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = "Tao dang doi";
  today= Date.now();
 
  list=[{value: true},{value:false},{value:true},
  {value: true},{value:true},{value:true}];
   onClick(){
     for (var i = 0; i < this.list.length; i++){
       this.list[i].value=true;

     }
  }
}

