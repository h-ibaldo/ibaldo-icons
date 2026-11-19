import type { DefineComponent } from 'vue';

export interface WindowCheckPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowCheckPlain: DefineComponent<WindowCheckPlainProps>;

export default WindowCheckPlain;
export { WindowCheckPlain };
