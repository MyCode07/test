import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { isMobile } from "../utils/isMobile.js";

gsap.registerPlugin(ScrollTrigger)

let dir = 'vertical';
let moovingDirection = () => {
    if (window.innerWidth <= 1024) {
        dir = 'horizontal';
    }
    else {
        dir = 'vertical';
        ScrollTrigger.refresh();
    }
}

moovingDirection();
window.addEventListener('resize', moovingDirection,)

window.addEventListener('resize', function () {
    "use strict";

    if (window.innerWidth == 1024) {
        window.location.reload();
    }
    else if (window.innerWidth == 1025) {
        window.location.reload();
    }

});

function scroll(target, options, reverse) {
    const timeline = gsap.timeline({
        repeat: -1,
        onReverseComplete() {
            this.totalTime(this.rawTime() + this.duration() * 10);
        }
    });
    options = options || {};
    options.ease || (options.ease = "none");

    if (dir == 'vertical') {
        timeline.to(target, {
            yPercent: reverse ? -100 : 100,
            ...options,
        }, 0);
    }
    else {
        timeline.to(target, {
            xPercent: reverse ? -100 : 100,
            ...options,
        }, 0);
    }

    return timeline;
}

export const runTicker = () => {
    const tickers = document.querySelectorAll('._ticker-text');

    if (!tickers.length) return

    tickers.forEach(line => {
        let reverse = line.closest('._ticker').hasAttribute('data-reverse');

        let direction = 1;
        const roll = scroll(line, { duration: 20 }, reverse ? true : false)

        if (!isMobile.any())
            ScrollTrigger.create({
                onUpdate(self) {
                    if (self.direction !== direction) {
                        direction *= -1;
                        gsap.to(roll, {
                            timeScale: direction,
                            overwrite: true,
                        });
                    }

                    roll.timeScale(self.direction * 2)

                    setTimeout(() => {
                        roll.timeScale(self.direction)
                    }, 100);
                }
            });
    })
}
