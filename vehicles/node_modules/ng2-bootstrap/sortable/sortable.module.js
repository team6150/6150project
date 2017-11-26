import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortableComponent } from './sortable.component';
import { DraggableItemService } from './draggable-item.service';
var SortableModule = (function () {
    function SortableModule() {
    }
    SortableModule.forRoot = function () {
        return { ngModule: SortableModule, providers: [DraggableItemService] };
    };
    return SortableModule;
}());
export { SortableModule };
SortableModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SortableComponent],
                imports: [CommonModule],
                exports: [SortableComponent]
            },] },
];
/** @nocollapse */
SortableModule.ctorParameters = function () { return []; };
//# sourceMappingURL=sortable.module.js.map