import type { DefineComponent } from 'vue';

export interface WindowListPlusPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowListPlusPlain: DefineComponent<WindowListPlusPlainProps>;

export default WindowListPlusPlain;
export { WindowListPlusPlain };
