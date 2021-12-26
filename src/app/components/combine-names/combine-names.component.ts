import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-combine-names',
  templateUrl: './combine-names.component.html',
  styleUrls: ['./combine-names.component.scss'],
})
export class CombineNamesComponent implements OnInit {
  name1: string ="Xzavion";
  name2: string = "Yaretzi";
  name3:string='';
  name4: string='';
  mixedWord: string[] =[];
  constructor() {}

  ngOnInit(): void {
    this.mixWords();
  }
  mixWords(){
    let new_word:string='';
    this.mixedWord =[];
   if(this.name3.length >0  && this.name4.length >0 ){ 
   new_word = this.name1+this.name2+this.name3+this.name4;
   }
   if(this.name3.length===0  && this.name4.length===0){
    new_word = this.name1+this.name2;
   }
   if(this.name3.length>0  && this.name4.length===0){
    new_word = this.name1+this.name2+this.name3
   }
   if(this.name3.length===0  && this.name4.length>0){
    new_word = this.name1+this.name2+this.name4
   }
   const n1 = new_word.slice(0,this.name1.length/2)
   const n2 = new_word.slice(this.name1.length, -this.name2.length/2);
   const n3=n1+n2;
   n3.split('').sort(() => 0.5-Math.random()).join('');
   this.mixedWord.push(n3.split('').sort(() => 0.5-Math.random()).join(''));
   for(let i=0;i<4;i++){
   var shuffled = new_word.split('').sort(() => 0.5-Math.random()).join('');
    this.mixedWord.push(shuffled);
   }
  }
  
}
