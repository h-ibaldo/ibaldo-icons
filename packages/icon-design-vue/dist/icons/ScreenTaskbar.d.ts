import type { DefineComponent } from 'vue';

export interface ScreenTaskbarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScreenTaskbar: DefineComponent<ScreenTaskbarProps>;

export default ScreenTaskbar;
export { ScreenTaskbar };
