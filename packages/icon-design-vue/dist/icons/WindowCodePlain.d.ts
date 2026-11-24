import type { DefineComponent } from 'vue';

export interface WindowCodePlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowCodePlain: DefineComponent<WindowCodePlainProps>;

export default WindowCodePlain;
export { WindowCodePlain };
