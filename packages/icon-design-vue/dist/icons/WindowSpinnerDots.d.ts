import type { DefineComponent } from 'vue';

export interface WindowSpinnerDotsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowSpinnerDots: DefineComponent<WindowSpinnerDotsProps>;

export default WindowSpinnerDots;
export { WindowSpinnerDots };
