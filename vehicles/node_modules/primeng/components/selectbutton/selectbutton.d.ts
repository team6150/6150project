import { EventEmitter } from '@angular/core';
import { SelectItem } from '../common/selectitem';
import { ObjectUtils } from '../utils/objectutils';
import { ControlValueAccessor } from '@angular/forms';
export declare const SELECTBUTTON_VALUE_ACCESSOR: any;
export declare class SelectButton implements ControlValueAccessor {
    objectUtils: ObjectUtils;
    tabindex: number;
    multiple: boolean;
    style: any;
    styleClass: string;
    disabled: boolean;
    optionLabel: string;
    onOptionClick: EventEmitter<any>;
    onChange: EventEmitter<any>;
    value: any;
    focusedItem: HTMLInputElement;
    _options: any[];
    onModelChange: Function;
    onModelTouched: Function;
    constructor(objectUtils: ObjectUtils);
    options: any[];
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(val: boolean): void;
    onItemClick(event: any, option: SelectItem, checkbox: HTMLInputElement, index: number): void;
    onFocus(event: Event): void;
    onBlur(event: any): void;
    isSelected(option: SelectItem): boolean;
    findItemIndex(option: SelectItem): number;
}
export declare class SelectButtonModule {
}
