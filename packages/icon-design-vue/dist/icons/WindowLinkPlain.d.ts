import type { DefineComponent } from 'vue';

export interface WindowLinkPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowLinkPlain: DefineComponent<WindowLinkPlainProps>;

export default WindowLinkPlain;
export { WindowLinkPlain };
