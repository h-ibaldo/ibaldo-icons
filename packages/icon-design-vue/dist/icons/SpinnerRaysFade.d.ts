import type { DefineComponent } from 'vue';

export interface SpinnerRaysFadeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SpinnerRaysFade: DefineComponent<SpinnerRaysFadeProps>;

export default SpinnerRaysFade;
export { SpinnerRaysFade };
