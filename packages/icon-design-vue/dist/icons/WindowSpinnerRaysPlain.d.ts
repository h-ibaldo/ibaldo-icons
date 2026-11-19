import type { DefineComponent } from 'vue';

export interface WindowSpinnerRaysPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowSpinnerRaysPlain: DefineComponent<WindowSpinnerRaysPlainProps>;

export default WindowSpinnerRaysPlain;
export { WindowSpinnerRaysPlain };
