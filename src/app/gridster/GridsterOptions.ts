import {IGridsterOptions} from './IGridsterOptions';
import { Observable } from 'rxjs/Observable';

export class GridsterOptions {
    direction: string;
    lanes: number;
    widthHeightRatio: number;
    heightToFontSizeRatio: number;
    responsiveView: boolean;
    dragAndDrop: boolean;
    resizable: boolean;
    shrink: boolean;
    minWidth: number;

    defaults: IGridsterOptions = {
        lanes: 5,
        direction: 'horizontal',
        widthHeightRatio: 1,
        shrink: false,
        responsiveView: true,
        dragAndDrop: true,
        resizable: false
    };

    change: Observable<IGridsterOptions>;

    responsiveOptions: Array<IGridsterOptions> = [];
    basicOptions: IGridsterOptions;

    breakpointsMap = {
        sm: 576, // Small devices
        md: 768, // Medium devices
        lg: 992, // Large devices
        xl: 1200 // Extra large
    };

    constructor(config: IGridsterOptions) {
        this.basicOptions = config;

        this.responsiveOptions = this.extendResponsiveOptions(config.responsiveOptions || []);

        this.change = Observable.merge(
                Observable.of(this.getOptionsByWidth(document.documentElement.clientWidth)),
                Observable.fromEvent(window, 'resize')
                    .debounceTime(config.responsiveDebounce || 0)
                    .map((event: Event) => this.getOptionsByWidth(document.documentElement.clientWidth))
            )
            .distinctUntilChanged(null, (options: any) => options.minWidth);
    }

    getOptionsByWidth(width: number): IGridsterOptions {
        let i = 0;
        let options: IGridsterOptions = Object.assign({}, this.defaults, this.basicOptions);

        while (this.responsiveOptions[i]) {
            if (this.responsiveOptions[i].minWidth <= width) {
                options = this.responsiveOptions[i];
            }
            i++;
        }

        return options;
    }

    private extendResponsiveOptions(responsiveOptions: Array<IGridsterOptions>): Array<IGridsterOptions> {
        return responsiveOptions
            // responsive options are valid only with "breakpoint" property
            .filter(options => options.breakpoint)
            // set default minWidth if not given
            .map((options) => {
                return Object.assign({
                    minWidth: this.breakpointsMap[options.breakpoint] || 0
                }, options);
            })
            .sort((curr, next) => curr.minWidth - next.minWidth)
            .map((options) => <IGridsterOptions>Object.assign({}, this.defaults, this.basicOptions, options));
    }
}
