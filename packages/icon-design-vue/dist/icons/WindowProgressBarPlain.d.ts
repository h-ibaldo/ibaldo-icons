import type { DefineComponent } from 'vue';

export interface WindowProgressBarPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowProgressBarPlain: DefineComponent<WindowProgressBarPlainProps>;

export default WindowProgressBarPlain;
export { WindowProgressBarPlain };
