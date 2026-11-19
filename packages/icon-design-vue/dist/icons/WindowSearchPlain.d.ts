import type { DefineComponent } from 'vue';

export interface WindowSearchPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowSearchPlain: DefineComponent<WindowSearchPlainProps>;

export default WindowSearchPlain;
export { WindowSearchPlain };
