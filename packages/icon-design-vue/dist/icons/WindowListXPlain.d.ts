import type { DefineComponent } from 'vue';

export interface WindowListXPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowListXPlain: DefineComponent<WindowListXPlainProps>;

export default WindowListXPlain;
export { WindowListXPlain };
