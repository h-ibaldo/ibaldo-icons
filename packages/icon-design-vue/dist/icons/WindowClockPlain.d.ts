import type { DefineComponent } from 'vue';

export interface WindowClockPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowClockPlain: DefineComponent<WindowClockPlainProps>;

export default WindowClockPlain;
export { WindowClockPlain };
