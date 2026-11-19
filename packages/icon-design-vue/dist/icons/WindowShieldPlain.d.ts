import type { DefineComponent } from 'vue';

export interface WindowShieldPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowShieldPlain: DefineComponent<WindowShieldPlainProps>;

export default WindowShieldPlain;
export { WindowShieldPlain };
