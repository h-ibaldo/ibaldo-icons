import type { DefineComponent } from 'vue';

export interface WindowButtonPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowButtonPlain: DefineComponent<WindowButtonPlainProps>;

export default WindowButtonPlain;
export { WindowButtonPlain };
