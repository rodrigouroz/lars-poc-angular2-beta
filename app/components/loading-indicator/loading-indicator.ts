import {Component} from 'angular2/core';
import {NgStyle} from 'angular2/common';
import {ProgressIndicatorConnection, Actions} from '../../lib/progress-indicator-backend';

@Component({
    selector: 'loading-indicator',
    templateUrl: 'app/components/loading-indicator/loading-indicator.html',
    styleUrls: ['app/components/loading-indicator/loading-indicator.css'],
    directives: [NgStyle]
})

export class LoadingIndicator {
    private show: boolean;
    private width: number;
    private timer: NodeJS.Timer;
    private requests: number;
    constructor() {
        this.requests = 0;
        this.show = false;
        ProgressIndicatorConnection.pending.subscribe((action: Actions) => {
            if (action == Actions.START) {
                this.requests++;    
            } else {
                this.requests--;
            }
            
            this.show = this.requests > 0 && this.width > 0;
            
            if (this.requests > 0) {
                // start timers
                this.startAnimation();
            } else {
                // stop timers
                this.stopAnimation();
            }
        });
    }
    get widthStyle(): string {
        return (this.width * 100) + '%';
    }
    private startAnimation() {
        this.width = 0;
        this.timer = setTimeout(() => this.increaseIndicator(), 250);
    }
    private stopAnimation() {
        clearTimeout(this.timer);
    }
    private increaseIndicator() {
        if (this.width >= 1 || this.requests == 0) {
            return;
        }

        let rnd: number = 0;

        if (this.width >= 0 && this.width < 0.25) {
            // Start out between 3 - 6% increments
            rnd = (Math.random() * (5 - 3 + 1) + 3) / 100;
        } else if (this.width >= 0.25 && this.width < 0.65) {
            // increment between 0 - 3%
            rnd = (Math.random() * 3) / 100;
        } else if (this.width >= 0.65 && this.width < 0.9) {
            // increment between 0 - 2%
            rnd = (Math.random() * 2) / 100;
        } else if (this.width >= 0.9 && this.width < 0.99) {
            // finally, increment it .5 %
            rnd = 0.005;
        } else {
            // after 99%, don't increment:
            rnd = 0;
        }
        this.width += rnd;
        this.timer = setTimeout(() => this.increaseIndicator(), 250);
    }
}
