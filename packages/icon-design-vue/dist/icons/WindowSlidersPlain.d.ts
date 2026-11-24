import type { DefineComponent } from 'vue';

export interface WindowSlidersPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowSlidersPlain: DefineComponent<WindowSlidersPlainProps>;

export default WindowSlidersPlain;
export { WindowSlidersPlain };
