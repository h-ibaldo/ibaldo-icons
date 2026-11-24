import type { DefineComponent } from 'vue';

export interface WindowListMinusPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowListMinusPlain: DefineComponent<WindowListMinusPlainProps>;

export default WindowListMinusPlain;
export { WindowListMinusPlain };
