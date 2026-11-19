import type { DefineComponent } from 'vue';

export interface WindowBanPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowBanPlain: DefineComponent<WindowBanPlainProps>;

export default WindowBanPlain;
export { WindowBanPlain };
