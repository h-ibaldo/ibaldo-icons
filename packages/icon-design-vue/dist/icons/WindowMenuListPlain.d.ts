import type { DefineComponent } from 'vue';

export interface WindowMenuListPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowMenuListPlain: DefineComponent<WindowMenuListPlainProps>;

export default WindowMenuListPlain;
export { WindowMenuListPlain };
