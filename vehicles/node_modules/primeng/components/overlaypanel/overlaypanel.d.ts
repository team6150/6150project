import { AfterViewInit, AfterViewChecked, OnDestroy, EventEmitter, Renderer2, ElementRef, ChangeDetectorRef } from '@angular/core';
import { DomHandler } from '../dom/domhandler';
export declare class OverlayPanel implements AfterViewInit, AfterViewChecked, OnDestroy {
    el: ElementRef;
    domHandler: DomHandler;
    renderer: Renderer2;
    private cd;
    dismissable: boolean;
    showCloseIcon: boolean;
    style: any;
    styleClass: string;
    appendTo: any;
    onBeforeShow: EventEmitter<any>;
    onAfterShow: EventEmitter<any>;
    onBeforeHide: EventEmitter<any>;
    onAfterHide: EventEmitter<any>;
    container: any;
    visible: boolean;
    documentClickListener: any;
    selfClick: boolean;
    target: any;
    willHide: boolean;
    willShow: boolean;
    targetClickEvent: boolean;
    closeClick: boolean;
    constructor(el: ElementRef, domHandler: DomHandler, renderer: Renderer2, cd: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    bindDocumentClickListener(): void;
    unbindDocumentClickListener(): void;
    toggle(event: any, target?: any): void;
    show(event: any, target?: any): void;
    hide(): void;
    onPanelClick(event: any): void;
    onCloseClick(event: any): void;
    ngOnDestroy(): void;
}
export declare class OverlayPanelModule {
}
