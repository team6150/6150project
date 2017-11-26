import { Injectable } from '@angular/core';
var AlertConfig = (function () {
    function AlertConfig() {
        /** default alert type */
        this.type = 'warning';
        /** is alerts are dismissible by default */
        this.dismissible = false;
        /** default time before alert will dismiss */
        this.dismissOnTimeout = undefined;
    }
    return AlertConfig;
}());
export { AlertConfig };
AlertConfig.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AlertConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=alert.config.js.map