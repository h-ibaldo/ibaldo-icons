import type { DefineComponent } from 'vue';

export interface WindowMinusCenterPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowMinusCenterPlain: DefineComponent<WindowMinusCenterPlainProps>;

export default WindowMinusCenterPlain;
export { WindowMinusCenterPlain };
