import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  @Input() check: boolean=false;
  @Output('checkChange') change=new EventEmitter();
  ngOnInit() {
  }
  onChange(e){
    this.change.emit(e.target.checked);
    console.log(e)
  }
  
}
