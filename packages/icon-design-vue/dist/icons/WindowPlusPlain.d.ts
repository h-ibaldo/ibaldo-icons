import type { DefineComponent } from 'vue';

export interface WindowPlusPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowPlusPlain: DefineComponent<WindowPlusPlainProps>;

export default WindowPlusPlain;
export { WindowPlusPlain };
