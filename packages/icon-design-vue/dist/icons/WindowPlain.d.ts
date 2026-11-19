import type { DefineComponent } from 'vue';

export interface WindowPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowPlain: DefineComponent<WindowPlainProps>;

export default WindowPlain;
export { WindowPlain };
