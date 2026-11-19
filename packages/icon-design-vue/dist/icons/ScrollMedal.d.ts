import type { DefineComponent } from 'vue';

export interface ScrollMedalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScrollMedal: DefineComponent<ScrollMedalProps>;

export default ScrollMedal;
export { ScrollMedal };
