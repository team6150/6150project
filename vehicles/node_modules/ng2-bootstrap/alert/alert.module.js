import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert.component';
import { AlertConfig } from './alert.config';
var AlertModule = (function () {
    function AlertModule() {
    }
    AlertModule.forRoot = function () {
        return { ngModule: AlertModule, providers: [AlertConfig] };
    };
    return AlertModule;
}());
export { AlertModule };
AlertModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [AlertComponent],
                exports: [AlertComponent],
                entryComponents: [AlertComponent]
            },] },
];
/** @nocollapse */
AlertModule.ctorParameters = function () { return []; };
//# sourceMappingURL=alert.module.js.map