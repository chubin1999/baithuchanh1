import { Component, OnInit , EventEmitter,Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-bai1',
  templateUrl: './bai1.component.html',
  styleUrls: ['./bai1.component.css']
})
export class Bai1Component implements OnInit {
  x: number;
  n: number;
  tong:number = 0;
  constructor() { }
  ngOnInit(): void {}
  bai1(){
    console.log("Bài1:");
    let value:number=1;
    this.tong = 0;
    for(var i = 1; i <= this.n; i++){
      value = value * this.x;
      this.tong += value;
    }
    console.log(this.tong);
  }
}
