import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CollapseModule } from '../collapse/collapse.module';
import { AccordionPanelComponent } from './accordion-group.component';
import { AccordionComponent } from './accordion.component';
import { AccordionConfig } from './accordion.config';
var AccordionModule = (function () {
    function AccordionModule() {
    }
    AccordionModule.forRoot = function () { return { ngModule: AccordionModule, providers: [AccordionConfig] }; };
    return AccordionModule;
}());
export { AccordionModule };
AccordionModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, CollapseModule],
                declarations: [AccordionComponent, AccordionPanelComponent],
                exports: [AccordionComponent, AccordionPanelComponent]
            },] },
];
/** @nocollapse */
AccordionModule.ctorParameters = function () { return []; };
//# sourceMappingURL=accordion.module.js.map