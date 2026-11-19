import type { DefineComponent } from 'vue';

export interface SpinnerRaysProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SpinnerRays: DefineComponent<SpinnerRaysProps>;

export default SpinnerRays;
export { SpinnerRays };
