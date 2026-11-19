import type { DefineComponent } from 'vue';

export interface SpinnerDotsFadeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SpinnerDotsFade: DefineComponent<SpinnerDotsFadeProps>;

export default SpinnerDotsFade;
export { SpinnerDotsFade };
