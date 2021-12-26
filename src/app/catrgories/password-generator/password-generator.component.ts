import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.scss'],
})
export class PasswordGeneratorComponent implements OnInit {
  randomPasswords: any;
  constructor() {}

  ngOnInit(): void {
    this.makeAnotherPasswords();
  }
  makeAnotherPasswords() {
    this.randomPasswords = [];
    for (var i = 0; i < 25; i++) {
      const text = this.getTenRandom(15);
      this.randomPasswords.push(text);
    }
  }

  getTenRandom(len: number) {
    var text = '';

    var charset =
      'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (var i = 0; i < len; i++)
      text += charset.charAt(Math.floor(Math.random() * charset.length));

    return text;
  }
}
