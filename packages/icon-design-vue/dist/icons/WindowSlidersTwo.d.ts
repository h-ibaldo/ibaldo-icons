import type { DefineComponent } from 'vue';

export interface WindowSlidersTwoProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowSlidersTwo: DefineComponent<WindowSlidersTwoProps>;

export default WindowSlidersTwo;
export { WindowSlidersTwo };
