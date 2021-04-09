import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userName: string="Ali";

  constructor() { }

  ngOnInit(): void {
  }

  onInput(): void {
    console.log(this.userName);
  }

  onClick(): void {
    this.userName="";
  }

}
