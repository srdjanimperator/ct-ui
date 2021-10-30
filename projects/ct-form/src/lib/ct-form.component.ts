import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ct-form',
  template: `
    <p>
      ct-form works!
    </p>
    <button mat-raised-button color="primary">Primary</button>
  `,
  styles: [
  ]
})
export class CtFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
