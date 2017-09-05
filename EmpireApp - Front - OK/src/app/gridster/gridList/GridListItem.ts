import {GridsterItemComponent} from '../gridster-item/gridster-item.component';
import {GridsterItemPrototypeDirective} from '../gridster-prototype/gridster-item-prototype.directive';
import {GridsterService} from '../gridster.service';

export class GridListItem {
    static BREAKPOINTS: Array<string> = ['sm', 'md', 'lg', 'xl'];
    static X_PROPERTY_MAP: any = {
        sm: 'xSm',
        md: 'xMd',
        lg: 'xLg',
        xl: 'xXl'
    };

    static Y_PROPERTY_MAP: any = {
        sm: 'ySm',
        md: 'yMd',
        lg: 'yLg',
        xl: 'yXl'
    };

    itemComponent: GridsterItemComponent;
    itemPrototype: GridsterItemPrototypeDirective;
    itemObject: any;

    get $element () {
        return this.getItem().$element;
    }

    get x () {
        const item = this.getItem();
        const breakpoint = item.gridster ? item.gridster.options.breakpoint : null;

        return this.getValueX(breakpoint);
    }
    set x (value: number) {
        const item = this.getItem();
        const breakpoint = item.gridster ? item.gridster.options.breakpoint : null;

        this.setValueX(value, breakpoint);
    }

    get y () {
        const item = this.getItem();
        const breakpoint = item.gridster ? item.gridster.options.breakpoint : null;

        return this.getValueY(breakpoint);
    }
    set y (value: number) {
        const item = this.getItem();
        const breakpoint = item.gridster ? item.gridster.options.breakpoint : null;

        this.setValueY(value, breakpoint);
    }

    get w () {
        const item = this.getItem();

        return item.w;
    }
    set w (value: number) {
        this.getItem().w = value;
    }

    get h () {
        const item = this.getItem();

        return item.h;
    }
    set h (value: number) {
        this.getItem().h = value;
    }

    get autoSize () {
        return this.getItem().autoSize;
    }
    set autoSize (value: boolean) {
        this.getItem().autoSize = value;
    }

    get dragAndDrop() {
        return !!this.getItem().dragAndDrop;
    }

    get resizable() {
        return !!this.getItem().resizable;
    }

    constructor () {}

    public setFromGridsterItem (item: GridsterItemComponent): GridListItem {
        if (this.isItemSet()) {
            throw new Error('GridListItem is already set.');
        }
        this.itemComponent = item;
        return this;
    }

    public setFromGridsterItemPrototype (item: GridsterItemPrototypeDirective): GridListItem {
        if (this.isItemSet()) {
            throw new Error('GridListItem is already set.');
        }
        this.itemPrototype = item;
        return this;
    }

    public setFromObjectLiteral (item: Object): GridListItem {
        if (this.isItemSet()) {
            throw new Error('GridListItem is already set.');
        }
        this.itemObject = item;
        return this;
    }

    public copy() {
        const itemCopy = new GridListItem();

        return itemCopy.setFromObjectLiteral({
            $element: this.$element,
            x: this.x,
            y: this.y,
            w: this.w,
            h: this.h,
            autoSize: this.autoSize,
            dragAndDrop: this.dragAndDrop,
            resizable: this.resizable
        });
    }

    public copyForBreakpoint(breakpoint?) {
        const itemCopy = new GridListItem();

        return itemCopy.setFromObjectLiteral({
            $element: this.$element,
            x: this.getValueX(breakpoint),
            y: this.getValueY(breakpoint),
            w: this.w,
            h: this.h,
            autoSize: this.autoSize,
            dragAndDrop: this.dragAndDrop,
            resizable: this.resizable
        });
    }

    public getValueX(breakpoint?) {
        const item = this.getItem();

        return item[this.getXProperty(breakpoint)];
    }

    public getValueY(breakpoint?) {
        const item = this.getItem();

        return item[this.getYProperty(breakpoint)];
    }

    public setValueX(value: number, breakpoint?) {
        const item = this.getItem();

        item[this.getXProperty(breakpoint)] = value;
    }

    public setValueY(value: number, breakpoint?) {
        const item = this.getItem();

        item[this.getYProperty(breakpoint)] = value;
    }

    public triggerChangeX(breakpoint?) {
        const item = this.itemComponent;
        if (item) {
            item[this.getXProperty(breakpoint) + 'Change'].emit(this.getValueX(breakpoint));
        }
    }

    public triggerChangeY(breakpoint?) {
        const item = this.itemComponent;
        if (item) {
            item[this.getYProperty(breakpoint) + 'Change'].emit(this.getValueY(breakpoint));
        }
    }

    public hasPositions(breakpoint?) {
        const x = this.getValueX(breakpoint);
        const y = this.getValueY(breakpoint);

        return (x || x === 0) &&
            (y || y === 0);
    }

    public applyPosition(gridster?: GridsterService) {
        const position = this.calculatePosition(gridster);

        this.$element.style.left = position.left + 'px';
        this.$element.style.top = position.top + 'px';
    }

    public calculatePosition(gridster?: GridsterService): {left: number, top: number} {
        if (!gridster && !this.itemComponent) {
            return {left: 0, top: 0};
        }
        gridster = gridster || this.itemComponent.gridster;

        return {
            left: this.x * gridster.cellWidth,
            top: this.y * gridster.cellHeight
        };
    }

    public applySize(gridster?: GridsterService): void {
        const size = this.calculateSize(gridster);

        this.$element.style.width = size.width + 'px';
        this.$element.style.height = size.height + 'px';
    }

    public calculateSize(gridster?: GridsterService): {width: number, height: number} {
        if (!gridster && !this.itemComponent) {
            return {width: 0, height: 0};
        }
        gridster = gridster || this.itemComponent.gridster;

        let width = this.w;
        let height = this.h;

        if (gridster.options.direction === 'vertical') {
            width = Math.min(this.w, gridster.options.lanes);
        }
        if (gridster.options.direction === 'horizontal') {
            height = Math.min(this.h, gridster.options.lanes);
        }

        return {
            width: width * gridster.cellWidth,
            height: height * gridster.cellHeight
        };
    }

    private getXProperty(breakpoint?: string) {

        if (breakpoint && this.itemComponent) {
            return GridListItem.X_PROPERTY_MAP[breakpoint];
        } else {
            return 'x';
        }
    }

    private getYProperty(breakpoint?: string) {

        if (breakpoint && this.itemComponent) {
            return GridListItem.Y_PROPERTY_MAP[breakpoint];
        } else {
            return 'y';
        }
    }

    private getItem(): any {
        const item = this.itemComponent || this.itemPrototype || this.itemObject;

        if (!item) {
            throw new Error('GridListItem is not set.');
        }
        return item;
    }

    private isItemSet() {
        return this.itemComponent || this.itemPrototype || this.itemObject;
    }
}
