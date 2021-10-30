import { Component, OnInit } from '@angular/core';
import { CtFormControlType } from './model/ct-form-control-type.enum';
import { CtForm, CtFormControl, CtFormRow, CtFormSection } from './model/ct-form.model';

@Component({
  selector: 'ct-form',
  template: `
  <div class="ct-form" *ngIf="ctForm">
    <p *ngIf="ctForm.title">
      {{ ctForm.title }}
    </p>
    <div *ngFor="let section of ctForm.sections">
      <div class="ct-form-section">
        <p *ngIf="section.title">
          {{ section.title }}
        </p>
        <div *ngFor="let row of section.rows">
          <div class="ct-row">
            <div *ngFor="let control of row.controls">
              <div class="ct-column">
                <div *ngIf="control.controlType == controlTypes.TEXT_INPUT">
                  <span>{{ control.label }}</span>
                  <input (change)="onControlValueChange('vrednost', control)" type="text">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button mat-raised-button color="primary">Primary</button>
  </div>
  `,
  styles: [
  ]
})
export class CtFormComponent implements OnInit {

  ctForm: CtForm = new CtForm("Novi akt");

  controlTypes = CtFormControlType;

  // TODO: JSON PARSER
  // TODO: FORM BUILDER && HTML

  constructor() { }

  ngOnInit(): void {
    this.ctForm.addSection(
      new CtFormSection()
        .addRow(
          new CtFormRow()
            .addControl(
              new CtFormControl(
              "brojPredmeta", 
              "akti.brojPredmeta", 
              "0098-32434-32443/2021",
              CtFormControlType.TEXT_INPUT,
              100,
              this.onBrojPredmetaChange
            ))
        )
    )
  }

  onControlValueChange(event: any, control: CtFormControl) {
    console.log(event);
    if (control.onChangeCallbackFn != null) {
      control.onChangeCallbackFn(event);
    }
  }

  onBrojPredmetaChange(newValue: any): void { 
    console.log("Broj predmeta je promenjen!")
  }

}
