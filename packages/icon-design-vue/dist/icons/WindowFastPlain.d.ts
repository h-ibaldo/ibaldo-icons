import type { DefineComponent } from 'vue';

export interface WindowFastPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowFastPlain: DefineComponent<WindowFastPlainProps>;

export default WindowFastPlain;
export { WindowFastPlain };
