declare module 'locomotive-scroll' {
  export interface LocomotiveScrollOptions {
    el?: HTMLElement;
    name?: string;
    offset?: number[];
    repeat?: boolean;
    smooth?: boolean;
    direction?: 'vertical' | 'horizontal';
    lerp?: number;
    class?: string;
    scrollbarContainer?: false | HTMLElement;
    scrollbarClass?: string;
    scrollingClass?: string;
    draggingClass?: string;
    smoothClass?: string;
    initClass?: string;
    getSpeed?: boolean;
    getDirection?: boolean;
    multiplier?: number;
    firefoxMultiplier?: number;
    touchMultiplier?: number;
    resetNativeScroll?: boolean;
    tablet?: {
      smooth?: boolean;
      direction?: 'vertical' | 'horizontal';
      gestureDirection?: 'vertical' | 'horizontal';
      breakpoint?: number;
    };
    smartphone?: {
      smooth?: boolean;
      direction?: 'vertical' | 'horizontal';
      gestureDirection?: 'vertical' | 'horizontal';
    };
    lenisOptions?: any;
  }

  export default class LocomotiveScroll {
    constructor(options?: LocomotiveScrollOptions);
    init(): void;
    update(): void;
    destroy(): void;
    on(event: string, func: (args: any) => void): void;
    scrollTo(
      target: string | HTMLElement | number,
      options?: {
        offset?: number;
        callback?: () => void;
        duration?: number;
        easing?: [number, number, number, number];
        disableLerp?: boolean;
      }
    ): void;
    start(): void;
    stop(): void;
  }
}
