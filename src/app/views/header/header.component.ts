import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }


  searchToggle:boolean = false;
  switchSearchIcon:string = "search";
  searchToggleEvent(){
    this.searchToggle = !this.searchToggle;
    if(this.searchToggle == false){
      this.switchSearchIcon = "search";
    }
    else {
      this.switchSearchIcon = "close";
    }
  }

  ngOnInit() {
  }

}
