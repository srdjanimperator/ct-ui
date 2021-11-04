import { CtFormControlType } from "./ct-form-control-type.enum";

export class CtForm {
    title: string | null;
    sections: CtFormSection[] = [];
    maxWidth: string;

    actions: CtFormAction[] = [];

    constructor(title: string | null = null, sections: CtFormSection[] = [], actions: CtFormAction[] = [], maxWidth: string = "1024px") {
        this.title = title;
        this.sections = sections;
        this.maxWidth = maxWidth;
        this.actions = actions;
    }

    addSection(ctFormSection: CtFormSection): CtForm {
        this.sections.push(ctFormSection);
        return this;
    }
}

export class CtFormSection {
    rows: CtFormRow[] = [];
    collapsable: boolean = false;
    title: string | null;
 
    constructor(title: string | null = null, rows: CtFormRow[] = []) {
        this.title = title;
        this.rows = rows;
    }
}

export class CtFormRow {
    controls: CtFormControl[] = [];

    constructor(controls: CtFormControl[] = []) {
        this.controls = controls;
    }

    public addControl(column: CtFormControl): CtFormRow {
        this.controls.push(column);
        return this;
    }
}

interface CtOnChangeCallback { 
    (newValue: any): void 
}

export class CtFormControl {
    attributeName: string;
    label: string;
    predefinedValue: any;
    controlType: string;
    widthPercent: number = 100;

    onChangeCallbackFn: CtOnChangeCallback | null;

    constructor(attributeName: string, label: string, predefinedValue: any, controlType: CtFormControlType,
        widthPercent: number = 100,
        onChangeCallbackFn: CtOnChangeCallback | null = null
    ) {
        this.attributeName = attributeName;
        this.label = label;
        this.controlType = controlType;
        this.predefinedValue = predefinedValue;
        this.widthPercent = widthPercent;

        this.onChangeCallbackFn = onChangeCallbackFn;
    }
}

interface CtOnActionClickedCallback {
    (data: any): void
}

export class CtFormAction {
    label: string;
    color: string = "primary";
    onClickHandlerFn: CtOnActionClickedCallback;

    constructor(label: string, onClickHandlerFn: CtOnActionClickedCallback, color: string = "primary") {
        this.label = label;
        this.onClickHandlerFn = onClickHandlerFn;
        this.color = color;
    }
}