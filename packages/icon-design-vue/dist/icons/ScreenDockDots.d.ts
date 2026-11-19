import type { DefineComponent } from 'vue';

export interface ScreenDockDotsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScreenDockDots: DefineComponent<ScreenDockDotsProps>;

export default ScreenDockDots;
export { ScreenDockDots };
