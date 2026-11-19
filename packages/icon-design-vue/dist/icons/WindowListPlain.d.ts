import type { DefineComponent } from 'vue';

export interface WindowListPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowListPlain: DefineComponent<WindowListPlainProps>;

export default WindowListPlain;
export { WindowListPlain };
