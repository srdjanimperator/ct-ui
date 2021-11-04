import { Component, OnInit } from '@angular/core';
import { CtFormControlType, CtFormRow, CtForm, CtFormControl, CtFormSection } from 'ct-form';

@Component({
  selector: 'app-akt-create',
  templateUrl: './akt-create.component.html',
  styleUrls: ['./akt-create.component.scss']
})
export class AktCreateComponent implements OnInit {

  title = 'akti.noviAkt';

  controlTypes = CtFormControlType;

  ctForm: CtForm = new CtForm(this.title, [
    new CtFormSection(
      "Osnovni podaci", [
      new CtFormRow(
        [
          new CtFormControl(
            "brojPredmeta",
            "Broj predmeta",
            "0098-32434-32443/2021",
            CtFormControlType.TEXT_INPUT,
            50,
            this.onBrojPredmetaChange
          ),
          new CtFormControl(
            "objectName",
            "akti.objectName",
            "boban.galic-0098-32434-32443/2021",
            CtFormControlType.TEXT_INPUT,
            50,
            this.onObjectNameChange
          )
        ]
      ),
      new CtFormRow(
        [
          new CtFormControl(
            "redniBroj",
            "akti.redniBroj",
            "",
            CtFormControlType.TEXT_INPUT,
            100
          )
        ]
      )
    ]
    ),
    new CtFormSection(
      "akti.drugiPodaci", [
      new CtFormRow(
        [
          new CtFormControl(
            "nesto",
            "akti.nesto",
            "",
            CtFormControlType.TEXT_INPUT,
            50
          ),
          new CtFormControl(
            "created",
            "akti.created",
            "boban.galic",
            CtFormControlType.TEXT_INPUT,
            33
          ),
          new CtFormControl(
            "drugo",
            "akti.drugo",
            "",
            CtFormControlType.TEXT_INPUT,
            33
          )
        ]
      )
    ]
    )
  ])

  ngOnInit(): void {

  }

  onBrojPredmetaChange(newValue: any): void {
    console.log("Broj predmeta je promenjen u: " + newValue)
  }

  onObjectNameChange(newValue: any): void {
    console.log("ObjectName je promenjen u: " + newValue)
  }
}
