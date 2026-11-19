import type { DefineComponent } from 'vue';

export interface WindowSpinnerRaysProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowSpinnerRays: DefineComponent<WindowSpinnerRaysProps>;

export default WindowSpinnerRays;
export { WindowSpinnerRays };
