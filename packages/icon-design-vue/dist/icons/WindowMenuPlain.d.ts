import type { DefineComponent } from 'vue';

export interface WindowMenuPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowMenuPlain: DefineComponent<WindowMenuPlainProps>;

export default WindowMenuPlain;
export { WindowMenuPlain };
