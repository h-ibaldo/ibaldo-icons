import type { DefineComponent } from 'vue';

export interface WindowEditPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowEditPlain: DefineComponent<WindowEditPlainProps>;

export default WindowEditPlain;
export { WindowEditPlain };
