import type { DefineComponent } from 'vue';

export interface WindowSlidersProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowSliders: DefineComponent<WindowSlidersProps>;

export default WindowSliders;
export { WindowSliders };
