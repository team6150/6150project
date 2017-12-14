"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var domhandler_1 = require("../dom/domhandler");
var animations_1 = require("@angular/animations");
var OverlayPanel = /** @class */ (function () {
    function OverlayPanel(el, domHandler, renderer, cd) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.cd = cd;
        this.dismissable = true;
        this.onBeforeShow = new core_1.EventEmitter();
        this.onAfterShow = new core_1.EventEmitter();
        this.onBeforeHide = new core_1.EventEmitter();
        this.onAfterHide = new core_1.EventEmitter();
        this.visible = false;
    }
    OverlayPanel.prototype.ngAfterViewInit = function () {
        this.container = this.el.nativeElement.children[0];
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.container);
            else
                this.domHandler.appendChild(this.container, this.appendTo);
        }
    };
    OverlayPanel.prototype.ngAfterViewChecked = function () {
        if (this.willShow) {
            this.domHandler.absolutePosition(this.container, this.target);
            this.bindDocumentClickListener();
            this.onAfterShow.emit(null);
            this.willShow = false;
        }
        if (this.willHide) {
            this.onAfterHide.emit(null);
            this.willHide = false;
        }
    };
    OverlayPanel.prototype.bindDocumentClickListener = function () {
        var _this = this;
        if (!this.documentClickListener && this.dismissable) {
            this.documentClickListener = this.renderer.listen('document', 'click', function () {
                if (!_this.selfClick && !_this.targetClickEvent) {
                    _this.hide();
                }
                _this.selfClick = false;
                _this.targetClickEvent = false;
                _this.cd.markForCheck();
            });
        }
    };
    OverlayPanel.prototype.unbindDocumentClickListener = function () {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    };
    OverlayPanel.prototype.toggle = function (event, target) {
        if (!this.target || this.target === (target || event.currentTarget || event.target)) {
            if (this.visible)
                this.hide();
            else
                this.show(event, target);
        }
        else {
            this.show(event, target);
        }
    };
    OverlayPanel.prototype.show = function (event, target) {
        this.onBeforeShow.emit(null);
        this.target = target || event.currentTarget || event.target;
        this.container.style.zIndex = ++domhandler_1.DomHandler.zindex;
        this.visible = true;
        this.willShow = true;
        if (event.type === 'click') {
            this.targetClickEvent = true;
        }
    };
    OverlayPanel.prototype.hide = function () {
        if (this.visible) {
            this.onBeforeHide.emit(null);
            this.willHide = true;
            this.visible = false;
            this.selfClick = false;
            this.targetClickEvent = false;
            this.unbindDocumentClickListener();
        }
    };
    OverlayPanel.prototype.onPanelClick = function (event) {
        if (this.closeClick) {
            this.hide();
            this.closeClick = false;
        }
        else if (this.dismissable) {
            this.selfClick = true;
        }
    };
    OverlayPanel.prototype.onCloseClick = function (event) {
        this.closeClick = true;
        event.preventDefault();
    };
    OverlayPanel.prototype.ngOnDestroy = function () {
        this.unbindDocumentClickListener();
        if (this.appendTo) {
            this.el.nativeElement.appendChild(this.container);
        }
        this.target = null;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], OverlayPanel.prototype, "dismissable", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], OverlayPanel.prototype, "showCloseIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], OverlayPanel.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], OverlayPanel.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], OverlayPanel.prototype, "appendTo", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], OverlayPanel.prototype, "onBeforeShow", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], OverlayPanel.prototype, "onAfterShow", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], OverlayPanel.prototype, "onBeforeHide", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], OverlayPanel.prototype, "onAfterHide", void 0);
    OverlayPanel = __decorate([
        core_1.Component({
            selector: 'p-overlayPanel',
            template: "\n        <div [ngClass]=\"'ui-overlaypanel ui-widget ui-widget-content ui-corner-all ui-shadow'\" [ngStyle]=\"style\" [class]=\"styleClass\"\n            [style.display]=\"visible ? 'block' : 'none'\" (click)=\"onPanelClick($event)\" [@panelState]=\"visible ? 'visible' : 'hidden'\">\n            <div class=\"ui-overlaypanel-content\">\n                <ng-content></ng-content>\n            </div>\n            <a href=\"#\" *ngIf=\"showCloseIcon\" class=\"ui-overlaypanel-close ui-state-default\" (click)=\"onCloseClick($event)\">\n                <span class=\"fa fa-fw fa-close\"></span>\n            </a>\n        </div>\n    ",
            animations: [
                animations_1.trigger('panelState', [
                    animations_1.state('hidden', animations_1.style({
                        opacity: 0
                    })),
                    animations_1.state('visible', animations_1.style({
                        opacity: 1
                    })),
                    animations_1.transition('visible => hidden', animations_1.animate('400ms ease-in')),
                    animations_1.transition('hidden => visible', animations_1.animate('400ms ease-out'))
                ])
            ],
            providers: [domhandler_1.DomHandler]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, domhandler_1.DomHandler, core_1.Renderer2, core_1.ChangeDetectorRef])
    ], OverlayPanel);
    return OverlayPanel;
}());
exports.OverlayPanel = OverlayPanel;
var OverlayPanelModule = /** @class */ (function () {
    function OverlayPanelModule() {
    }
    OverlayPanelModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [OverlayPanel],
            declarations: [OverlayPanel]
        })
    ], OverlayPanelModule);
    return OverlayPanelModule;
}());
exports.OverlayPanelModule = OverlayPanelModule;
//# sourceMappingURL=overlaypanel.js.map