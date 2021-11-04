import { Component } from '@angular/core';
import { CtFormControlType, CtFormRow, CtForm, CtFormControl, CtFormSection } from 'ct-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'akti.noviAkt';

  controlTypes = CtFormControlType;

  ctForm: CtForm = new CtForm(this.title).addSection(
    new CtFormSection()
      .addRow(
        new CtFormRow()
        .addControl(
          new CtFormControl(
            "brojPredmeta",
            "akti.brojPredmeta",
            "0098-32434-32443/2021",
            CtFormControlType.TEXT_INPUT,
            50,
            this.onBrojPredmetaChange
          )
        )
        .addControl(
          new CtFormControl(
            "objectName",
            "akti.objectName",
            "boban.galic-0098-32434-32443/2021",
            CtFormControlType.TEXT_INPUT,
            50,
            this.onObjectNameChange
          )
        )
      )
      .addRow(
        new CtFormRow()
          .addControl(
            new CtFormControl(
              "redniBroj",
              "akti.redniBroj",
              "00002",
              CtFormControlType.TEXT_INPUT,
              100
            )
          )
      )
  )

  onBrojPredmetaChange(newValue: any): void {
    console.log("Broj predmeta je promenjen u: " + newValue)
  }

  onObjectNameChange(newValue: any): void {
    console.log("ObjectName je promenjen u: " + newValue)
  }
}
