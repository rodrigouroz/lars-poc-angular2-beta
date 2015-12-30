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
    private width: number;
    private timer: NodeJS.Timer;
    private requests: number;
    constructor() {
        this.requests = 0;
        ProgressIndicatorConnection.pending.subscribe((action: Actions) => {
            if (action == Actions.START) {
                if (this.requests == 0) {
                    this.startAnimation();
                }
                this.requests++;    
            } else {
                if (this.requests == 1) {
                    this.stopAnimation();
                }
                this.requests--;
            }
            
        });
    }
    get show(): boolean {
        return this.requests > 0 && this.width > 0;
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
    private calculateIncrement(): number {
        
        let increment: number = 0;
        let factor: number = 0;
        let correction:number = 0;
        
        if (this.width >= 0.9) {
            increment = 0.005;
        } else {
            
            if (this.width >= 0 && this.width < 0.25) {
                factor = 6;    
            } else if (this.width >= 0.25 && this.width < 0.65) {
                factor = 3;
            } else if (this.width >= 0.65 && this.width < 0.9) {
                factor = 2;
            }
            
            // TODO: correct by number of pending requests and don't restart on each new request
            
            increment = (Math.random() * factor) / 100;
        }

        return increment;
    }
    private increaseIndicator() {
        if (this.width >= 1 || this.requests == 0) {
            return;
        }

        this.width += this.calculateIncrement();
        this.timer = setTimeout(() => this.increaseIndicator(), 250);
    }
}
