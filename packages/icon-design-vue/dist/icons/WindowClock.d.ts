import type { DefineComponent } from 'vue';

export interface WindowClockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowClock: DefineComponent<WindowClockProps>;

export default WindowClock;
export { WindowClock };
