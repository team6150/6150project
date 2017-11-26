import { Component, Input } from '@angular/core';
import { ProgressbarConfig } from './progressbar.config';
var ProgressbarComponent = (function () {
    function ProgressbarComponent(config) {
        Object.assign(this, config);
    }
    return ProgressbarComponent;
}());
export { ProgressbarComponent };
ProgressbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'progressbar',
                template: "\n    <div progress [animate]=\"animate\" [max]=\"max\">\n      <bar [type]=\"type\" [value]=\"value\">\n          <ng-content></ng-content>\n      </bar>\n    </div>\n  "
            },] },
];
/** @nocollapse */
ProgressbarComponent.ctorParameters = function () { return [
    { type: ProgressbarConfig, },
]; };
ProgressbarComponent.propDecorators = {
    'animate': [{ type: Input },],
    'max': [{ type: Input },],
    'type': [{ type: Input },],
    'value': [{ type: Input },],
};
//# sourceMappingURL=progressbar.component.js.map