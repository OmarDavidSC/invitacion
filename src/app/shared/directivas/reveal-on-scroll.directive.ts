import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';

@Directive({
    selector: '[appRevealOnScroll]'
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
    @Input() revealOnce = true;

    private obs?: IntersectionObserver;

    constructor(private el: ElementRef<HTMLElement>) { }

    ngAfterViewInit(): void {
        const host = this.el.nativeElement;
        const target = (host.firstElementChild as HTMLElement) || host;

        target.classList.add('reveal-init');

        this.obs = new IntersectionObserver(
            (entries) => {
                for (const e of entries) {
                    if (e.isIntersecting) {
                        // delay mínimo para que se perciba al entrar
                        setTimeout(() => target.classList.add('reveal-in'), 70);
                        if (this.revealOnce) this.obs?.disconnect();
                    } else if (!this.revealOnce) {
                        target.classList.remove('reveal-in');
                    }
                }
            },
            { threshold: 0.15, rootMargin: '0px 0px -25% 0px' }
        );

        this.obs.observe(target);
    }

    ngOnDestroy(): void {
        this.obs?.disconnect();
    }
}