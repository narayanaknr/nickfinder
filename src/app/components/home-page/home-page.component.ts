import { Component, OnInit } from '@angular/core';
import { ComponentsService } from 'src/app/service/components.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  randomNames: any;
  generatedNames: any;
  firstLetters!: string;
  topFifty: any;
  constructor(private service: ComponentsService) {}

  ngOnInit(): void {
    this.getRandomNames();
    this.getTopFifty();
  }
  getRandomNames() {
    this.service.getRandomNicknames().subscribe((res) => {
      const data = res.map((e) => {
        return {
          ...(e.payload.doc.data() as any),
        } as any;
      });
      this.randomNames = data;
      console.log(data);
      console.log(this.generateRandomFive(this.randomNames, 5));
    });
  }
  getTopFifty() {
    this.service.getTopFifty().subscribe((res) => {
      const data = res.map((e) => {
        return {
          ...(e.payload.doc.data() as any),
        } as any;
      });
      this.topFifty = data;
      console.log(data);
    });
  }
  generateRandomFive(arr: any, count: number) {
    var shuffled = arr.slice(0),
      i = arr.length,
      min = i - count,
      temp,
      index;
    while (i-- > min) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
    }
    this.generatedNames = shuffled.slice(min);
  }
}
