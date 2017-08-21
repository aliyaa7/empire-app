
import { Component, ViewChild, TemplateRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { GridsterComponent } from 'app/gridster/gridster.component';
import { IGridsterOptions } from 'app/gridster/IGridsterOptions';
import { IGridsterDraggableOptions } from 'app/gridster/IGridsterDraggableOptions';

/* ---- modal ---- */
import { ModalOptionsComponent } from 'app/modal-options/modal-options.component';
import { ImageUploadModule } from 'angular2-image-upload';


@Component({
  selector: 'app-maker',
  templateUrl: './maker.component.html',
  styleUrls: ['./maker.component.css']
})
export class MakerComponent {

    @ViewChild(GridsterComponent) gridster: GridsterComponent;

    itemOptions = {
        maxWidth: 5,
        maxHeight: 10
    };
    gridsterOptions: IGridsterOptions = {
        // core configuration is default one - for smallest view. It has hidden minWidth: 0.
        lanes: 3, // amount of lanes (cells) in the grid
        direction: 'vertical', // floating top - vertical, left - horizontal
        dragAndDrop: true, // enable/disable drag and drop for all items in grid
        resizable: true, // enable/disable resizing by drag and drop for all items in grid
        widthHeightRatio: 1, // proportion between item width and height
        shrink: true,
        responsiveView: true, // turn on adopting items sizes on window resize and enable responsiveOptions
        responsiveDebounce: 500, // window resize debounce time
        // List of different gridster configurations for different breakpoints.
        // Each breakpoint is defined by name stored in "breakpoint" property. There is fixed set of breakpoints
        // available to use with default minWidth assign to each.
        // - sm: 576 - Small devices
        // - md: 768 - Medium devices
        // - lg: 992 - Large devices
        // - xl: 1200 - Extra large
        // MinWidth for each breakpoint can be overwritten like it's visible below.
        // ResponsiveOptions can overwrite default configuration with any option available.
        responsiveOptions: [
            {
                breakpoint: 'sm',
                minWidth: 480,
                lanes: 2
            },
            {
                breakpoint: 'md',
                minWidth: 768,
                lanes: 2
            },
            {
                breakpoint: 'lg',
                minWidth: 1250,
                lanes: 2
            },
            {
                breakpoint: 'xl',
                minWidth: 1800,
                lanes: 2
            }
        ]
    };

    gridsterDraggableOptions: IGridsterDraggableOptions = {
        handlerClass: 'panel-heading'
    };

    title = 'Nom de l\'application';
    widgets: Array<any> = [];

    constructor() {
    }

    getTitle() {
        return this.title;
    }

    setWidth(widget: any, size: number, e: MouseEvent, gridster) {
        e.stopPropagation();
        e.preventDefault();
        if (size < 1) {
            size = 1;
        }
        widget.w = size;
        gridster.reload();

        return false;
    }

    setHeight(widget: any, size: number, e: MouseEvent, gridster) {
        e.stopPropagation();
        e.preventDefault();
        if (size < 1) {
            size = 1;
        }
        widget.h = size;
        gridster.reload();

        return false;
    }

    optionsChange(options: IGridsterOptions) {
        this.gridsterOptions = options;
    }

    swap() {
        this.widgets[0].x = 3;
        this.widgets[3].x = 0;
    }

    addWidgetFromDrag(gridster: GridsterComponent, event: any, type: string) {
        const item = event.item;
        let content = '';
        if (type === 'image') {
            content = 'Image';
        }
        this.widgets.push({
            x: item.x, y: item.y, w: item.w, h: item.h,
            dragAndDrop: true,
            resizable: true,
            title: 'Élément de base',
            type: type,
            content: content
        });
    }

    over(event) {
        const size = event.item.calculateSize(event.gridster);

        event.item.itemPrototype.$element.querySelector('.gridster-item-inner').style.width = size.width + 'px';
        event.item.itemPrototype.$element.querySelector('.gridster-item-inner').style.height = size.height + 'px';
        event.item.itemPrototype.$element.classList.add('is-over');
    }

    out(event) {
        event.item.itemPrototype.$element.querySelector('.gridster-item-inner').style.width = '';
        event.item.itemPrototype.$element.querySelector('.gridster-item-inner').style.height = '';
        event.item.itemPrototype.$element.classList.remove('is-over');
    }

    remove($event, index: number, gridster: GridsterComponent) {
        $event.preventDefault();
        this.widgets.splice(index, 1);
    }

    itemChange($event: any, gridster) {
        console.log('item change', $event, gridster);
    }


}
