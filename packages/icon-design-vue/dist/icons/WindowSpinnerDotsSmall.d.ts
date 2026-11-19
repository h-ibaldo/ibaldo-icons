import type { DefineComponent } from 'vue';

export interface WindowSpinnerDotsSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowSpinnerDotsSmall: DefineComponent<WindowSpinnerDotsSmallProps>;

export default WindowSpinnerDotsSmall;
export { WindowSpinnerDotsSmall };
