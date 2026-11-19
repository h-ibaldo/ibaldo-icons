import type { DefineComponent } from 'vue';

export interface WindowListCheckPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowListCheckPlain: DefineComponent<WindowListCheckPlainProps>;

export default WindowListCheckPlain;
export { WindowListCheckPlain };
