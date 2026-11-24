import type { DefineComponent } from 'vue';

export interface WindowTwoDotsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowTwoDots: DefineComponent<WindowTwoDotsProps>;

export default WindowTwoDots;
export { WindowTwoDots };
