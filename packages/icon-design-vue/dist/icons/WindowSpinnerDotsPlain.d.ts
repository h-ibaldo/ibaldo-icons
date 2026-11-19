import type { DefineComponent } from 'vue';

export interface WindowSpinnerDotsPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowSpinnerDotsPlain: DefineComponent<WindowSpinnerDotsPlainProps>;

export default WindowSpinnerDotsPlain;
export { WindowSpinnerDotsPlain };
