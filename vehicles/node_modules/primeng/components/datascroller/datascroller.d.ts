import { ElementRef, AfterViewInit, DoCheck, OnDestroy, Renderer2, EventEmitter, QueryList, TemplateRef, IterableDiffers } from '@angular/core';
import { DomHandler } from '../dom/domhandler';
export declare class DataScroller implements AfterViewInit, DoCheck, OnDestroy {
    el: ElementRef;
    renderer: Renderer2;
    domHandler: DomHandler;
    differs: IterableDiffers;
    rows: number;
    lazy: boolean;
    onLazyLoad: EventEmitter<any>;
    style: any;
    styleClass: string;
    buffer: number;
    inline: boolean;
    scrollHeight: any;
    loader: any;
    trackBy: Function;
    immutable: boolean;
    contentViewChild: ElementRef;
    header: any;
    footer: any;
    templates: QueryList<any>;
    _value: any[];
    itemTemplate: TemplateRef<any>;
    dataToRender: any[];
    first: number;
    scrollFunction: any;
    contentElement: HTMLDivElement;
    differ: any;
    constructor(el: ElementRef, renderer: Renderer2, domHandler: DomHandler, differs: IterableDiffers);
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    value: any[];
    handleDataChange(): void;
    ngDoCheck(): void;
    load(): void;
    reset(): void;
    isEmpty(): boolean;
    createLazyLoadMetadata(): any;
    bindScrollListener(): void;
    ngOnDestroy(): void;
}
export declare class DataScrollerModule {
}
