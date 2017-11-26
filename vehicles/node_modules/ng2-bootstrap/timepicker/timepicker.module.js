import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TimepickerComponent } from './timepicker.component';
import { TimepickerConfig } from './timepicker.config';
var TimepickerModule = (function () {
    function TimepickerModule() {
    }
    TimepickerModule.forRoot = function () {
        return {
            ngModule: TimepickerModule,
            providers: [TimepickerConfig]
        };
    };
    return TimepickerModule;
}());
export { TimepickerModule };
TimepickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule],
                declarations: [TimepickerComponent],
                exports: [TimepickerComponent, FormsModule]
            },] },
];
/** @nocollapse */
TimepickerModule.ctorParameters = function () { return []; };
//# sourceMappingURL=timepicker.module.js.map