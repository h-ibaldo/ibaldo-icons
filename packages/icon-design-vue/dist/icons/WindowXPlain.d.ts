import type { DefineComponent } from 'vue';

export interface WindowXPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowXPlain: DefineComponent<WindowXPlainProps>;

export default WindowXPlain;
export { WindowXPlain };
