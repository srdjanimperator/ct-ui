import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CtFormControlType } from './model/ct-form-control-type.enum';
import { CtForm, CtFormControl, CtFormRow, CtFormSection } from './model/ct-form.model';

@Component({
  selector: 'ct-form',
  templateUrl: "./ct-form.component.html",
  styles: [
  ]
})
export class CtFormComponent implements OnInit {

  ctForm: CtForm = new CtForm("Novi akt");

  controlTypes = CtFormControlType;
  form: FormGroup = this.fb.group({});
  loading: boolean = true;
  // TODO: JSON PARSER
  // TODO: FORM BUILDER && HTML

  constructor(private fb: FormBuilder) { }

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
              )
            )
            .addControl(
              new CtFormControl(
                "objectName",
                "akti.objectName",
                "Testiranje akata",
                CtFormControlType.TEXT_INPUT,
                100,
                this.onObjectNameChange
              )
            )
            .addControl(
              new CtFormControl(
                "objectName2",
                "akti.objectName2",
                "Testiranje akata2",
                CtFormControlType.TEXT_INPUT,
                100,
                this.onObjectNameChange
              )
            )
        )
    )

    console.log(JSON.stringify(this.ctForm))

    this.ctForm.sections.forEach(section => {
      section.rows.forEach(row => {
        row.controls.forEach(control => {
          this.form.addControl(
            control.attributeName,
            new FormControl({ value: control.predefinedValue, disabled: false }, [Validators.required])
          )
        });
      });
    });
    this.loading = false;
  }

  onControlValueChange(event: any, control: CtFormControl) {
    console.log(event);
    if (control.onChangeCallbackFn != null) {
      control.onChangeCallbackFn(event.target.value);
    }
  }

  onBrojPredmetaChange(newValue: any): void {
    console.log("Broj predmeta je promenjen u: " + newValue)
  }

  onObjectNameChange(newValue: any): void {
    console.log("ObjectName je promenjen u: " + newValue)
  }

}
