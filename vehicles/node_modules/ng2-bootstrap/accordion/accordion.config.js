import { Injectable } from '@angular/core';
/**
 * Configuration service, provides default values for the AccordionComponent.
 */
var AccordionConfig = (function () {
    function AccordionConfig() {
        /** Whether the other panels should be closed when a panel is opened */
        this.closeOthers = false;
    }
    return AccordionConfig;
}());
export { AccordionConfig };
AccordionConfig.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AccordionConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=accordion.config.js.map