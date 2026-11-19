import type { DefineComponent } from 'vue';

export interface WindowPlusCenterPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowPlusCenterPlain: DefineComponent<WindowPlusCenterPlainProps>;

export default WindowPlusCenterPlain;
export { WindowPlusCenterPlain };
