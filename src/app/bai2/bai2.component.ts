import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai2',
  templateUrl: './bai2.component.html',
  styleUrls: ['./bai2.component.css']
})
export class Bai2Component implements OnInit {

  x:number;
  n:number;
  tong=0;
  constructor() { }

  ngOnInit(): void {
  }
  bai2(){
    let T = 1;
    let M = 1;
    for(var i = 1; i <= this.n; i++){
      T = T*this.x;
      M=M*i;
      this.tong += Math.pow(-1,i)*T/M;
    }
  }

}
