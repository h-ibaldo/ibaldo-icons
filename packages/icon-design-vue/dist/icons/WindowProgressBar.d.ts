import type { DefineComponent } from 'vue';

export interface WindowProgressBarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowProgressBar: DefineComponent<WindowProgressBarProps>;

export default WindowProgressBar;
export { WindowProgressBar };
