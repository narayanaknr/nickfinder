import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fancy-text',
  templateUrl: './fancy-text.component.html',
  styleUrls: ['./fancy-text.component.scss'],
})
export class FancyTextComponent implements OnInit {
  constructor() {}
  text: string = '';
  ngOnInit(): void {}
  copyToCursor(event: any) {
    console.log(event.srcElement.innerHTML);
    navigator.clipboard.writeText(event.srcElement.innerHTML);
    this.text = this.text + event.srcElement.innerHTML;
  }
  copyResult() {
    /* Get the text field */
    var copyText: any = document.getElementById('the_result');

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    alert('Copied the text: ' + copyText.value);
  }
}
