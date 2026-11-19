import type { DefineComponent } from 'vue';

export interface WindowPlayPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowPlayPlain: DefineComponent<WindowPlayPlainProps>;

export default WindowPlayPlain;
export { WindowPlayPlain };
