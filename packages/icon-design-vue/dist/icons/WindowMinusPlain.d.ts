import type { DefineComponent } from 'vue';

export interface WindowMinusPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowMinusPlain: DefineComponent<WindowMinusPlainProps>;

export default WindowMinusPlain;
export { WindowMinusPlain };
